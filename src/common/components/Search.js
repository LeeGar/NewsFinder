import React, { Component, PropTypes} from 'react';
import styles from '../base.css';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/TextField'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearching = this.handleSearching.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  getInitialValue () {
    return {
      textFieldValue: ''
    };
  }

  getInputValue () {
    return this.refs.input.value
  }

  setInputValue(value) {
    this.refs.input.value = val
  }

  //handle return or enter key press
  handleSearching(key) {
    if (key.keyCode === 13) {
      this.handleSubmit()
    }
  }

  //handle submit click
  handleSubmit() {
    this.props.onChange(this.getInputValue())
  }

  //handle live responsiveness to searching
  handleTextFieldChange (e) {
    this.setState({
      textFieldValue: e.target.value
    })
  }

  render () {
    return (
      <div>
        <div className="search-bar">
           <TextField ref="input"
                      onChange={this.handleTextFieldChange}
                      onKeyUp={this.handleSearching} 
                      type="text"
                      defaultValue={this.props.value} />
        </div>
      <RaisedButton onClick={this.handleSubmit} label="Submit" /> 
      </div>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
