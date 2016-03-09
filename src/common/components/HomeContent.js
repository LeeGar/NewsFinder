import React from 'react';

class HomeContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    //use reducer to check if user is authenticated
    return (
      <div className="HomeContent">
        <h1> HomeContent here </h1>
        <iframe className="embed-responsive-item"></iframe>
      </div>
    )
  }
}

window.HomeContent = HomeContent;
