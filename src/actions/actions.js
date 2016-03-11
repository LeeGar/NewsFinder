export const USER_INPUT = 'USER_INPUT';
export const RECEIVE = 'RECEIVE_DATA'

export const searchFor = () {
  console.log('searching...', this);
  return {
    type: USER_INPUT
  }
}

export const login = () {
  console.log('user is logging in...')
  return {

  }
}

export const recieveData = (data) {
  return {
    type: RECEIVE,
    data: data
  }
}

// export const getSearchData = () {
//   return (dispatch) => {
//     dispatch(searchFor)
//     return fetch('/api/search', {
//       credentials: 'same-origin'
//     }).then( response => response.json())
//     .then(json => dispatch())
//   }
// }