import * as actionTypes from '../actionTypes/actionTypes.js';
import { get, post, del } from '../utilities/api.js';

export const gatherData = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.GET_DATA
    });
  }

  try {
     const result = get('/api/search');

     dispatch({
       type: actionTypes.GET_DATA_SUCCESS,
       data: result
     });
  } 
  catch(e) {

     dispatch({
       type: actionTypes.GET_DATA_FAILURE
     });
  }
}


// export const getSearchData = () => {
//   return (dispatch) => {
//     dispatch(searchFor)
//     return fetch('/api/search', {
//       credentials: 'same-origin'
//     }).then( response => response.json())
//     .then(json => dispatch())
//   }
// }