import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import MaskedInput from 'react-text-mask';
// import {validEmail, requiredd, iinValidation} from '../../defaults/validations';
import axios from 'axios'
import {Formik, Form, ErrorMessage, FieldArray, Field} from 'formik';
import Link from 'next/link'
import { connect } from 'react-redux';
import {loginUser,fetchCurrentUser} from '../store/actions/userAction'
import {emptyMessage} from '../store/actions/ActionCreators'
import Router from 'next/router'
import {iin, required} from '../defaults/validationredux'
import Head from 'next/head'
import cookie from 'js-cookie';
var scrollToElement = require('scroll-to-element');

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
const maskIin = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

class Login extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    if(cookie.get('token') && !this.props.loggedIn) {
      Router.push('/')
    }

    setTimeout(() => {
      this.props.emptyMessage()
    },8000)
  }
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      message: null,
      errorMessage: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectFunc = this.redirectFunc.bind(this);
  }

  redirectFunc() {
    Router.push('/')
  }


  handleSubmit(values) {
  //  e.preventDefault();

   if(!required(values.username) || !required(values.password)) {
     this.setState({
       errorMessage: "Введите данные"
     })
   }
   else {
   this.props.loginUser(values)
   this.setState({
     errorMessage: null
   })
  }
   console.log(values)
  }

  render() {
    return (
      <div>
        <Head>
          <title>
            Войти в личный кабинет
          </title>
        </Head>
        <section className="otherPages">
          <div className="">
            <section className="oplata feedback row">
              <div className=" oplate--form feedbackForm">
                <Formik
                  initialValues={{
                    username: '',
                    password: "",
                  }}
                  onSubmit={values=> {
                    this.handleSubmit(values)
                  }}
                >
                {({ errors, touched, isValidating, isSubmitting }) =>(
                  <Form className="oplataform">

                <h2 className="text-center mb-5">Войти в личный кабинет</h2>
                {this.props.successMessage !== null ?(<div className='alert alert-success'>{this.props.successMessage}. Пожалуйста, проверьте вашу почту</div>):(<div></div>)}
                     {(this.props.failedLogin && this.props.error !== null) || this.state.errorMessage!== null ?
                      <div className="alert alert-danger" role="alert">
                        <strong> {this.state.errorMessage || this.props.error}</strong>
                      </div> : null
                    }
                   <div className='input-group'>
                   <label htmlFor="email">
                      <h2>ИИН:</h2>
                    </label>
                    <Field
                      name="username"
                      placeholder='ИИН'

                      // validate={iinValidation}
                      render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={maskIin}
                          autoComplete='off'
                          id="username"
                          placeholder="Введите ИИН"
                          type="text"
                        />
                      )}
                    />
                    {errors.username && touched.username && <div className='text-danger'>{errors.username}</div>}
                   </div>

                   <div className='input-group'>
                    <label>
                      <h2>Пароль:</h2>
                    </label>
                      <Field name='password' type='password' placeholder="Введите пароль"/>
                      {errors.password && touched.password && <div className='text-danger'>{errors.password}</div>}

                    <AppLink href='password_reset' className='resetText mt-4'>Забыли пароль?</AppLink>
                   </div>


                   <div className="buttonForm">
                      {this.props.authenticatingUser === true ?
                      <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                      <button className="loginbutton" type="submit">Войти</button>}
                    </div>
                  </Form>
                )}
                </Formik>
              </div>
            </section>
          </div>
        </section>
      </div>
      );
    }
  }

const mapStateToProps = ({
  userReducer: {
    authenticatingUser, failedLogin, error, loggedIn,
  },
  message: {
    success
  }
}) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn,
  successMessage: success,
});

export default connect(mapStateToProps, { loginUser,fetchCurrentUser, emptyMessage })(Login);
