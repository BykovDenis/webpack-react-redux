/**
 * Created by Denis on 18.04.2017.
 */
import initialState from '../initialState/initialState';
import * as constants from '../constants/constants';

export default function Reducer(state = initialState, action) {
  const params = action.payload;
  if (action.type === constants.GET_DATA && params) {
    return Object.assign({}, state, params);
  }
  return state;
}
