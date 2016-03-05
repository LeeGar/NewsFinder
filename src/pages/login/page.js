import React from 'react';
import { Link, browserHistory } from 'react-router';
import styles from './style.css';


export default class LoginPage extends React.Component {
  signUp() {
    console.log('hello')
    browserHistory.push('/request-token');
  }
  
  render() {

    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>NewsFinder</h1>
        <p className={styles.lead}>Sign up with Twitter!</p>
        <button className={styles.signUpButton} onClick={this.signUp}>Sign up</button>
      </div>
    );
  }
}
