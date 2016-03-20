import * as actionTypes from '../actionTypes/actionTypes.js';
import 'whatwg-fetch';

export const getQuery = (query) => {
  return {
    type: actionTypes.GET_QUERY,
    query
  }
}

export const gatherData = (input) => {
  return (dispatch) => {
    dispatch(getQuery(input))

    return fetch('/api/getstories', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({input: input}),
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(json => dispatch(receiveData(input, json)))
    .catch(err => dispatch(errorHandler(err)))
  }
}

export const receiveData = (query, data) => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    query: query,
    results: data,
    receivedAt: Date.now()
  }
}

export const errorHandler = (err) => {
  return {
    type: actionTypes.GET_DATA_FAILURE,
    err
  }
}




