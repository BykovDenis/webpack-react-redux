import React, { Component } from 'react';
import { connect } from 'react-redux';
// модуль комбинирования работы нескольких актшионов
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actions';
// подгрузка компонентов
import Button from '../components/button/button';
import MainNav from '../components/main-nav';

class ReactComponent extends Component {
  render() {
    const data = this.props.data;
    const { props } = this;
    return (
      <div>
        <MainNav />
        {props.children}
        custom component
        <br />
        <Button
          btnProps={{
            label: data.btnLabel,
            type: 'default',
            eventClick: props.appendCounter
          }}
        />
        <br />
          Current counter { data.counter }
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactComponent);
