import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/TextField';
import Display from '../common/components/Display.js';
import * as Actions from '../actions/actions.js';

import CircularProgress from 'material-ui/lib/circular-progress';

export default class Search extends Component {
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
  handleSearching (key) {
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
    const { targetStory, query, stories, searching, results } = this.props
    const noSearch = results.length===0
    return (
      <div className="searchBox">
          <div className="inputsubmit">
          <div className="search-bar">
             <TextField ref="input"
                        onKeyUp={this.handleSearching} 
                        type="text" 
                        hintText="Search here" />
          </div>
          <RaisedButton onClick={this.handleSubmit} label="Submit" />
          </div>

          <div className="display">
            { noSearch ? 
                searching ? <div className="loading"> <CircularProgress size={1.5} /> </div> : <p></p>
             :
              <div>
                <Display results={results} query={query} />
              </div> }
          </div>
      </div>
    )
  }
}

Search.propTypes = {
  actions: PropTypes.object,
  results: PropTypes.array,
  query: PropTypes.string,
  receivedAt: PropTypes.number,
  searching: PropTypes.bool
}

function mapStateToProps(state) {
  const { targetStory, defaultData } = state
  const { searching, receivedAt, 
          results: results } = defaultData[targetStory] || { results: [] }
  return {
    targetStory,
    results,
    receivedAt,
    searching
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


