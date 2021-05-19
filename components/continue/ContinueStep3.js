import { useState } from "react";
import { gorods, relative_type, speciality } from "../../defaults/defaultRelative";
import InputMask from "react-input-mask";
import cookie, { set } from 'js-cookie'
import Router from 'next/router'
import axios from 'axios'
import { Formik, Form,  Field  } from 'formik';
import {
  iinValidation,
  required,
  phoneCheck,
  validEmaill,
  passwordCheck,
  phoneValidation,
  acceptCirrilic,
  acceptCirrilicOnly,
  validateConfirmPassword,
  validage,
  getAge,
  requiredd,
  validEmail,
  idNumber,
  checkIdNumber,
  CheckGivedDate,
  CheckExpDate,
  onlyEnglish,
  textCheckCardValid,
  ibanContinue
} from '../../defaults/validations';
import { isValidIBANNumber, isValidIBANNumber2 } from "../../defaults/validationredux";
import swal from "sweetalert";


const IinMask = ({ field, form, ...props}) => <InputMask 
mask="999999999"
  maskChar= " "
  className="my-input"
  type='tel'
  {...field}
  {...props} 
/>

const GivenDate = ({ field, form, ...props}) => <InputMask 
  mask="99.99.9999"
  maskChar= " "
  type='tel'
  className="my-input"
  {...field}
  {...props} 
/>

const IbanN = ({ field, form, ...props}) => <InputMask 
  mask="KZ******************"
  placeholder='KZ'
  onChange={(e) => setIbanValue(e)}
  className="my-input"
  {...field}
  {...props} 
/>

const CardNumber = ({ field, form, ...props}) => <InputMask 
  mask="9999-9999-9999-9999"
  maskChar= " "
  type='tel'
  className="my-input"
  {...field}
  {...props} 
/>

const CardExp = ({ field, form, ...props}) => <InputMask 
  mask="99/99"
  maskChar= " "
  type='tel'
  className="my-input"
  {...field}
  {...props} 
/>

