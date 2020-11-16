import React from 'react';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import MaskedInput from 'react-text-mask';
import {validEmail, requiredd, iinValidation} from '../../defaults/validations';
import axios from 'axios'
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
      message: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async handleSubmit(values) {
   this.setState({
     btnLoading:true
   })
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
  render() {
    return (
      <div>
        <section className="otherPages">
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
                    <label htmlFor="email">
                      <h2>Email адрес:</h2>
                    </label>
                    <Field name='email' validate={validEmail} placeholder="Ваш email адрес"/>
                    {errors.email && touched.email && <div className='text-danger'>{errors.email}</div>}
                   </div>
                   <div className='input-group'>
                   <label htmlFor="email">
                      <h2>ИИН:</h2>
                    </label>
                    <Field
                      name="iin"
                      placeholder='ИИН'
                      validate={iinValidation}
                      render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={maskIin}
                          id="iin"
                          placeholder="Вводить сюда"
                          type="text"
                        />
                      )}
                    />
                    {errors.iin && touched.iin && <div className='text-danger'>{errors.iin}</div>}
                   </div>
                   <div className='input-group'>
                    <label htmlFor="comment">
                      <h2>Сообщения:</h2>
                    </label>
                      <Field name='comment' as='textarea' validate={requiredd} placeholder="Сообщения"/>
                      {errors.comment && touched.comment && <div className='text-danger'>{errors.comment}</div>}
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

export default Complaint
