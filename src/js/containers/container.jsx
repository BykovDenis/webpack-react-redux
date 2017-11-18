import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// reselect
import { createSelector } from 'reselect';
// модуль комбинирования работы нескольких актшионов
import { bindActionCreators } from 'redux';
import * as getActionData from '../redux/actions/actions';
// подгрузка компонентов
import Button from '../components/button/button';

class ReactComponent extends Component {
  static get propTypes() {
    return {
      getData: PropTypes.object.isRequired,
      currentStore: PropTypes.object.isRequired,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      props: {
        props1: 'first props',
        props2: 'second props'
      }
    };
    this.changePropsState = this.changePropsState.bind(this);
  }
  componentWillMount() {
    this.props.getData.getActionData();
    this.props.getData.getAirportsData();
  }
  changePropsState() {
    this.setState({
      counter: this.state.counter + 1,
      props: this.state.props
    });
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
            eventClick: this.changePropsState
          }}
        />
      </div>
    );
  }
}

const getDataProps = dispatch => (
  { getData: bindActionCreators(getActionData, dispatch) }
);

export default connect(
  state => ({ currentStore: state }),
  getDataProps
)(ReactComponent);
