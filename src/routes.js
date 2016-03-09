import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/pages/App.js';
import LoginPage from './containers/pages/LoginPage.js';
import HomePage from './containers/pages/HomePage.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="home" component={HomePage} />
    <Route path="/request-token" component={LoginPage} />
  </Route>
);
