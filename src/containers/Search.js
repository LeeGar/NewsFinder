import React, { Component, PropTypes} from 'react';
import styles from '../base.scss';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/TextField'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearching = this.handleSearching.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  //empty out search bar after submit call
  clearFields () {
    this.refs.input.refs.input.value = '';
  }

  //handle return or enter key press
  handleSearching(key) {
    if (key.keyCode === 13) {
      this.handleSubmit()
    }
  }

  //handle submit click
  handleSubmit () {
    this.clearFields();
  }

  //handle live responsiveness to searching
  handleTextFieldChange (e) {
    //handleSubmit(e);
  }

  render () {
    return (
      <div className="searchBox">
        <div className="search-bar">
           <TextField ref="input"
                      onChange={(event) => this.handleTextFieldChange(event.target.value)}
                      onKeyUp={this.handleSearching} 
                      type="text" />
        </div>
      <RaisedButton onClick={this.handleSubmit} label="Submit" /> 
      </div>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
}
