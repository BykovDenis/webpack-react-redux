/**
 * Created by Denis on 18.04.2017.
 */
import * as constants from '../constants/constants';
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

const responseData = (data = initialState, dispatch) => {
  dispatch({
    type: constants.GET_DATA,
    payload: data
  });
};

const getActionData = () => (dispatch) => {
  responseData(initialState, dispatch);
};

export default getActionData;
