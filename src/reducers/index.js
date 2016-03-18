import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import { targetStory, defaultData } from './search.js';

const rootReducer = combineReducers({
  targetStory,
  defaultData,
  routing: routeReducer
});

export default rootReducer;