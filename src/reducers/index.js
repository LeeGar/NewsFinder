import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import search from './search.js';

const rootReducer = combineReducers({
  search: search,
  routing: routeReducer
});

export default rootReducer;