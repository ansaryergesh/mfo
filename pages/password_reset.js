import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
// import {validEmail, requiredd, iinValidation} from '../../defaults/validations';
import axios from 'axios'
import {Formik, Form, ErrorMessage, FieldArray, Field} from 'formik';
import { connect } from 'react-redux';
import Link from 'next/link'
import  {validEmail,required} from '../defaults/validationredux'
import {successMessage, emptyMessage} from '../store/actions/ActionCreators'
import Router from 'next/router'
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>


const mapDispatchToProps = (dispatch) => ({
  successMessage: message => { dispatch(successMessage(message)); },
  emptyMessage: () => {dispatch(emptyMessage())}
})

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      message: null,
      errorMessage: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async handleSubmit(values) {

   if(!validEmail(values.email)) {
    this.setState({
      errorMessage:'Email адрес введен неправильно'
    })
   }else {
    this.setState({
      errorMessage: null
    })
    this.setState({
      btnLoading:true
    })
    axios.post(`https://api.money-men.kz/api/password/create`, values)

    .then((response) => {
      console.log(response)
      this.setState({
        btnLoading: false,
        // message: response.data.message
      })
      Router.push('/login')
      this.props.successMessage(response.data.message)
    })
    .catch((error) => {
      this.setState({
        btnLoading: false,
        errorMessage: error.response.data.message
      })
    });
   }


  }
  render() {
    return (
      <div>
        <section className="otherPages">
          <div className="container">
            <section className="oplata feedback row">
              <div className=" oplate--form feedbackForm">
              <nav aria-label="container breadcrumb">
                <ol className="breadcrumb text-center">
                  <li className="breadcrumb-item "><AppLink className='br-item' href='/login'>Личный кабинет</AppLink></li>

                  <li className="breadcrumb-item active" aria-current="page">Сброс пароля</li>
                </ol>
              </nav>
                <Formik
                  initialValues={{
                    email: ""
                  }}
                  onSubmit={values=> {
                    this.handleSubmit(values)
                  }}
                >
                {({ errors, touched, isValidating, isSubmitting }) =>(
                  <Form className="oplataform">

                <h2 className="text-center mb-5">Сброс пароля</h2>
                    {this.state.message !== null ?
                      <div className="alert alert-success" role="alert">
                        <strong> {this.state.message}</strong>
                      </div> : null
                    }
                    {this.state.errorMessage !== null ?
                      <div className="alert alert-danger" role="alert">
                        <strong> {this.state.errorMessage}</strong>
                      </div> : null
                    }

                   <div className='input-group'>
                    <label htmlFor="email">
                      <h2>Email адрес:</h2>
                    </label>
                      <Field name='email' type='text' placeholder="Ваш email адрес"/>
                   </div>
                   <div className="buttonForm">
                      {this.state.btnLoading === true ?
                      <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                      <button className="loginbutton" type="submit">Сбросить</button>}
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

  export default (connect(null,mapDispatchToProps)(Login));
