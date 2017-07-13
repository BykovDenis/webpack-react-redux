import React, { Component } from 'react';
import { connect } from 'react-redux';
// модуль комбинирования работы нескольких актшионов
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as actionCreators from '../redux/actions/actions';
// подгрузка компонентов
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
        <RaisedButton
          label={data.btnLabel}
          primary={'true'}
          onClick={props.appendCounter}
        />
        <br />
          Current counter { data.counter }
        <br />
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
