import React from 'react';
import { Link, browserHistory } from 'react-router';
import styles from './base.scss';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
  }

  signUp() {
    console.log('hello')
    browserHistory.push('/request-token');
  }
  
  render() {

    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>NewsFlash</h1>
        <p className={styles.lead}>Sign up with Twitter!</p>
        <a href="/request-token">Sign up!</a>
      </div>
    );
  }
}
