import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import MaskedInput from 'react-text-mask';
import {validEmail, requiredd, iinValidation} from '../../defaults/validations';
import axios from 'axios'
import {Formik, Form, ErrorMessage, FieldArray, Field} from 'formik';
var scrollToElement = require('scroll-to-element');

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      message: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async handleSubmit(values) {
   this.setState({
     btnLoading:true
   })
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
  render() {
    return (
      <div>
        <section className="otherPages">
          <div className="">
            <section className="oplata feedback row">
              <div className=" oplate--form feedbackForm">
                <h2 className="text-center mb-3">Оставить отзыв</h2>
                <Formik
                  initialValues={{
                    name: '',
                    feedback: "",
                  }}
                  onSubmit={values=> {
                    this.handleSubmit(values)
                  }}
                >
                {({ errors, touched, isValidating, isSubmitting }) =>(
                  <Form className="oplataform">
                    {this.state.message !== null ?
                      <div className="alert alert-success" role="alert">
                        <strong> {this.state.message}</strong>
                      </div> : null
                    }
                   <div className='input-group'>
                   <label htmlFor="name">
                      <h2>Имя:</h2>
                    </label>
                    <Field name='name' validate={requiredd} placeholder="Имя"/>
                    {errors.name && touched.name && <div className='text-danger'>{errors.name}</div>}
                   </div>

                   <div className='input-group'>
                    <label htmlFor="feedback">
                      <h2>Отзыв:</h2>
                    </label>
                      <Field name='feedback' as='textarea' validate={requiredd} placeholder="Отзыв"/>
                      {errors.feedback && touched.feedback && <div className='text-danger'>{errors.feedback}</div>}
                   </div>

                   <div className="buttonForm">
                      {this.state.btnLoading === true ?
                      <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                      <button className=" oplataform--button" type="submit">Отправить</button>}
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
