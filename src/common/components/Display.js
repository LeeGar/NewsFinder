import React, { Component, PropTypes } from 'react';
import styles from "../base.scss";
import { Link, browserHistory } from 'react-router';

export default class Display extends Component {
  render() {
    console.log('this from display: ', this);
    return (
      <ul>
        {this.props.results.map((result, i) =>
          <li key={i}>{result.title}</li>
        )}
      </ul>
    )
  }
}

Display.propTypes = {
  results: PropTypes.array.isRequired
}
