import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root/Root.js';

import './common/base.scss';

const store = configureStore();

ReactDOM.render((
  <Root store={store} />
  ),
  document.getElementById('app')
);