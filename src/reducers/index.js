import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import { GET_DATA, RECEIVE_DATA } from '../actions/actions';

export default function handleInput(state, action) {
  console.log('REDUCER:::: action.type: ', action.type, 'state: ', state)

  return state = null;
}

export default function displayData(state, action) {

  return state = null;
}


const rootReducer = combineReducers({
  handleInput,
  displayData,
  routing: routeReducer
});

export default rootReducer;