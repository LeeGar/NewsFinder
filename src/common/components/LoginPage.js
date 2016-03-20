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
        <h1 className={styles.heading}>Welcome! Log in with Twitter today!</h1>
    );
  }
}
