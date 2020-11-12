import React from 'react';
// import Link from 'next/link'
// import { Control, Errors, Form,actions } from 'react-redux-form';
// import { connect } from 'react-redux';
import {iin, required} from '../../defaults/validations';
import { oplata } from '../../redux/actions/ActionCreators';
import InputMask from "react-input-mask";
import Spinner from 'react-spinner-material';
import swal from "sweetalert";

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
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChecking = this.handleChecking.bind(this);
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
          this.props.oplata(values)
        case "cancel":
          break
      }
    })
  }

  // handleChecking(val) {
  //   localStorage.clear();
  //   localStorage.setItem('step','final');
  //   val.push('/thanks').then(() => localStorage.clear())
  //   // localStorage.clear();
  // }

  componentDidMount() {
    // this.props.resetOplata();
  }
  render() {
    return (
        <div>
             <section className="otherPages">
        <div className="container">
          <section className="oplata row">
            <div className="col-lg-6 oplata--text mb-5">
              <h2>Оплата кредита</h2>
              <p>После нажатия кнопки оплатить вы будете перенаправлены на страницу оплаты</p>
            </div>
            <div className="col-lg-6 oplate--form">
              {/* <Form model="oplata" className="oplataform" onSubmit={(values) => this.handleSubmit(values)}>
                <div className="input-group">
                  <label htmlFor="iin">
                    <h2>Ваш ИИН:</h2>
                  </label>
                  <Control  name="iid" model="oplata.iin" component={IinMask} placeholder="Вводить сюда" validators={{iin}}/>
                  <Errors  className='text-danger' model='oplata.iin' show='touched'
                      messages={{
                       iin: 'Неправильный ИИН ',
										}}
										/>
                </div>
                <div className="input-group">
                  <label htmlFor="amount">
                    <h2>Сумма:</h2>
                  </label>
                  <Control.text  name="amount" model="oplata.amount" type="number" placeholder="Вводить сюда" validators={{required}}/>
                  <Errors  className='text-danger' model='oplata.amount' show='touched'
                      messages={{
                       required: 'Введите сумму ',
									}}/>
                </div>
                <div className="buttonForm">
                {this.props.loading === true ?
								 <Spinner className="loading" size={200} spinnerColor={"#ef2221"} spinnerWidth={2} visible={true} /> :
                 <button className=" oplataform--button" type="submit">Внести оплату</button>}
                </div>
              </Form> */}
            </div>
          </section>
        </div>
      </section>
        </div>
    );}
}

// export default (connect(mapStateToProps,mapDispatchToProps)(Payment));
export default Payment;
