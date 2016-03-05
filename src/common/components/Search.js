import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
  }

  searching () {
    this.props.onUserInput(this.refs.input.value);
  }

  render () {
    
    return(
      <div className="search-bar form-inline">
        <input className="form" type="text" 
        onChange={(event) => this.searching(event.target.value)} ref="input"/>

      </div> 
    )
  }
}

window.Search = Search;