import * as ActionTypes from '../types'
import Router from 'next/router'
import cookie from 'js-cookie';
import {newCookie} from '../../defaults/utmSource'
export const changingMoney = money => ({
    type: ActionTypes.MONEY_CHANGE,
    payload: money,
});

function replaceDate(val) {
    return String(val).replace(/[^A-Z0-9]/g, '')
}
export const changingDay = day => ({
    type: ActionTypes.DAY_CHANGE,
    payload: day,
});


export const SUCCESS_RESPONSE = result => ({
    type: "SUCCESS_RESPONSE",
    payload: result
});

export const FAILED_RESPONSE = result => ({
    type: "FAILED_RESPONSE",
    payload: result
});

export const successMessage = message => ({
    type: 'SUCCESS_MESSAGE',
    payload: message,
});

export const errorMessage = message => ({
    type: 'ERROR_MESSAGE',
    payload: message,
});
export const emptyMessage = () => ({
    type: 'EMPTY_MESSAGE',
});

export const addRegistration = registrations => ({
    type: 'ADD_REGISTRATION',
    payload: registrations,
});

export const stepRegistration = step => ({
    type: 'STEP_REGISTRATION',
    payload: step,
});

export const isLoading = loader => ({
    type: 'IS_LOADING',
    payload: loader,
});


export const postRegistration = (registration) => (dispatch) => {
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.phone = replaceDate(registration.phone);
    return fetch(`https://api.money-men.kz/api/registration_step_one`,{
        method: 'POST',
        body: JSON.stringify(registration),
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response =>{
            if(response.ok) {
                return response;
            }
            throw response;
        })
        .then(response => response.json())
        // .then(console.log(response))
        .then(response => dispatch(addRegistration(registration)))
        .then(response => dispatch(isLoading(false)))
        .then(response => dispatch(stepRegistration(1)))
        .then(response=> {localStorage.setItem("step", 1)})
        .then(response=> window.scrollTo(0,0))
        .then(response => dispatch(successMessage('')))
        .catch(r=>r.json().then(e=> {
            dispatch(errorMessage(e.errors.iin ? "ИНН уже зарегистрирован. Вы будете перенаправлены на страницу авторизация! ": "" || e.errors.password ? "Пароли не совпадают": "" || e.errors.phone ? "Польвозатель с таким телефон номером уже зарегистрирован" : e.errors.email || "" ||   e.errors ));
            setTimeout(() => {
                checkIIN(e.errors);
            }, 3000);
        })).then(()=>dispatch(isLoading(false)))
}

function checkIIN(val) {
    if(val && val.iin) {
        document.location.replace("https://www.i-credit.kz/login")
    }else {
        console.log("not working")
    }
}

export const postRegistrationCode = (registration) => (dispatch) => {
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.source ='i-credit1';
    if(cookie.get('utm_source') !== undefined) {
        registration.source = cookie.get('utm_source') +'_1';
    }

    return fetch(`https://api.money-men.kz/api/check_sms_code`,{
        method: 'POST',
        body: JSON.stringify(registration),
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response =>{
            if(response.ok) {
                return response;
            }
            throw response;
        })
        .then(response => response.json())
        .then(response => {localStorage.setItem("token", response.access_token)})
        .then(response => dispatch(addRegistration('')))
        .then(response => dispatch(stepRegistration(2))).then(() => dispatch(emptyMessage()))
        .then(response=> {localStorage.setItem("step", 2)})
        .then(response=> window.scrollTo(0,0))
        .then(response => dispatch(isLoading(false)))
        .catch(r => r.json().then(e => dispatch(errorMessage("Отправленный вами код не существует")))).then(() => dispatch(isLoading(false)))
}

export const postRegistrationSecond = (registration) => (dispatch) => {
    dispatch(isLoading(true));
    registration.relative_phone_number = replaceDate(registration.relative_phone_number);
    registration.additional_contact_phone = replaceDate(registration.additional_contact_phone);
    return fetch(`https://api.money-men.kz/api/registration_step_two`,{
        method: 'POST',
        body: JSON.stringify(registration),
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,

        },
        credentials: 'same-origin'
    })
        .then(response =>{
            if(response.ok) {
                return response;
            }
            throw response;
        })
        .then(response => response.json())
        .then(response => dispatch(isLoading(false)))
        .then(response => dispatch(stepRegistration(3))).then(() => dispatch(emptyMessage()))
        .then(response=> {localStorage.setItem("step", 3)})
        .then(response=> window.scrollTo(0,0))
        .catch(r => r.json().then(e => dispatch(errorMessage(e.errors.relative_name || e.errors.relative_last_name || e.errors.relative_phone_number || e.errors.apartment ||e.message)))).then(() => dispatch(isLoading(false)));

}

export const dateLoading = () => ({
    type: "DATE_LOADING"
})
export const dateFailed = errmess => ({
    type: 'DATE_FAILED',
    payload: errmess,
});

export const regionsSucces = region => ({
    type: 'REGION_SUCCESS',
    payload: region,
});


export const addLink = link => ({
    type: "ADD_LINK",
    payload:link
})

export const postRegistrationThird = (registration) => (dispatch) => {
    dispatch(isLoading(true));
    registration.card_number = replaceDate(registration.card_number);
    return fetch(`https://api.money-men.kz/api/last_step`,{
        method: 'POST',
        body: JSON.stringify(registration),
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,

        },
        credentials: 'same-origin'
    })
        .then(response =>{
            if(response.ok) {
                return response;
            }
            throw response;
        })
        .then(response => response.json())
        .then(response => dispatch(successMessage('Успешно')))
        .then(response => setTimeout(() => {dispatch(stepRegistration(0))},6000) )
        .then(response=> dispatch(isLoading(false)))
        .then(response=> setTimeout(() => {localStorage.clear()},5000))
        .then(response => Router.push('/thanks'))
        .then(response=> newCookie())
        .catch(r => r.json().then(e =>  dispatch(errorMessage(e.errors.id_card_number ? "Номер удостворение личности уже зарегистрирован" : "" || e.errors.iban_account || e.errors.card_number || e.errors ||  null)))).then(() => dispatch(isLoading(false)))
}

function testingAction(history) {
    localStorage.setItem('step', 'final')
    setTimeout(() => {localStorage.clear()},5000)
    history.push('/thanks')
}

export const fetchRegions = (region_id) => dispatch => {
    dispatch(dateLoading(true));
    return fetch(`https://api.money-men.kz/api/city/${region_id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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
      .then(regions => dispatch(regionsSucces(regions)))
      .catch(error => dispatch(dateFailed(error.message)));
  };
