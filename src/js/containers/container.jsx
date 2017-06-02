import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// модуль комбинирования работы нескольких актшионов
import { bindActionCreators } from 'redux';
import getActionData from '../redux/actions/actions';
// подгрузка компонентов
import Button from '../components/button/button';

class ReactComponent extends Component {
  static get propTypes() {
    return {
      getData: PropTypes.func.isRequired,
      currentStore: PropTypes.object.isRequired,
    };
  }
  componentWillMount() {
    this.props.getData();
  }
  render() {
    this.i = 2;
    console.log(this.i);
    return (
      <div>
        custom component
        <br />
        <Button
          btnProps={{
            label: this.props.currentStore.Reducer.btnLabel,
            type: 'default'
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
