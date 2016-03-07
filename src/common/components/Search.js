import React, { Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';


export default class Search extends Component {
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

  render () {
    return (
      <div>
        <div className="search-bar form-inline">
          <input className="form" 
                 type="text"
                 ref="input"
                 defaultValue={this.props.value}
                 onKeyUp={this.handleSearching} />
        </div>
      <button onClick={this.handleSubmit}> Submit </button>
      </div>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
