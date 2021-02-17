import React, {useState,useEffect} from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import Router from 'next/router'
import {useDispatch} from 'react-redux'
import Flash from '../../components/admin/FlashMessage'
function AdminLogin() {
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    axios.post(`${process.env.BASE_URL}/login`, {password: password, email: email}, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }})
      .then(res=> {
        if(res.data.success){ 
          cookie.set('admin_token', res.data.token, {expires: 60})
          Router.push('/admin/smscenter')
        }else {
          dispatch({type:'ADM_ERROR_MESSAGE', payload: res.data.message})
        }
      })

      e.preventDefault()
    // console.log(email)
  }

  useEffect(() => {
    if(cookie.get('admin_token')) {
      Router.push('/admin/main')
    }
  })
  return (
		<div className='admloginpage'>
      <Flash />
    <div className="container ">
      <div className="row">
        <div className="col-lg-3 col-md-2"/>
        <div className="col-lg-6 col-md-8 admlogin-box">
          <div className="col-lg-12 admlogin-key">
            <i className="fa fa-key" aria-hidden="true"/>
          </div>
          <div className="col-lg-12 admlogin-title">
            ADMIN PANEL
          </div>
          <div className="col-lg-12 admlogin-form">
            <div className="col-lg-12 admlogin-form">
              <form onSubmit={(e) => {handleLogin(e)}}>
                <div className="admform-group">
                  <label className="admform-control-label">USERNAME</label>
                  <input type="text"  autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} className="form-control"/>
                </div>
                <div className="admform-group">
                  <label className="admform-control-label">PASSWORD</label>
                  <input type="password"  onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" i/>
                </div>
                <div className="col-lg-12 admloginbttm">
                  <div className="col-lg-6 admlogin-btm admlogin-text">
                  </div>
                  <div className="col-lg-6 admlogin-btm admlogin-button">
                    <button type='submit' className="btn admbtn-outline-primary">LOGIN</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"/>
        </div>
      </div>
    </div>
		</div>
  )
}

export default AdminLogin