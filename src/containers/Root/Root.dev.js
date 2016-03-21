import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../DevTools';
import Routes from '../../routes/routes.js';

module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <DevTools />
          <Routes />
        </div>
      </Provider>
    );
  }
};
