import * as actionTypes from '../actionTypes/actionTypes.js';

const DEFAULT_STATE = {
  searching: false,
  results: []
}

export const getData = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
      case actionTypes.GET_DATA:
        return Object.assign({}, state, {
          searching: true
      })

      case actionTypes.GET_DATA_SUCCESS:
        return Object.assign({}, state, {
          searching: false,
          results: action.results,
          receivedAt: action.receivedAt
      })

      case actionTypes.GET_DATA_FAILURE:
        return Object.assign({}, state, {
          searching: false,
          results: [
          ...state, event(undefined, action)
          ]
       })
    default: return state
  }
}

export const defaultData = (state = {}, action) => {
    switch (action.type) {
      case actionTypes.GET_DATA_SUCCESS:
      case actionTypes.GET_DATA_FAILURE:
      case actionTypes.GET_DATA:
        return Object.assign({}, state, {
          [action.type]: getData(state = {}, action)
        })
      default:
        return state
  }
}

