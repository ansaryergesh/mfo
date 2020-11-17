import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import MaskedInput from 'react-text-mask';
// import {validEmail, requiredd, iinValidation} from '../../defaults/validations';
import axios from 'axios'
import {Formik, Form, ErrorMessage, FieldArray, Field} from 'formik';
import Link from 'next/link'
import Router from 'next/router'
import cookie from 'js-cookie';

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
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      message: null,
      errorMessage: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorMessage = this.handleErrorMessage.bind(this);
    this.handleSuccessMessage = this.handleSuccessMessage.bind(this);
  }

  handleErrorMessage(val) {
    this.setState ({
      errorMessage: val
    })
  }

  handleSuccessMessage(val) {
    this.setState ({
      message: val
    })
  }
 async handleSubmit(values,e) {
  //  e.preventDefault();
   this.setState({
    btnLoading: true,
  });
  await fetch('https://api.money-men.kz/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
  .then((response) => response.json())
  .then((data)=> {
    if(data && !data.access_token) {
        ("Неправильный ИИН или пароль")
    }
    if(data && data.access_token) {
      cookie.set('token', data.access_token, {expires: 2})
      Router.push('/')
    }
  })
  .then(() => {
    this.setState({
      btnLoading: false
    })
  })
  .catch((error) => {
    console.log('error')
    this.setState({
      btnLoading: false
    })
  });


   console.log(values)
  }
  render() {
    return (
      <div>
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
                    {this.state.message !== null ?
                      <div className="alert alert-success" role="alert">
                        <strong> {this.state.message}</strong>
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
                      {this.state.btnLoading === true ?
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

export default Login
