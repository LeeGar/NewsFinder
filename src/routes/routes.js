import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';


import App from '../containers/App.js';
import LoginPage from '../containers/LoginPage.js';
import HomePage from '../containers/HomePage.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="home" component={HomePage} />
    <Route path="/request-token" component={LoginPage} />
  </Route>
);
