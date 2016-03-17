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
          results: [
          ...state.items, event(undefined, action)
          ]
      })

      case actionTypes.GET_DATA_FAILURE:
        return Object.assign({}, state, {
          searching: false,
          results: [
          ...state.items, event(undefined, action)
          ]
       })
    default: return state
  }
}

