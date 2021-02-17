import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import cookie from 'js-cookie'
const AdminCabinet = ({user, active}) => {
    const dispatch = useDispatch()
    const [password,setPassword] = useState('')
    const [repeatPassword,setRepeatPassword] = useState('')
    const [userDate, setUserDate] = useState({name: user.name, email: user.email})

    const editOwn = (e) => {
      axios.put(`${process.env.BASE_URL}/editOwn`, {
        token: cookie.get('admin_token'),
        email: userDate.email,
        name: userDate.name,
      }, {headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }})
        .then(res => {
          if(res.data.success) {
            dispatch({type: 'ADM_SUCCESS_MESSAGE', payload: res.data.message})
          }else {
            dispatch({type: 'ADM_ERROR_MESSAGE', payload: res.data.message})
          }
        })

      e.preventDefault();
    }
    const passwordChange = (e) => {
      e.preventDefault()
      if(!password || !repeatPassword) {
        dispatch({type: 'ADM_ERROR_MESSAGE', payload:'Заполните все поле'})
      }
      if(repeatPassword !== password) {
        dispatch({type:'ADM_ERROR_MESSAGE', payload: 'Пароли не совподают' })
      }
      else {
        dispatch({type: 'ADM_CLOSE_MESSAGE'})
        axios.get(`${process.env.BASE_URL}/changePassword`, {params: {
          token: cookie.get('admin_token'),
          password: password
        }},
        {headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }})
          .then(res => {
            if(res.data.success) {
              setPassword('')
              setRepeatPassword('')
              dispatch({type: 'ADM_SUCCESS_MESSAGE', payload: 'Обновлен пароль'})
            }
          })
      }
    }
    return(
        <div role="main">
          <div className='container row '>
              {active === 'info' ?
                  <form onSubmit={(e) => editOwn(e)} className='col-md-9 mb-3 mx-auto formsStep'>
                  <h2 className='text-center mx-auto'>Личные данные</h2>
                  <div className='row col-12 form-group mx-auto'>
                      <label htmlFor='name'>Имя:</label>
                      <input onChange={(e) => setUserDate({name: e.target.value, email: userDate.email})} className='form-control focus-visible' value={userDate.name} />
                  </div>
                  <div className='row col-12 form-group mx-auto'>
                      <label htmlFor='name'>Username:</label>
                      <input onChange={(e) => setUserDate({name: userDate.name, email: e.target.value})} name='username' className='form-control focus-visible' value={userDate.email} />
                  </div>
                  <div className='row col-12  form-group mx-auto'>
                      <label htmlFor='name'>Роль:</label>
                      <input className='form-control focus-visible' value={user.role_name} disabled />
                  </div>
                  <div className="button-admin form-group" ><button type='submit'>Изменить</button></div>
              </form> :
              <form onSubmit = {(e) => passwordChange(e)}className='col-md-9 mx-auto formsStep'>
                  <h2 className='text-center mx-auto'>Изменить пароль</h2>
                  <div className='row col-12 form-group mx-auto'>
                      <label htmlFor='password'>Новый пароль:</label>
                      <input name='password' onChange={(e) => setPassword(e.target.value)}  className='form-control focus-visible' value={password}  />
                  </div>
                  <div className='row col-12 form-group mx-auto'>
                      <label htmlFor='password_repeat'>Повторить пароль:</label>
                      <input name='password_repeat' onChange={(e) => setRepeatPassword(e.target.value)}  value={repeatPassword} className='form-control focus-visible' />
                  </div>
                  <div className="button-admin form-group" ><button type='submit'>Новый пароль</button></div>
              </form>
              }
          

          
              </div>
                
        </div>
    )
}

export default AdminCabinet;