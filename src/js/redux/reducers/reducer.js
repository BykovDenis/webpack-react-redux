/**
 * Created by Denis on 18.04.2017.
 */
import handleActions from 'redux-actions/lib/handleActions';
import initialState from '../initialState/initialState';
import {
  GET_DATA,
  COUNTER_INCREMENT,
} from '../constants/constants';

export default handleActions({
  [GET_DATA]: state => ({
    ...state,
  }),
  [COUNTER_INCREMENT]: state => ({
    ...state,
    counter: state.counter + 1
  })
}, initialState);
