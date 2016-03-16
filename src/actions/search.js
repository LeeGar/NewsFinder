import * as actionTypes from '../actionTypes/actionTypes.js';
import 'whatwg-fetch';

// export const gatherData = () => {
//   return dispatch => {
//     dispatch({
//       type: actionTypes.GET_DATA
//     });
//   }

//   try {
//      const result = get('/api/search');
//      console.log('result from search: ', result);
//      dispatch({
//        type: actionTypes.GET_DATA_SUCCESS,
//        data: result
//      });
//   } 
//   catch(e) {

//      dispatch({
//        type: actionTypes.GET_DATA_FAILURE
//      });
//   }
// }


export const gatherData = (input) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_DATA,
      input
    })

    return fetch('/api/twitsearch', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({input: input}),
      credentials: 'same-origin'
    })

    .then(res => res.json())
    .then(json => dispatch({
      type: actionTypes.GET_DATA_SUCCESS,
      json
    }))
  }
}

// export const gatherData = () => {
//   return (dispatch) => {
//     dispatch(searchFor)
//     return fetch('/api/search', {
//       credentials: 'same-origin'
//     }).then( response => response.json())
//     .then(json => dispatch())
//   }
// }