import React from 'react';
// import Link from 'next/link'
// import { Control, Errors, Form,actions } from 'react-redux-form';
// import { connect } from 'react-redux';
import {iinValidation, requiredd} from '../../defaults/validations';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import swal from "sweetalert";
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import axios from 'axios'
import { Formik, Form,  Field  } from 'formik';
const maskIin = [/\d/,/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,/\d/,];
import Head from 'next/head';
const mapStateToProps = state => {
  return {
    oplata: state.oplata,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => ({
  oplata: dannie => { dispatch(oplata(dannie)); },
  resetOplata: () => { dispatch(actions.reset('oplata'))},
})

const IinMask = (props) => <InputMask mask="999999999999" maskChar=" " className="my-input" {...props} />;
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    swal("Проверьте ваши данные", {
      text: `Проверьте ваши данные

      Ваш ИИН: ${values.iin}    Сумма оплаты: ${values.amount}`,
      buttons: {
        catch: {
          text: "Подтвердить",
          value: "catch",
        },
        cancel: "Отмена"
      }
    }).then(value=>{
      switch (value) {
        case "catch":
          this.setState({
            btnLoading: true,
          });
           axios.post(`https://api.money-men.kz/api/make_payment123`, values)
            .then((response) => {
              this.setState({
                btnLoading: false
              })
              location.replace(response.data[0] + "?" + response.data[1])
            })
            .catch((error) => {
              console.log(error)
              this.setState({
                btnLoading: false
              })
            });
        case "cancel":
          break
      }
    })
  }
  render() {
    return (
        <div>
          <Head>
            <title>Оплата</title>
          </Head>
             <section className="otherPages">
        <div className="container">
          <section className="oplata row">
            <div className="col-lg-6 oplata--text mb-5">
              <h2>Оплата кредита</h2>
              <p>После нажатия кнопки оплатить вы будете перенаправлены на страницу оплаты</p>
            </div>
            <div className="col-lg-6 oplate--form">
            <Formik
              initialValues={{
                iin: '',
                amount: '',
              }}
              onSubmit={values => {
                // same shape as initial values
                this.handleSubmit(values)
              }}
            >
                 {({ errors, touched, isValidating, isSubmitting }) => (
              <Form className="oplataform">
                <div className='input-group'>
                  <label htmlFor='iin'>
                    <h2>Ваш ИИН: </h2>
                  </label>
                  <Field
                    name="iin"
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
                  <label htmlFor='iin'>
                    <h2>Сумма: </h2>
                  </label>
                  <Field name='amount' validate={requiredd} type='number' placeholder="Вводить сюда"/>
                  {errors.amount && touched.amount && <div className='text-danger'>{errors.amount}</div>}
                </div>

                <div className="buttonForm">
                {this.state.btnLoading === true ?
								 <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                 <button className=" oplataform--button" type="submit">Внести оплату</button>}
                </div>
                </Form>
                  )}
            </Formik>
            </div>
          </section>
        </div>
      </section>
        </div>
    );}
}

export default Payment;
