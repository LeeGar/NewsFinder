import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as Actions from '../actions/actions.js';
import Header from '../common/components/Header.js';

export default class App extends Component {
  render() {
    const { input, actions, children} = this.props;
    return (

      <div className="mainContainer">
          <div className="mainNav">
              <Header />
            </div>
          <div>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { input, actions });
            })}
          </div>
       </div>
    );
  }
}

App.propTypes = {
  input: PropTypes.string,
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return {
    input: state.input,
    actionState: state.actions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);