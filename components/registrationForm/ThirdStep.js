import React from 'react'

import {connect} from 'react-redux';
import {changingMoney, changingDay,postRegistrationThird} from '../../store/actions/ActionCreators';
import { Label, Row} from 'reactstrap';
import {Control, Errors, Form} from 'react-redux-form';
import InputMask from "react-input-mask";
import $ from 'jquery'
import Success from '../shared/SuccessSubmit';
import {speciality} from '../../defaults/defaultRelative';
import Spinner from 'react-spinner-material';
import disableScroll from 'disable-scroll';
import Router from 'next/router'
import cookie from 'js-cookie';


import {
  isValidIBANNumber2,
  isValidIBANNumber,
  required,
  givenDateCardId,
  expDateCardId,
  onlyEnglish,
  idNumber,
  checkStringName,
  isExpDateOfCardValid,
  checkCardValid
} from '../../defaults/validationredux'
var scrollToElement = require('scroll-to-element');

const mapStateToProps = state => {
  return {
    moneyVal: state.moneyVal,
    dayVal: state.dayVal,
    checked: false,
    somemessage: state.message,
    registration3: state.registration3,
    loading: state.loading

  }
}
const mapDispatchToProps = (dispatch) => ({
  changingMoney: money => {
    dispatch(changingMoney(money));
  },
  changingDay: day => {
    dispatch(changingDay(day));
  },
  postRegistrationThird: (registration) => dispatch(postRegistrationThird(registration))
})