const ContinueStep3 = ({step,setStep, stepResult, userDate, srok,summa}) => {
  const [btnLoading, setBtnLoading] = useState(false)
  const onSubmit = (values) => {
    if(isValidIBANNumber2(iban.value)!==false) {
      console.log(userDate)
      var continue2=  {}
      values.UF_35 = iban.value;
      values.UF_47 = iban.text;
      values.UF_2 = summa;
      values.UF_3 = srok;
      if(cookie.get('continue2')) {
        continue2 = JSON.parse(cookie.get('continue2'))
      }
      const finalValues = {
        UF_2: `${values.UF_2}`,
        UF_3: `${values.UF_3}`,
        UF_4: userDate.UF_4,
        UF_5: userDate.UF_5,
        UF_6: userDate.UF_6,
        UF_7: userDate.UF_7,
        UF_8: userDate.UF_8,
        UF_9: userDate.UF_9,
        UF_10: userDate.UF_10,
        UF_11: userDate.UF_11,
        UF_12: userDate.UF_12,
        UF_13: userDate.UF_13,
        UF_16: 'icredit-crm.kz',
        UF_17: continue2.UF_17 ? continue2.UF_17 : userDate.UF_17,
        UF_18: continue2.UF_18 ? continue2.UF_18 : userDate.UF_18,
        UF_19: continue2.UF_19 ? continue2.UF_19 : userDate.UF_19,
        UF_20: continue2.UF_20 ? continue2.UF_20 : userDate.UF_20,
        UF_21: continue2.UF_21 ? continue2.UF_21 : userDate.UF_21,
        UF_22: continue2.UF_22 ? continue2.UF_22 : userDate.UF_22,
        UF_23: continue2.UF_23 ? continue2.UF_23 : userDate.UF_23,
        UF_24: continue2.UF_24 ? continue2.UF_24 : userDate.UF_24,
        UF_25: continue2.UF_25 ? continue2.UF_25 : userDate.UF_25,
        UF_26: continue2.UF_26 ? continue2.UF_26 : userDate.UF_26,
        UF_28: continue2.UF_28 ? continue2.UF_28 : userDate.UF_28,
        UF_27: continue2.UF_27 ? continue2.UF_27 : userDate.UF_27,
        UF_29: continue2.UF_29 ? continue2.UF_29 : userDate.UF_29,
        UF_30: continue2.UF_30 ? continue2.UF_30 : userDate.UF_30,
        UF_31: values.UF_31,
        UF_32: values.UF_32,
        UF_33: values.UF_33,
        UF_34: values.UF_34,
        UF_35: values.UF_35,
        UF_36: values.UF_36,
        UF_37: values.UF_37,
        UF_38: values.UF_38,
        UF_39: values.UF_39,
        UF_40: values.UF_40,
        UF_41: values.UF_41,
        UF_42: values.UF_42,
        UF_43: values.UF_43,
        UF_44: values.UF_44,
        UF_45: values.UF_45,
        UF_46: values.UF_46,
        UF_47: values.UF_47,
      }
      setBtnLoading(true)
      axios.post(`https://api.money-men.kz/api/getRepeatedLoan`, finalValues)
        .then(response=> {
          setBtnLoading(false)
          if(response.data.success === true) {
            swal("Успешно!", `Заявка отправлено`, "success").then(() =>{
              Router.push('/cabinet/loans')
              cookie.remove('continue2')
          });
          }
          else {
            swal("Oops!", `${response.errors || 'У вас анкета заполнена не до конца. Напишите на WhatsApp или звоните на номер +7 727 250 15 00'}`, "error").then(() => {
              Router.push('/cabinet/loans')
            });
          }
        })
        .catch(error => {
          if(error.response) {
            console.log(error.response)
          }
          setBtnLoading(false)
          swal('Oops', 'Что то пошло не так', 'error').then(() => {
            Router.push('/cabinet/loans')
          })
        })
    }
  }

  const [checked, setChecked] = useState(false)
  const [iban,setIban] = useState({value: '', text: 'Заполните поле до конца'})

  const setIbanValue = (e) => {
    setIban({value : e.target.value, text: isValidIBANNumber(e.target.value)})
  }
  
  return(
    <div>
      <Formik
        initialValues={{
        UF_31: '',
        UF_33: '',
        UF_32: '',
        UF_34: '',
        UF_35: '',
        UF_36: '0000000000000000',
        UF_37: '00/00',
        UF_38: '-',
        UF_39: '',
        UF_40: '',
        UF_41: '',
        UF_42: '',
        UF_43: '',
        UF_44: '',
        UF_45: '',
        UF_46: '',
        UF_47: ''
      }}
      onSubmit={values=> {
        onSubmit(values)
      }}
    >
  {({ errors, touched, isValidating, isSubmitting }) => (
    <Form className='container'>
      <h2 className="mt-5 mb-5">Информация о месте работы</h2>
      <div className='row form-group'>
        <div className='col-md-12 mb-3'>
          <label htmlFor=''>
            Место работы *
          </label>
          <Field validate={requiredd} name='UF_31' className='form-control' placeholder='Место работы'></Field>
          {errors.UF_31 && touched.UF_31 && <p className='text-danger'>{errors.UF_31}</p>}
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor=''>
            Должность *
          </label>
          <Field as='select' validate={requiredd}  name='UF_33' className='form-control'>
            <option value="" disabled selected>Должность</option>
            {speciality.map(spec => (
              <option key={spec.id} value={spec.id}>{spec.name}</option>
            ))}
          </Field>
          {errors.UF_33 && touched.UF_33 && <p className='text-danger'>{errors.UF_33}</p>}
        </div>

        <div className='col-md-6 mb-3'>
          <label htmlFor=''>
            Стаж работы на последнем месте работы *
          </label>
          <Field validate={requiredd} as='select' name='UF_32' className='form-control'>
            <option value="" disabled selected>Стаж работы</option>
            <option value="до 3мес.">до 3мес.</option>
            <option value="до 4-6мес.">до 4-6мес.</option>
            <option value="до 7-12мес.">до 7-12мес.</option>
            <option value="от 1 до 2лет">от 1 до 2лет</option>
            <option value="от 2 до 5лет">от 2 до 5лет</option>
          </Field>
          {errors.UF_32 && touched.UF_32 && <p className='text-danger'>{errors.UF_32}</p>}
        </div>
        <h2 className="col-md-12 mt-5 mb-5">Информация о уд. личности</h2>
        <div className='col-md-6 mb-3'>
          <label htmlFor=''>
            Место рождения *
          </label>
          <Field validate={requiredd} name='UF_46' className='form-control'></Field>
          {errors.UF_46 && touched.UF_46 && <p className='text-danger'>{errors.UF_46}</p>}
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor=''>
            Номер удостворения личности *
          </label>
          
          <Field  validate={idNumber} name='UF_42' className='form-control' component={IinMask}>
       
          </Field>
          {errors.UF_42 && touched.UF_42 && <p className='text-danger'>{errors.UF_42}</p>}
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor=''>
            Дата выдачи(дд.мм.гггг) * :
          </label>
          <div className='input-group'>
            <Field name='UF_43' className='form-control' validate={CheckGivedDate} component={GivenDate}></Field>
          
          <div className="hint">Дата выдачи (ДД.ММ.ГГГГ)</div>
          </div>
          {errors.UF_43 && touched.UF_43 && <p className='text-danger'>{errors.UF_43}</p>}
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor=''>
            Срок действия (дд.мм.гггг) * :
          </label>
          <div className='input-group'>
          <Field name='UF_44' className='form-control' validate={CheckExpDate} component={GivenDate}></Field>
        
          <div className="hint">Срок действия  (ДД.ММ.ГГГГ)</div>
          </div>
          {errors.UF_44 && touched.UF_44 && <p className='text-danger'>{errors.UF_44}</p>}
        </div>
        <div className='col-md-6 mb-3'>
          <label htmlFor=''>
            Кем выдано *
          </label>
          <Field as='select' name='UF_45' validate={requiredd} className='form-control'>
            <option value="" disabled selected>Кем выдано</option>
            <option value="МЮ РК">МЮ РК</option>
            <option value="МВД РК">МВД РК</option>
          </Field>
          {errors.UF_45 && touched.UF_45 && <p className='text-danger'>{errors.UF_45}</p>}
        </div>  

        <div className='col-md-6 mb-3'>
          <label>Доход *</label>
          <Field validate={requiredd} autocomplete='off' name='UF_34' className='form-control' type=''></Field >
          {errors.UF_34 && touched.UF_34 && <p className='text-danger'>{errors.UF_34}</p>}
        </div>

        <div className='col-md-6 mb-3'>
          <label>Остаток на депозите *</label>
          <div className='input-group'>
            <Field validate={requiredd} name='UF_40' autocomplete='off' className='form-control' type=''></Field>
            <div className="hint">Чем больше сумма депозита тем больше сумма при одобрении заима</div>
          </div>
          {errors.UF_40 && touched.UF_40 && <p className='text-danger'>{errors.UF_40}</p>}
        </div>
        <div className='col-md-6 mb-3'>
          <label>Сумма *</label>
          <Field validate={requiredd} name='UF_41' type='' placeholder='Сумма платежей действующих кредитов:' className='form-control' disabled={checked}></Field>
          {errors.UF_41 && touched.UF_41 && <p className='text-danger'>{errors.UF_41}</p>}
        </div> 

        <div className='col-md-6 mb-3'>
          <label>Сумма платежей закрытых кредитов последний 6 мес. *</label>
          <Field validate={requiredd} name='UF_39' type='' className='form-control' ></Field>
          {errors.UF_39 && touched.UF_39 && <p className='text-danger'>{errors.UF_39}</p>}
        </div>  
        
        <div className='col-md-6 mb-3'>
          <label>IBAN счет *</label>
          <div className='input-group'>
            <Field onChange={e=>setIbanValue(e)} value={iban.value}  className='form-control' name='UF_35'  component={IbanN} />
            <div className="hint">Номер банковского счета</div>
          </div>
          <p className='mt-2 text-info'>{iban.text}</p>
          {errors.UF_35 && touched.UF_35 && <p className='text-danger'>{errors.UF_35}</p>}
        </div>
      </div>
      {/* <h2 className="col-md-12 mt-5 mb-5">Информация о счетах</h2>
      <div className='row form-group'>
       
        <div className='col-md-6 mb-3'>
          <label>Номер карты *</label>
          <div className='input-group'>
          <Field className='form-control' name='UF_36' validate={textCheckCardValid} component={CardNumber} />
          </div>
          {errors.UF_36 && touched.UF_36 && <p className='text-danger'>{errors.UF_36}</p>}
        </div>
        <div className='col-md-6 mb-3'>
        <label>Дата оканчания *</label>
        <Field className='form-control' name='UF_37' component={CardExp} />

        </div>
        <div className='col-md-6 mb-3'>
        <label htmlFor='name_of_owner'>Имя владельца карты латинскими буквами * :
        </label>
          <div className='input-group'>
            <Field validate={onlyEnglish} name='UF_38' className='form-control  input-uppercase cardName'></Field>
            <div className="hint">Только на латинском</div>
          </div>
        </div>
      </div> */}
      <div className="button form-group mb-5">
              <button
                type="submit "
                disabled={btnLoading}
                className=""
              >{btnLoading ? 'Загрузка...'  : 'Отправить'}</button>
          </div>
    </Form>
  )}
      </Formik>
      {/* <form className='container '>
      <h2 className="mt-5 mb-5">Информация о месте работы</h2>
          <div className='row form-group'>
            <div className='col-md-12 mb-3'>
              <label htmlFor=''>
                Место работы *
              </label>
              <input name='UF_31' className='form-control' placeholder='Место работы'></input>
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Должность *
              </label>
              <select  name='UF_33' className='form-control'>
                <option value="" disabled selected>Должность</option>
                {speciality.map(spec => (
                  <option key={spec.id} value={spec.id}>{spec.name}</option>
                ))}
              </select>
            </div>

            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Стаж работы на последнем месте работы *
              </label>
              <select name='UF_32' className='form-control'>
                <option value="" disabled selected>Стаж работы</option>
                <option value="до 3мес.">до 3мес.</option>
                <option value="до 4-6мес.">до 4-6мес.</option>
                <option value="до 7-12мес.">до 7-12мес.</option>
                <option value="от 1 до 2лет">от 1 до 2лет</option>
                <option value="от 2 до 5лет">от 2 до 5лет</option>
              </select>
            </div>
            <h2 className="col-md-12 mt-5 mb-5">Информация о уд. личности</h2>
            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Место рождения *
              </label>
              <input name='UF_46' className='form-control'></input>
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Номер удостворения личности *
              </label>
              <InputMask
              mask="999999999"
              maskChar=" "
              name='UF_42'
              // placeholder="+7  "
              className="form-control"
              />
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Дата выдачи(дд.мм.гггг) * :
              </label>
              <div className='input-group'>
              <InputMask
              mask="99.99.9999"
              maskChar=" "
              name='UF_43'
              // placeholder="+7  "
              className="form-control"
              />
              <div className="hint">Дата выдачи (ДД.ММ.ГГГГ)</div>
              </div>
             
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Срок действия (дд.мм.гггг) * :
              </label>
              <div className='input-group'>
              <InputMask
              name='UF_44'
              mask="99.99.9999"
              maskChar=" "
              // placeholder="+7  "
              className="form-control"
              />
              <div className="hint">Срок действия  (ДД.ММ.ГГГГ)</div>
              </div>
             
            </div>
            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Кем выдано *
              </label>
              <select name='UF_45' className='form-control'>
                <option value="" disabled selected>Кем выдано</option>
                <option value="МЮ РК">МЮ РК</option>
                <option value="МВД РК">МВД РК</option>
              </select>
            </div>  
   
            <div className='col-md-6 mb-3'>
              <label>Доход *</label>
              <input autocomplete='off' name='UF_34' className='form-control' type='number'></input>
            </div>

            <div className='col-md-6 mb-3'>
              <label>Остаток на депозите *</label>
              <div className='input-group'>
                <input name='UF_40' autocomplete='off' className='form-control' type='number'></input>
                <div className="hint">Чем больше сумма депозита тем больше сумма при одобрении заима</div>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
              <label>Сумма *</label>
              <input name='41' type='number' placeholder='Сумма платежей действующих кредитов:' className='form-control' disabled={checked}></input>
            </div> 

            <div className='col-md-6 mb-3'>
              <label>Сумма платежей закрытых кредитов последний 6 мес. *</label>
              <input name='UF_39' type='number' placeholder='' className='form-control' disabled={checked}></input>
            </div>  
     
          </div>
          <h2 className="col-md-12 mt-5 mb-5">Информация о счетах</h2>
          <div className='row form-group'>
            <div className='col-md-6 mb-3'>
              <label>IBAN счет *</label>
              <Field
              <InputMask mask="KZ******************" placeholder='KZ' name='UF_35' className="form-control" />
            </div>
            <div className='col-md-6 mb-3'>
              <label>Номер карты *</label>
              <div className='input-group'>
              <InputMask name='UF_36' mask="9999-9999-9999-9999" className="form-control" type='tel' />;
              </div>
            </div>
            <div className='col-md-6 mb-3'>
            <label>Дата оканчания *</label>
            <InputMask
              name='UF_37'
              mask="99/99"
              maskChar=" "
              className="form-control"
              />
            </div>
            <div className='col-md-6 mb-3'>
            <label htmlFor='name_of_owner'>Имя владельца карты латинскими буквами * :
            </label>
              <div className='input-group'>
                <input name='UF_38' className='form-control  input-uppercase cardName'></input>
                <div className="hint">Только на латинском</div>
              </div>
            </div>
          </div>

      </form> */}
    </div>
  )
}

export default ContinueStep3;