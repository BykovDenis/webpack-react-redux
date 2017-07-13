/**
 * Created by Denis on 18.04.2017.
 */
import {
    GET_DATA,
    COUNTER_INCREMENT,
} from '../constants/constants';
import initialState from '../initialState/initialState';

require('es6-promise').polyfill();
require('isomorphic-fetch');

/*
const getHTTP = (url, callback, dispatch) => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      callback(data, dispatch);
    });
};
*/

export const responseData = (data = initialState, dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: data
  });
};

export const appendCounter = (counter, dispatch) => {
  dispatch({
    type: COUNTER_INCREMENT,
    payload: counter
  });
};
