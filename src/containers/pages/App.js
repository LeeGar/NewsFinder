import React, {Component, PropTypes} from 'react';

export default class App extends React.Component {
  
  render () {
    return (
      <div id="container">
        {this.props.children}
      </div>
    );   
  }
}
