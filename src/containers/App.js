import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
import { Link } from 'react-router';


export default class App extends Component {
  render() {
    const { input, actions, children} = this.props;
    
    return (
      <div className="mainContainer">

        <div className="mainNav">
          <div className="titleText">NewsFlash</div>
          <div className="homeOptions">
            <span className="eachOption"><a href="/request-token">Log in</a></span>
            <span className="eachOption"><Link to="/logout">Log out</Link></span>
          </div>
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
  input: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {
  console.log('state change.. mapping to props: ', state);
  return {
    input: state.input
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