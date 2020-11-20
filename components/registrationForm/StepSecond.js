import React from 'react'
import {connect} from 'react-redux';
import {Label, Row} from 'reactstrap';
import {Control, Errors, Form} from 'react-redux-form';
import InputMask from "react-input-mask";
import {postRegistrationSecond, fetchRegions, emptyMessage} from '../../store/actions/ActionCreators'
import {relative_type, gorods, addition_contact_type} from '../../defaults/defaultRelative'
import {Prompt} from 'react-router-dom';
import $ from 'jquery'
import {required, phoneCheck, acceptCirrilic} from '../../defaults/validationredux';
import Spinner from 'react-spinner-material';
import disableScroll from 'disable-scroll';
var scrollToElement = require('scroll-to-element');
const mapStateToProps = state => {
  return {somemessage: state.message, regionsReducer: state.regionsReducer, loading: state.loading, registration2: state.registration2}
}
const mapDispatchToProps = (dispatch) => ({
  fetchRegions: (reg_id) => dispatch(fetchRegions(reg_id)),
  postRegistrationSecond: (registration) => dispatch(postRegistrationSecond(registration))
})

const PhoneMask = (props) => <InputMask
  mask="+7(999)-999-9999"
  maskChar=" "
  className="my-input"
  {...props}/>;
