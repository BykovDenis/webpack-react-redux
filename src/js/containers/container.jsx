import React, { Component } from 'react';
import { connect } from 'react-redux';
// reselect
import { createSelector } from 'reselect';
// модуль комбинирования работы нескольких актшионов
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actions';
// подгрузка компонентов
import Button from '../components/button/button';

class ReactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      props: {
        props1: 'first props',
        props2: 'second props'
      }
    };
  }
  componentWillMount() {
    this.counter = this.props.getActionData();
  }
  render() {
    const totalSelector = createSelector(
      [
        state => state.counter,
        state => state.props.props1,
        state => state.props.props2
      ],
      (props1, props2, counter) => (`${props1} ${props2} ${counter}`)
    );
    console.dir(totalSelector(this.state));
    return (
      <div>
        custom component
        <br />
        <Button
          btnProps={{
            label: this.props.currentStore.Reducer.btnLabel,
            type: 'default',
            eventClick: this.props
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  { currentStore: state }
);

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactComponent);
