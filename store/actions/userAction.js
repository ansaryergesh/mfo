import cookie from 'js-cookie';
import Router from 'next/router';


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
      dispatch({ type: 'SET_CURRENT_USER', payload: 'user' })
      Router.push('/')
    })
    .catch((error) => {
      if(error.message.includes('400')) {
        dispatch({type: 'FAILED_LOGIN', payload: 'Неправильный ИИН или пароль'})
      }else {
        dispatch({type: 'FAILED_LOGIN', payload: error.message})
      }
    })
    .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })));
};
