/**
 * Created by bykovdenis on 12.03.17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import data from './reducers/reducer';

export default combineReducers({
  routing: routerReducer,
  data
});
