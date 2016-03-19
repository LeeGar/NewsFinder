import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import styles from '../base.scss';

export default class LoginPage extends Component {

  constructor(props) {
    super(props);
  }

  signUp() {
    console.log('hello')
    browserHistory.push('/request-token');
  }
  
  render() {

    return (
      <div className="content">
        <h1 className="heading">Welcome! Log in with Twitter today!</h1>
      </div>
    );
  }
}
