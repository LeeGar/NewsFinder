import React from "react";
import styles from "../base.scss";
import { Link, browserHistory } from 'react-router';
import Search from "./Search.js"


export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.welcomeInfo}>
          <p className={styles.titleText}>Welcome to NewsFlash</p>
          <p className={styles.welcomeText}>Search for the latest social media news!</p>
          <Search></Search>
        </div>
      </div>
    );
  }
}