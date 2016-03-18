import * as actionTypes from '../actionTypes/actionTypes.js';
import 'whatwg-fetch';

export const requestData = () => {
  return {
    type: actionTypes.GET_DATA
  }
}

export const receiveData = (data) => {
  console.log('data received: ', data);
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    results: data,
    receivedAt: Date.now()
  }
}

export const errorHandler = (error) => {
  return {
    type: actionTypes.GET_DATA_FAILURE,
    results: error
  }
}

export const gatherData = (input) => {
  return (dispatch) => {
    dispatch(requestData)

    return fetch('/api/twitsearch', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({input: input}),
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(json => dispatch(receiveData(json)))
    .catch(err => dispatch(errorHandler(err)))
  }
}



