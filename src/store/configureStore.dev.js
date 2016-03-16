import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router'

const reduxRouterMiddleware = syncHistory(browserHistory);

const logger = createLogger();

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(logger, thunk, reduxRouterMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};