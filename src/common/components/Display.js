import React from 'react';
import styles from "../base.scss";
import { Link, browserHistory } from 'react-router';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  


  render() {
    console.log('this from display: ', this);
    return (
      <div className="display">
      <h2> Display here </h2>
      </div>
    )
  }

}