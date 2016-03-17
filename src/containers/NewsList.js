import React, { Components, PropTypes } from 'react';
import { connect } from 'react-redux'
import Display from '../common/components/Display.js';


export default class NewsList extends React.Component {
  constructor(props) {
    super(props)
  }

}

function mapStateToProps (state) {
  return {
    results: state.results
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//    actions: bindActionCreators(onNewsClick, dispatch)
//   }
// }

export default NewsList = connect(
  mapStateToProps
)(Display)
