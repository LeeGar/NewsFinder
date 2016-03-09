import React from "react";
import styles from "./style.css";
import { Link, browserHistory } from 'react-router';
import Search from "../../common/components/Search.js"


export default class HomePage extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.content}>
        <p className={styles.welcomeText}>Welcome to NewsFlash</p>
        <p className={styles.welcomeText}>Thanks for joining!</p>
        <Search></Search>
      </div>
    );
  }
}
