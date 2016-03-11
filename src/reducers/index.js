import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import { USER_INPUT } from '../actions/actions.js';

export default function handleInput(state, action) {
  console.log('REDUCERS:::: action.type: ', action.type, 'state: ', state)
  
  return state = null;
}


const rootReducer = combineReducers({
  handleInput,
  routing: routeReducer
});

export default rootReducer;