import { combineReducers } from 'redux';
import input from '../actions/actions.js';

import { routeReducer } from 'react-router-redux';




const rootReducer = combineReducers({
  input,
  routing: routeReducer
});

export default rootReducer;