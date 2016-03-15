import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from '../containers/App';
import HomePage from '../common/components/HomePage.js';
import LoginPage from '../common/components/LoginPage.js';
import LogoutPage from '../common/components/LogoutPage.js';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginPage} />
        <Route path="/home" component={HomePage} handler={App} />
        <Route path="/request-token" component={LoginPage} />
        <Route path="/logout" component={LogoutPage} />
      </Route>
    </Router>
  );
};

