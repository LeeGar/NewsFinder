import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from '../containers/App';
import { HomePage, LoginPage } from '../common/components';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginPage} />
        <Route path="home" component={HomePage} />
        <Route path="/request-token" component={LoginPage} />
      </Route>
    </Router>
  );
};

