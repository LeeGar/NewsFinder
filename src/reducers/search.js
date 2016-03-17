import * as actionTypes from '../actionTypes/actionTypes.js';

const DEFAULT_STATE = {};

const gotData = (state, action) => ([
  ...state,
  action.data
]);

export default function search (state = {}, action) {
  console.log('search is getting called: ', state);
  return ({
    [actionTypes.GET_DATA_SUCCESS]: gotData
  }[action.type] || (s => s))(state, action);
}