import React, { Component } from "react";
import styles from "../base.scss";
import { Link, browserHistory } from 'react-router';
import Search from "../../containers/Search.js";

export default class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={styles.welcomeInfo}>
          <span className="welcomeMsg">Hello!</span>
          <p></p>
          <span className="welcomeText">Search for the latest social media news!</span>
          <Search />
        </div>
    );
  }
}
