import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import MaskedInput from 'react-text-mask';
import {validEmail, requiredd, iinValidation} from '../../defaults/validations';
import axios from 'axios'
import {Formik, Form, ErrorMessage, FieldArray, Field} from 'formik';
import Head from 'next/head'
var scrollToElement = require('scroll-to-element');



class Feedback extends React.Component {
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

  if(!values.name || !values.feedback ) {
    this.setState({
      errorMessage: "Введите все данные",
      message: null
    })
  }
  else {
   this.setState({
     btnLoading:true,
     errorMessage: null,
   })
   resetForm({})
  await axios.post(`https://api.money-men.kz/api/send_feedback`, values)
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
          <Head><title>Оставить отзыв</title></Head>
          <div className="">
            <section className="oplata feedback row">
              <div className=" complaint oplate--form feedbackForm">
                <h2 className="text-center mb-3">Оставить отзыв</h2>
                <Formik
                  initialValues={{
                    name: '',
                    feedback: "",
                  }}
                  onSubmit={(values,{resetForm})=> {
                    this.handleSubmit(values,resetForm)
                  }}
                >
                {({ errors, touched, isValidating, isSubmitting }) =>(
                  <Form className="oplataform">
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
                    <Field name='name'  placeholder="Имя"/>
                   </div>

                   <div className='input-group'>
                    <label htmlFor="feedback">
                      <h2>Отзыв:</h2>
                    </label>
                      <Field name='feedback' as='textarea' />
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

export default Feedback
