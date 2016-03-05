import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default React.createClass({
  signIn: function () {
    $(function () {
      $("#signintwitter").on("click", function () {
        console.log('????')
        window.location.href = "/request-token"
      });
    });
  },

  render: function () {
    return (
      <div classname="signin">
        <RaisedButton label="Sign IN!"/>
      </div>
  )} 
});

