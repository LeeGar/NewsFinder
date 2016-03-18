import * as actionTypes from '../actionTypes/actionTypes.js';

const DEFAULT_STATE = {
  searching: false,
  results: []
}
export const targetStory = (state = 'default', action) => {
  console.log('target story state: ', state);
  switch(action.type) {
    case actionTypes.GET_QUERY:
      return action.query
    default:
      return state
  }
}

export const defaultData = (state = {}, action) => {
  console.log('defaultData REDUCER is getting called: ', 'state: ', state, 'action: ', action)
    switch (action.type) {
      case actionTypes.GET_DATA_SUCCESS:
      case actionTypes.GET_DATA_FAILURE:
      case actionTypes.GET_QUERY:
        return Object.assign({}, state, {
          [action.query]: getData(action.query, action)
        })
      default:
        return state
  }
}

export const getData = (state = DEFAULT_STATE, action) => {
  console.log('getData REDUCER is getting called: ', 'state: ', state, 'action: ', action)
  switch (action.type) {
      case actionTypes.GET_QUERY:
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


