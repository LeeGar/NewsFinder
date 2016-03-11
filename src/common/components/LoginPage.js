import React from 'react';
import { Link, browserHistory } from 'react-router';
import styles from '../base.scss';

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
        <h1 className={styles.heading}>Welcome! Log in with Twitter today!</h1>
      </div>
    );
  }
}