const IbanInput = (props) => <InputMask mask="KZ******************" className="my-input" {...props}/>;
const CardInput = (props) => <InputMask mask="9999-9999-9999-9999" className="my-input" {...props}/>;
const ExpireDateInput = (props) => <InputMask mask="99/99" className="my-input" {...props}/>;
const idCardNumber = (props) => <InputMask mask="999999999" className="my-input" {...props}/>;
const dateofIdCard = (props) => <InputMask mask="99.99.9999" className="my-input" {...props}/>;
class FormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      checked: false,
      clicked: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleTest = this.handleTest.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleFocus() {
    setTimeout(() => {
      scrollToElement('.text-danger', {
        offset: 0,
        align: 'middle',
        ease: 'outExpo',
        duration: 600
      });
    },100)
  }
  handlePhone = e => {
    this.setState({phone: e.target.value});
  }
  handleCheck = (e) => {
    this.setState({
      checked: !this.state.checked
    });
  }

  handleTest = (hist) => {
    hist.push('/thanks')
  }

  handleSubmit(values) {
    console.log(values);
    var other = {};
    other.bank_name = isValidIBANNumber(values.iban_account);
    var sourceElem = localStorage.getItem('utm-source');
    var clickidElem = localStorage.getItem('clickid');
    other.source = 'i-credit.kz'
    // if(localStorage.getItem('utm_source') && localStorage.getItem('utm_source') !== null) {
    //   if(localStorage.getItem('utm_source').includes('sms')) {
    //     other.source = localStorage.getItem('utm_source');
    //   }
    //   if(localStorage.getItem('utm_source').includes('qaz')) {
    //     other.source = 'qazlead';
    //     other.cpa_source = localStorage.getItem('utm_campaign');
    //     other.cpa_clickid= localStorage.getItem('clickid');
    //   }
    // }
    if(cookie.get('utm_source')!== undefined) {
      if(cookie.get('utm_source').includes('sms')) {
        other.source = cookie.get('utm_source')
      }
      if(cookie.get('utm_source').includes('loangate')){
        other.source = cookie.get('utm_source')
        other.cpa_source = cookie.get('utm_source')
        other.cpa_clickid = cookie.get('afclick')
      }
      if(cookie.get('utm_source') === 'upsala'){
        other.source = cookie.get('utm_source')
        other.cpa_source = cookie.get('utm_source')
        other.cpa_clickid = cookie.get('clickid')
      }
      if(cookie.get('utm_source').includes('qaz')) {
        other.source = 'qazlead'
        other.cpa_source = cookie.get('utm_campaign');
        other.cpa_clickid= cookie.get('clickid');
      }
    }

    other.finished_step = 3;
    const finalObjects = {
      ...other,
      ...values
    }
    console.log(finalObjects)
    this.props.postRegistrationThird(finalObjects);
  }

  componentDidMount() {
    $(".cardName")
      .on("keypress", function (event) {

        var englishAlphabetDigitsAndWhiteSpace = /[A-Za-z ]/g;

        var key = String.fromCharCode(event.which);

        if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetDigitsAndWhiteSpace.test(key)) {
          return true;
        }

        return false;
      });

    $('.cardName').on("paste", function (e) {
      e.preventDefault();
    });

    const progress = document.querySelector('.progress-done');

    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.append(progress.getAttribute('data-done') + "%")
    progress.style.opacity = 1;

    $(document).ready(function () {
      $('input')
        .on('change', function () {
          var cntreq = 0;
          var cntvals = 68.5;
          $('input').each(function (i, val) {
            cntreq++;
            if ($(this).val() != '') {
              cntvals += 1;
            }
            if ($(this).val() != '' && cntvals >= 81.5) {
              cntvals += 6
            }

          });
          $('#percentage').empty();
          $('#percentage').append(cntvals + '% completed');

          $('#progress-done').data('done', cntvals)
          $('#progress-done').width($("#progress-done").data('done') + "%")
          $('#progress-done').text($("#progress-done").data('done') + "%")

        });
    });


    function forceInputUppercase(e)
    {
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      e.target.value = e.target.value.toUpperCase();
      e.target.setSelectionRange(start, end);
    }
    document.getElementById("name_of_owner").addEventListener("keyup", forceInputUppercase, false);

  }

  render() {
    const {history} = this.props;
    const ibanMessage = isValidIBANNumber(null || this.props.registration3.iban_account);
    return (
      <div>


        <div class="progressBar">
          <div class="progress-done" id="progress-done" data-done="68.5"></div>
          <p className="counter">Вероятность одобрения</p>
        </div>
        {this.props.loading === true
          ? <div className="modelLoader">
              {disableScroll.on()}
            </div>
          : <div className="modelLoader loaded">
              {disableScroll.off()}
            </div>
}
        <Form
          className="container formsStep"
          model='registration3'
          onSubmit={(values) => this.handleSubmit(values)}>
          {this.props.somemessage.error !== null
            ? <div class="alert alert-danger" role="alert">
                <strong>
                  {this.props.somemessage.error}</strong>
              </div>
            : null}
          {this.props.somemessage.error !== null
            ? <div class="alert alert-danger" role="alert">
                <strong>
                  {null || this.props.somemessage.error.email || this.props.somemessage.error}</strong>
              </div>
            : null}

          <Row className="form-group  mb-3 col-12 mx-auto">
             <h2 className="">Информация о месте работы</h2>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='name_of_workplace'>Место работы * :
            </Label>
            <div class="input-group">
              <Control.text
                model='.name_of_workplace'
                id='name_of_workplace'
                name='name_of_workplace'
                placeholder='Место работы'
                class="form-control"
                className='form-control'
                validators={{
                required
              }}/>
            </div>

            <Errors
              className='text-danger'
              model='.name_of_workplace'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! '
            }}/>
          </Row>
          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='type_id'>Должность * :
            </Label>
            <div class="input-group">
              <Control.select
                model='.type_id'
                id='type_id'
                name='type_id'
                placeholder=''
                class="form-control"
                className='form-control'
                validators={{
                required
              }}>
                <option value="" disabled selected>Должность</option>
                {speciality.map(spec => (
                  <option key={spec.id} value={spec.id}>{spec.name}</option>
                ))}
              </Control.select>
            </div>

            <Errors
              className='text-danger'
              model='.type_id'
              show='touched'
              messages={{
              required: 'Выберите один из вариантов'
            }}/>
          </Row>
          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='work_experience'>Стаж работы на последнем месте работы* :
            </Label>
            <div class="input-group">
              <Control.select
                model='.work_experience'
                id='work_experience'
                name='work_experience'
                placeholder=''
                class="form-control"
                className='form-control'
                validators={{
                required
              }}>
                <option value="" disabled selected>Стаж работы</option>
                <option value="до 3мес.">до 3мес.</option>
                <option value="до 4-6мес.">до 4-6мес.</option>
                <option value="до 7-12мес.">до 7-12мес.</option>
                <option value="от 1 до 2лет">от 1 до 2лет</option>
                <option value="от 2 до 5лет">от 2 до 5лет</option>
              </Control.select>
            </div>

            <Errors
              className='text-danger'
              model='.work_experience'
              show='touched'
              messages={{
              required: 'Выберите один из вариантов'
            }}/>

          </Row>
          <Row className="form-group  mb-3 col-12 mx-auto">
            <h2 className="">Информация о уд.личности</h2>
          </Row>
          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='birth_place'>Место рождения * :
            </Label>
            <div class="input-group">
              <Control.text
                model='.birth_place'
                id='birth_place'
                name='birth_place'
								placeholder='Место рождения'
								autocomplete = 'off'
                class="form-control"
                className='form-control'
                validators={{
                required
              }}/>
            </div>

            <Errors
              className='text-danger'
              model='.birth_place'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! '
            }}/>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">

            <Label htmlFor='id_card_number'>Номер удостворения личности * :
            </Label>
            <div class="input-group">
              <Control
                component={idCardNumber}
                model=".id_card_number"
                id="id_card_number"
                placeholder="038123456"
                className='form-control'
                validators={{
                required,
                idNumber
              }}/>
            </div>

            <Errors
              className='text-danger'
              model='.id_card_number'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! ',
              idNumber: "Заполните поле до конца"
            }}/>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='date_of_issue'>Дата выдачи(дд.мм.гггг) * :
            </Label>
            <div class="input-group">
              <Control
                component={dateofIdCard}
                model=".date_of_issue"
                id="date_of_issue"
                placeholder="дд.мм.гггг"
                className='form-control'
                validators={{
                required,
                givenDateCardId
              }}/>
              <div className="hint">Дата выдачи (ДД.ММ.ГГГГ)</div>
            </div>

            <Errors
              className='text-danger'
              model='.date_of_issue'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! ',
              givenDateCardId: "Введите корректную дату"
            }}/>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='expiration_date_of_icard'>Срок действия(дд.мм.гггг) * :
            </Label>
            <div class="input-group">
              <Control
                component={dateofIdCard}
                model=".expiration_date_of_icard"
                id="expiration_date_of_icard"
                placeholder="дд.мм.гггг"
                className='form-control'
                validators={{
                required,
                expDateCardId
              }}/>
              <div className="hint">Срок действия (ДД.ММ.ГГГГ)</div>
            </div>

            <Errors
              className='text-danger'
              model='.expiration_date_of_icard'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! ',
              expDateCardId: "Введите корректную дату"
            }}/>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='place_of_issue'>Кем выдано * :
            </Label>
            <div class="input-group">
              <Control.select
                model='.place_of_issue'
                id='place_of_issue'
                name='place_of_issue'
                placeholder='МВД РК'
                type="number"
                class="form-control"
                className='form-control'
                validators={{
                required
              }}>
                <option value="" disabled selected>Кем выдано</option>
                <option value="МЮ РК">МЮ РК</option>
                <option value="МВД РК">МВД РК</option>

              </Control.select>
            </div>

            <Errors
              className='text-danger'
              model='.place_of_issue'
              show='touched'
              messages={{
              required: 'Выберите один из вариантов'
            }}/>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
              <Label htmlFor='income'>Доход * :
            </Label>
            <div class="input-group">
              <Control.input
                model='.income'
                id='income'
								name='income'
								autocomplete = 'off'
                placeholder='150000'
                type="number"
                class="form-control"
                className='form-control'
                validators={{
                required
              }}/>
            </div>

            <Errors
              className='text-danger'
              model='.income'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! '
            }}/>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='balance_on_deposit'>Остаток на депозите * :
            </Label>

            <div class="input-group">
              <Control.input
                model='.balance_on_deposit'
                id='balance_on_deposit'
								name='balance_on_deposit'
								autocomplete = 'off'
                placeholder='500000'
                type="number"
                class="form-control"
                className='form-control'
                validators={{
                required
              }}/>
              <div class="hint">Чем больше сумма депозита тем больше сумма при одобрении заима</div>
            </div>

            <Errors
              className='text-danger'
              model='.balance_on_deposit'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! '
            }}/>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='amount_of_payments_for_current_loans'>Сумма * :
            </Label>
            <div class="input-group">
              <Control.input
                model='.amount_of_payments_for_current_loans'
                id='amount_of_payments_for_current_loans'
								name='amount_of_payments_for_current_loans'
								autocomplete = 'off'
                placeholder='Сумма платежей действующих кредитов:'
                type="number"
                class="form-control"
                className='form-control'
                validators={{
                required
              }}/>
            </div>

            <Errors
              className='text-danger'
              model='.amount_of_payments_for_current_loans'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! '
            }}/>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='amount_of_paid_loans_in_last_six_month'>Сумма платежей закрытых кредитов последний 6 мес. * :
            </Label>
            <div class="input-group">
              <Control.input
                model='.amount_of_paid_loans_in_last_six_month'
                id='amount_of_paid_loans_in_last_six_month'
								name='amount_of_paid_loans_in_last_six_month'
								autocomplete = 'off'
                placeholder='Сумма:'
                class="form-control"
                className='form-control'
                validators={{
                required
              }}/>
            </div>
            <Errors
              className='text-danger'
              model='.amount_of_paid_loans_in_last_six_month'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! '
            }}/>
          </Row>
          <Row className="form-group  mb-3 col-12 mx-auto">
            <h2 className="">Информация о счетах</h2>
          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor="iban_account">IBAN счет * :</Label>
            <div className="input-group">
              <Control
                component={IbanInput}
                model=".iban_account"
                id="iban_account"
                placeholder="KZ__________________"
                className="form-control text-uppercase"
                validators={{
                isValidIBANNumber2
              }}/>
            </div>
            <div className="text-info">
              <p>{ibanMessage}</p>
            </div>
          </Row>
          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor="card_number">Номер карты * :</Label>
            <Control
              className="form-control"
              model=".card_number"
              placeholder="____-____-____-____"
              component={CardInput}
              validators={{
              checkCardValid
            }}></Control>
            <Errors
              className='text-danger'
              model='.card_number'
              show='touched'
              messages={{
              checkCardValid: 'Введите корректный номер! '
            }}/>

          </Row>
          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor="expiration_date_of_bcard">Дата оканчания * :</Label>
            <Control
              className="form-control"
              model=".expiration_date_of_bcard"
              id="expiration_date_of_bcard"
              placeholder="__/__"
              component={ExpireDateInput}
              validators={{
              isExpDateOfCardValid
            }}></Control>
            <Errors
              className='text-danger'
              model='.expiration_date_of_bcard'
              show='touched'
              messages={{
              isExpDateOfCardValid: "Неправильно"
            }}/>

          </Row>

          <Row className="form-group  mb-3 col-12 mx-auto">
            <Label htmlFor='name_of_owner'>Имя владельца карты латинскими буквами * :
            </Label>
            <div class="input-group">
              <Control.text
								model='.name_of_owner'
								autocomplete = 'off'
                id='name_of_owner'
                name='name_of_owner'
                placeholder='ИМЯ Фамилия'
                className='form-control  input-uppercase cardName'
                validators={{
                required,
                onlyEnglish,
                checkStringName
              }}/>
              <div className="hint">Только на латинском</div>
            </div>
            <Errors
              className='text-danger'
              model='.name_of_owner'
              show='touched'
              messages={{
              required: 'Поле обязательно для заполнения! ',
              onlyEnglish: 'Некорректно ',
              checkStringName: "Имя и Фамилия обязательно "
            }}/>

          </Row>

          {this.props.somemessage.error !== null
            ? <div class="alert alert-danger" role="alert">
                <strong>
                  {this.props.somemessage.error}</strong>
              </div>
            : null}

          <div className="button form-group">
            {this.props.loading === true
              ? <Spinner
                  className="loading"
                  size={200}
                  spinnerColor={"#ef2221"}
                  spinnerWidth={2}
                  visible={true}/>
              : <button
                type="submit "
                className="agreement-btn" to='/thanks'
                onClick={() => this.handleFocus()}>Отправить</button>}
          </div>
        </Form>
      </div>
    )
  }
}

export default(connect(mapStateToProps, mapDispatchToProps)(FormRegister));
