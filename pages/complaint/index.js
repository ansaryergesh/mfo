import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import MaskedInput from 'react-text-mask';
import {validEmail, iin} from '../../defaults/validationredux';
import {iinValidation, requiredd} from '../../defaults/validations'
import axios from 'axios'
import Head from 'next/head'
import {Formik, Form, ErrorMessage, FieldArray, Field} from 'formik';
var scrollToElement = require('scroll-to-element');

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

class Complaint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      message: null,
      errorMessage: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async handleSubmit(values,resetForm) {
  setTimeout(() => {
    scrollToElement('.alert-danger', {
      offset: 0,
      align: 'middle',
      ease: 'outExpo',
      duration: 600
    });
  },50)

   if(!values.name || !values.iin || !values.email || !values.comment) {
     this.setState({
       errorMessage: 'Введите все данные'
     })
   }
   else if(!validEmail(values.email)) {
     this.setState({
       errorMessage: 'Неправильный email'
     })
   }
   else if (!iin(values.iin)) {
     this.setState({
       errorMessage: 'Неправильный ИИН'
     })
   }
    else {
      this.setState({
        btnLoading:true,
        errorMessage: null
      })
      resetForm({})
      await axios.get(`https://api.money-men.kz/api/send_complaint?name=${values.name}&iin=${values.iin}&email=${values.email}&comment=${values.comment}`)
        .then((response) => {
          this.setState({
            btnLoading: false,
            message: "Успешно отправлено! Спасибо за отзыв"
          })
          scrollToElement('.alert-success', {
            offset: 0,
            align: 'middle',
            ease: 'outExpo',
            duration: 600
          });
        })
        .catch((error) => {
          console.log(error)
          this.setState({
            btnLoading: false
          })
        });
    }
  }
  render() {
    return (
      <div>
        <section className="otherPages">
          <Head>
            <title>
              Оставить жалобу | Zaymi.kz
            </title>
          </Head>
          <div className="">
            <section className="oplata feedback row">
              <div className=" oplate--form feedbackForm">
                <h2 className="text-center mb-3">Оставить жалобу</h2>
                <Formik
                  initialValues={{
                    name: '',
                    comment: "",
                    iin: "",
                    email: "",
                  }}
                  onSubmit={(values, {resetForm})=> {
                    this.handleSubmit(values,resetForm)
                  }}

                >
                {({ errors, touched, isValidating, isSubmitting }) =>(
                  <Form className="oplataform complaint">
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
                   <label htmlFor="name">
                      <h2>Имя:</h2>
                    </label>
                    <Field name='name' placeholder="Введите имя" />

                   </div>
                   <div className='input-group'>
                    <label htmlFor="email">
                      <h2>Email адрес:</h2>
                    </label>
                    <Field name='email' placeholder="Введите email" />
                   </div>
                   <div className='input-group'>
                   <label htmlFor="email">
                      <h2>ИИН:</h2>
                    </label>
                    <Field
                      name="iin"
                      placeholder='ИИН'
                      render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={maskIin}
                          id="iin"
                          type="text"
                          placeholder="ИИН"
                        />
                      )}
                    />
                   </div>
                   <div className='input-group'>
                    <label htmlFor="comment">
                      <h2>Сообщения:</h2>
                    </label>
                      <Field name='comment' as='textarea'/>
                   </div>

                   <div className="buttonForm">
                      {this.state.btnLoading === true ?
                      <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                      <button className="redbtn" type="submit">Отправить</button>}
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

export default Complaint
