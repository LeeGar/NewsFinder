import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/TextField';

import Display from '../common/components/Display.js';
import * as Actions from '../actions/actions.js';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearching = this.handleSearching.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.actions.gatherData(this.refs.input.refs.input.value);
    this.clearFields();
  }

  render () {
    console.log('this: ', this);

    const { selectedPost, results, searching } = this.props
    const noSearch = results === undefined

    return (
      <div className="searchBox">
        <div className="search-bar">
           <TextField ref="input"
                      onKeyUp={this.handleSearching} 
                      type="text" />
        </div>
      <RaisedButton onClick={this.handleSubmit} label="Submit" />
        
        <div className="display">
          {
            noSearch ? <h2> Search me </h2> 
            : <div>
                <Display results={results} />
              </div>

          }
        </div>
      
      </div>
    )
  }
}

Search.propTypes = {
  actions: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  searching: PropTypes.bool.isRequired,
  selectedPost: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  lastUpdated: PropTypes.number
}

function mapStateToProps(state) {
  return {
    input: state.input,
    results: state.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);