class SecondStep extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      checked: false
    }
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.handleRegion = this
      .handleRegion
      .bind(this);
    this.handleFocus = this
      .handleFocus
      .bind(this);
    this.handleCheck = this
      .handleCheck
      .bind(this);
  }
  handleChange() {
    this.setState({
      checked: !this.state.checked
    });

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
  handleCheck = (e) => {
    this.setState({
      checked: !this.state.checked
    });
  }

  handleRegion(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    console.log(event.target.name)
    this
      .props
      .fetchRegions(event.target.value);
    this.setState({input})
  }

  handleSubmit(values) {
    var object = {};
    if (this.state.checked) {
      object.apartment = 'Частный дом'
    } else {
      object.apartment = values.apartmentt
    }
    object.finished_step = 2;
    object.source = 'i-credit2';
    if(localStorage.getItem('utm_source')) {
      object.source = localStorage.getItem('utm_source') + '_2'
    }

    const finalObjects = {
      ...values,
      ...object
    }
    this.props.postRegistrationSecond(finalObjects)
  }

  componentDidMount() {
    const progress = document.querySelector('.progress-done');

    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.append(progress.getAttribute('data-done') + "%")
    progress.style.opacity = 1;

    $(document).ready(function () {
      $('input')
        .on('change', function () {
          var cntreq = 0;
          var cntvals = 55;
          $('input').each(function (i, val) {
            cntreq++;
            if ($(this).val() != '') {
              cntvals += 1.5;
            }
          });
          var count = (cntvals / cntreq) * 100 - 20;
          $('#percentage').empty();
          $('#percentage').append(cntvals + '% completed');

          $('#progress-done').data('done', cntvals)
          $('#progress-done').width($("#progress-done").data('done') + "%")
          $('#progress-done').text($("#progress-done").data('done') + "%")
        });
    });
  }

  render() {
    return (
      <div>


        <div class="progressBar">
          <div class="progress-done" id="progress-done" data-done="55"></div>
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
          className="container formStepp"
          model='registration2'
          onSubmit={(values) => this.handleSubmit(values)}>
          {this.props.somemessage.error !== null
            ? <div class="alert alert-danger" role="alert">
                <strong>
                  {this.props.somemessage.error}</strong>
              </div>
            : null}
          <Row className="form-group">
            <div className="col-md-6 mb-3">
              <Label htmlFor="marital_status">Семейное положение* :</Label>
              <div className="input-group">
                <Control.select
                  model=".marital_status"
                  name="marital_status"
                  className="form-control"
                  validators={{
                  required
                }}>
                  <option value=""></option>
                  <option value="Женат/Замужем">Женат/Замужем</option>
                  <option value="Холост/Не замужем">Холост/Не замужем</option>
                </Control.select>
              </div>
              <Errors
                className='text-danger'
                model='.marital_status'
                show='touched'
                messages={{
                required: 'Выберите один из вариантов'
              }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label htmlFor="child_amount">Количество детей* :</Label>
              <Control.select
                model=".child_amount"
                name="child_amound"
                className="form-control"
                validators={{
                required
              }}>
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </Control.select>
              <Errors
                className='text-danger'
                model='.child_amount'
                show='touched'
                messages={{
                required: 'Выберите один из вариантов'
              }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label htmlFor="education">Образование* :</Label>
              <Control.select model=".education" name="education" className="form-control">
                <option value=""></option>
                <option value="Без образования">Без образования</option>
                <option value="Среднее">Среднее</option>
                <option value="Высшее">Высшее</option>
              </Control.select>
              <Errors
                className='text-danger'
                model='.education'
                show='touched'
                messages={{
                required: 'Выберите один из вариантов'
              }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Город/Область* :</Label>
              <Control.select
                model=".city"
                name="city"
                className="form-control"
                onChange={this.handleRegion}
                validators={{
                required
              }}>
                <option value=""></option>
                {gorods.map(gorod => (
                  <option key={gorod.id} value={gorod.id}>{gorod.name}</option>
                ))}
              </Control.select>
              <Errors
                className='text-danger'
                model='.city'
                show='touched'
                messages={{
                required: 'Выберите один из вариантов'
              }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Регионы/Районы* :</Label>
              <div className="input-group">
                <Control.select
                  model=".regionOfCity_id"
                  name="regionOfCity_id"
                  className="form-control"
                  validators={{
                  required
                }}>
                  <option value="" disabled>Регионы</option>
                  {this
                    .props
                    .regionsReducer
                    .regions
                    .map(gorod => (
                      <option key={gorod.id} value={gorod.id}>{gorod.name}</option>
                    ))}
                </Control.select>
                <div className="hint">Сначала выберите Город/Область из списка</div>
              </div>
              <Errors
                className='text-danger'
                model='.regionOfCity_id'
                show='touched'
                messages={{
                required: 'Выберите один из вариантов'
              }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Улица* :
              </Label>
              <Control.input
                model=".street"
                autocomplete="off"
                name="street"
                className="form-control"
                validators={{
                required
              }}/>
              <Errors
                className='text-danger'
                model='.street'
                show='touched'
                messages={{
                required: 'Поле обязательно для заполнения'
              }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Дом* :
              </Label>
              <Control.input
                model=".home"
                name="home"
                autocomplete="off"
                className="form-control"
                validators={{
                required
              }}/>
              <Errors
                className='text-danger'
                model='.home'
                show='touched'
                messages={{
                required: 'Поле обязательно для заполнения'
              }}/>
            </div>
            {this.state.checked
              ? <div className="col-md-6 mb-3">
                  <Label>Номер квартиры :
                  </Label>
                  <Control.input
                    type="number"
                    model=".apartmentt"
                    name="apartment"
                    className="form-control"
                    disabled/>
                </div>
              : <div className="col-md-6 mb-3">
                <Label>Номер квартиры :
                </Label>
                <Control.input
                  type="number"
                  model=".apartmentt"
                  name="apartmentt"
                  className="form-control"/>
              </div>
}
            <div className="col-md-6 mb-3">
              <input
                type="checkbox"
                onChange={this.handleCheck}
                defaultChecked={this.state.checked}/>
              <label className="form-check-label ml-3" for="exampleCheck1">Частный дом</label>
            </div>
          </Row>

          <h2 className="mt-5 mb-5">Родственник</h2>
          <Row>
            <div className="col-md-6 mb-3">
              <Label>Имя* :</Label>
              <div className="input-group ">
                <Control.input
                  model=".relative_name"
                  name="relative_name"
                  autocomplete="off"
                  className="form-control registerCyrril"
                  validators={{
                  required,
                  acceptCirrilic
                }}/>
                <div className="hint">Имя только на киррилице</div>

              </div>
              <Errors
                  className='text-danger '
                  model='.relative_name'
                  show='touched'
                  messages={{
                  required: 'Поле обязательно для заполнения ',
                  acceptCirrilic: "Нужно вводить только на кириллице"
                }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Фамилия* :</Label>
              <div className="input-group">
                <Control.input
                  model=".relative_last_name"
                  autocomplete="off"
                  name="relative_last_name"
                  className="form-control registerCyrril"
                  validators={{
                  required,
                  acceptCirrilic
                }}/>
                <div className="hint">Фамилия только на киррилице</div>

              </div>
              <Errors
                  className='text-danger '
                  model='.relative_last_name'
                  show='touched'
                  messages={{
                  required: 'Поле обязательно для заполнения ',
                  acceptCirrilic: "Нужно вводить только на кириллице"
                }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Телефон номер</Label>
              <div class="input-group">
                <Control
                  className="form-control"
                  placeholder="+7(705)000-00-00"
                  model=".relative_phone_number"
                  name="relative_phone_number"
                  component={PhoneMask}
                  validators={{
                  phoneCheck
                }}/>
              </div>
              <Errors
                className='text-danger'
                model='.relative_phone_number'
                show='touched'
                messages={{
                phoneCheck: 'Нет соответствующего оператора '
              }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Вид родства* :</Label>
              <Control.select
                model=".relative_type_id"
                name="relative_type_id"
                className="form-control"
                validators={{
                required
              }}>
                <option value=""></option>
                {relative_type.map(relative => (
                  <option key={relative.id} value={relative.id}>{relative.name}</option>
                ))}
              </Control.select>
              <Errors
                className='text-danger'
                model='.relative_type_id'
                show='touched'
                messages={{
                required: 'Выберите один из вариантов'
              }}/>
            </div>
          </Row>
          <h2 className="mt-5 mb-5">Дополнительный контакт</h2>
          <Row className="mb-5">
            <div className="col-md-6 mb-3">
              <Label>Имя* :</Label>
              <div className="input-group">
                <Control.input
                  model=".additional_contact_name"
                  name="additional_contact_name"
                  className="form-control registerCyrril"
                  autocomplete="off"
                  validators={{
                  required,
                  acceptCirrilic
                }}/>
                <div className="hint">Имя только на киррилице</div>

              </div>
              <Errors
                  className='text-danger'
                  model='.additional_contact_name'
                  show='touched'
                  messages={{
                  required: 'Поля обязателен для заполнения ',
                  acceptCirrilic: "Нужно вводить только на кириллице"
                }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Фамилия* :</Label>
              <div className="input-group">
                <Control.input
                  model=".additional_contact_last_name"
                  name="additional_contact_last_name"
                  className="form-control registerCyrril"
                  autocomplete="off"
                  validators={{
                  required,
                  acceptCirrilic
                }}/>
                <div className="hint">Фамилия только на киррилице</div>

              </div>
              <Errors
                  className='text-danger'
                  model='.additional_contact_last_name'
                  show='touched'
                  messages={{
                  required: 'Поля обязателен для заполнения ',
                  acceptCirrilic: "Нужно вводить только на кириллице"
                }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Телефон номер</Label>
              <div class="input-group">
                <Control
                  className="form-control"
                  placeholder="+7(705)000-00-00"
                  model=".additional_contact_phone"
                  name="additional_contact_phone"
                  component={PhoneMask}
                  validators={{
                  phoneCheck
                }}/>
              </div>
              <Errors
                className='text-danger'
                model='.additional_contact_phone'
                show='touched'
                messages={{
                phoneCheck: 'Нет соответствующего оператора '
              }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Label>Кем приходится* :</Label>
              <Control.select
                model=".additional_contact_type_id"
                name="additional_contact_type_id"
                className="form-control"
                validators={{
                required
              }}>
                <option value=""></option>
                {addition_contact_type.map(relative => (
                  <option key={relative.id} value={relative.id}>{relative.name}</option>
                ))}
              </Control.select>
              <Errors
                className='text-danger'
                model='.additional_contact_type_id'
                show='touched'
                messages={{
                required: 'Выберите один из вариантов'
              }}/>
            </div>
          </Row>
          {this.props.somemessage.error !== null
            ? <div class="alert alert-danger" role="alert">
                <strong>
                  {this.props.somemessage.error || null}</strong>
              </div>
            : null}
          <div className="button form-group mb-5">
            {this.props.loading === true
              ? <Spinner
                  className="loading"
                  size={200}
                  spinnerColor={"#ef2221"}
                  spinnerWidth={2}
                  visible={true}/>
              : <button
                type="submit "
                className="agreement-btn"
                onClick={() => this.handleFocus()}>Отправить</button>}
          </div>
        </Form>
      </div>

    )
  }
}

export default(connect(mapStateToProps, mapDispatchToProps)(SecondStep));
