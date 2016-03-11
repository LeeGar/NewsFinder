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

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
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
    console.log('handlesubmit!')
    //this.props.onChange(this.getInputValue())
    this.clearFields();
  }

  //handle live responsiveness to searching
  handleTextFieldChange (e) {
    console.log('e: ', e)
    console.log('this: ', this.refs.input.refs.input.value);
    console.log('this is : ', this)
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
