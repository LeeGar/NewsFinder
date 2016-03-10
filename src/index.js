import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// import { Router, browserHistory } from 'react-router';
// import Routes from './routes';

import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';

import './common/base.scss';

const DOM_APP_EL_ID = 'app';

const store = configureStore();

ReactDOM.render((
  <Root store={store} />
  ),
  document.getElementById(DOM_APP_EL_ID)
);