import React from 'react';
import { Link, browserHistory } from 'react-router';
import styles from '../base.scss';

export default class LogoutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Thanks for visiting!</h1>
      </div>
    );
  }
}