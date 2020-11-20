import cookie from 'js-cookie';
import Router from 'next/router';


export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' });

export const setCurrentUser = userData => ({
  type: 'SET_CURRENT_USER',
  payload: userData,
});


export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const loginUser = (values) => dispatch => {
  dispatch({ type: 'AUTHENTICATING_USER' });
  fetch("https://api.money-men.kz/api/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(values),
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
      cookie.set('token', data.access_token, {expires: 2})
      var users = dispatch(fetchCurrentUser())
      console.log(users)
      dispatch({ type: 'SET_CURRENT_USER', payload: 'user' })
      Router.push('/cabinet/loans')
    })
    .catch((error) => {
      if(error.message.includes('400')) {
        dispatch({type: 'FAILED_LOGIN', payload: 'Неправильный ИИН или пароль'})
      }else {
        dispatch({type: 'FAILED_LOGIN', payload: error.message})
      }
    })
};

export const fetchCurrentUser = () => dispatch => {
  dispatch(authenticatingUser());

  fetch("https://api.money-men.kz/api/getUserProfileFromBitrix", {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${cookie.get('token')}`,
    },
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
    dispatch(setCurrentUser(data))
  })
  .catch((error) => {
    cookie.remove('token')
    console.log(error.message || 'Error')
  })
}



