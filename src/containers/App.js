import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
import { Link } from 'react-router';


export default class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { input, actions, children} = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">
          <div id="main-app-title">NewsFlash</div>
          <div>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/request-token">Log in</Link></span>
            <span><Link to="/logout">Log out</Link></span>
          </div>
        </div>
          <div>
            {/* Here's a trick: we pass those props into the children by mapping
              and cloning the element, followed by passing props in. Notice that
              those props have been unpacked above! */}
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { input, actions });
            })}
          </div>
          
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {
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