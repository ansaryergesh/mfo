import cookie from 'js-cookie'
export const fetchAdmin = () => dispatch => {
    dispatch({type: 'AUTHENTICATING_ADMIN'});
    fetch(`http://localhost:8000/api/getProfile?token=${cookie.get('admin_token')}`, {
      method: 'GET',
    })
    .then(response => {
      if (response.ok) {
        return response;
      }
      const error = new Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    },
      error => {
        const errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'SET_CURRENT_ADMIN', payload: data})
    })
    .catch((error) => {
      cookie.remove('admin_token')
      console.log(error.message || 'Error')
    })
  }