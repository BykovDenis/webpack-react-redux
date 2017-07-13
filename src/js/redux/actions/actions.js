/**
 * Created by Denis on 18.04.2017.
 */
import {
    GET_DATA,
    COUNTER_INCREMENT,
} from '../constants/constants';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export function responseData() {
  return {
    type: GET_DATA
  };
}

export function appendCounter() {
  return {
    type: COUNTER_INCREMENT
  };
}
