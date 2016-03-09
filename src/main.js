import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';

import Routes from './routes';
//import newsFlash from './reducers/newsFlash';

import './common/base.css';

//let store = createStore(newsFlash);

const DOM_APP_EL_ID = 'app';


ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById(DOM_APP_EL_ID));

// render(
//   <Provider store = {store}>
//     <Routes />
//   </Provider>,
//   document.getElementById('app')
// );

