import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    //use reducer to check if user is authenticated
    return (
      <div className="display">
        <h1> display here </h1>
        <iframe className="embed-responsive-item"></iframe>
      </div>
    )
  }
}

window.Display = Display;
