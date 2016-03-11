import React from "react";
import styles from "../base.scss";
import { Link, browserHistory } from 'react-router';
import Search from "./Search.js";
//import Display from "./Display.js";


export default class HomePage extends React.Component {
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
