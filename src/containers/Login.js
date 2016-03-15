import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

//import * as Auth from './Auth';

//@connect(state => ({ user: state.auth.user }), Auth)

export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: Proptypes.func,
    logout: Proptypes.func
  }

  handleSubmit = (event) => {
    const input = this.refs.username;
    this.props.login(input.value);
  }


}