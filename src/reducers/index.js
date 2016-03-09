import { combineReducers } from 'redux';
import { input } from './input';
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  input,
  routing: routeReducer
});

export default rootReducer;