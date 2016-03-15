export const GET_DATA = 'GET_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const searchFor = (input) => {
  console.log('searching...', this);
  return {
    type: GET_DATA
  }
}

export const login = () => {
  console.log('user is logging in...')
  return {

  }
}

export const recieveData = (data) => {
  return {
    type: RECEIVE_DATA,
    data: data
  }
}

export const getSearchData = () => {
  return (dispatch) => {
    dispatch(searchFor)
    return fetch('/api/search', {
      credentials: 'same-origin'
    }).then( response => response.json())
    .then(json => dispatch())
  }
}