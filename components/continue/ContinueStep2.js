import { useEffect, useState } from "react";
import { addition_contact_type, gorods, relative_type } from "../../defaults/defaultRelative";
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
  validEmail
} from '../../defaults/validations';
import cookie from 'js-cookie'
import InputMask from "react-input-mask";
import { Formik, Form,  Field  } from 'formik';
import axios from "axios";


let step2 = {};
const PhoneMask = ({ field, form, ...props}) => <InputMask 
mask="+7(999)-999-9999"
  maskChar= " "
  className="my-input"
  {...field}
  {...props} />


const ContinueStep2 = ({next,setNext}) => {

  const [regions, setRegions] = useState({})
  const [checked, setChecked] = useState(cookie.get('continueChecked') ? cookie.get('continueChecked') : false)
  const [city,setCity] = useState(cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_17  : '')
  var scrollToElement = require('scroll-to-element');
  const handleRegion = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserDate({...userDate, [name]: value})
  
    setTimeout(() => {
      handleFocus(e)
    },100)
  }

  const onSubmit = (values) => {
    values.UF_17 = city;
    checked ? values.UF_21 = '' : ''
    if(!city) {

    }

    console.log(values)
    setNext(next+1)
    console.log('csa')
    cookie.set('continueChecked', checked)
    cookie.set('continue2',values)
    setTimeout(() => {
      scrollToElement('.inputs_continue', {
        offset: 0,
        align: 'middle',
        ease: 'outExpo',
        duration: 600
      });
    },100)
    // Object.keys(errorDate).map(function())
  }
  const handleFocus = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if(value === '') {
      setErrorDate({...errorDate, [name] : 'Обязателен для заполнения'})
    }
    if(value!=='') {
      setErrorDate({...errorDate, [name] : ''})
    }
  }
 

  const fetchRegions = (e) => {
    setCity(e.target.value)
    axios.get(`https://api.money-men.kz/api/city/${e.target.value}`)
      .then(res=> {
        console.log(res)
        setRegions(res.data)
      })
  }

  useEffect(() => {
    if(cookie.get('continue2')) {
      let id = JSON.parse(cookie.get('continue2')).UF_17
      axios.get(`https://api.money-men.kz/api/city/${id}`)
      .then(res=> {
        console.log(res)
        setRegions(res.data)
      })
    }
  },[])
  const isCookieContinue = () => {
    cookie.get('continue2') ? true  : false
  }
  return(
    <div>
      <Formik 
        initialValues={{
          UF_17: cookie.get('continue2') ? parseInt(JSON.parse(cookie.get('continue2')).UF_17) : '',
          UF_18: cookie.get('continue2') ? parseInt(JSON.parse(cookie.get('continue2')).UF_18) : '',
          UF_19: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_19 : '',
          UF_20: cookie.get('continue2') ?JSON.parse(cookie.get('continue2')).UF_20 : '',
          UF_21: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_21 : '',
          UF_22: cookie.get('continue2') ? JSON.parse(cookie.get('continue2')).UF_22 : '',
          UF_23: cookie.get('continue2') ?  JSON.parse(cookie.get('continue2')).UF_23 : '',
          UF_24: cookie.get('continue2') ?JSON.parse(cookie.get('continue2')).UF_24 : '',
          UF_25: cookie.get('continue2') ?JSON.parse(cookie.get('continue2')).UF_25 : '',
          UF_26: cookie.get('continue2') ?JSON.parse(cookie.get('continue2')).UF_26 : '',
          UF_27: cookie.get('continue2') ?JSON.parse(cookie.get('continue2')).UF_27 : '',
          UF_28: cookie.get('continue2') ?JSON.parse(cookie.get('continue2')).UF_28 : '',
          UF_29: cookie.get('continue2') ?JSON.parse(cookie.get('continue2')).UF_29 : '',
          UF_30: cookie.get('continue2') ?JSON.parse(cookie.get('continue2')).UF_30 : '',
        }}
        onSubmit={(values)=> {
          onSubmit(values)
        }}
      >
        {({ errors, touched, isValidating, isSubmitting }) =>  (
          <Form className='container mt-5'>
            <div className='row form-group'>
            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Семейное положение *
              </label>
              <Field as='select' name='UF_22' validate={requiredd} className='form-control'>
                <option value=""></option>
                <option value="Женат/Замужем">Женат/Замужем</option>
                <option value="Холост/Не замужем">Холост/Не замужем</option>
              </Field>
              {errors.UF_22 && touched.UF_22 && <p className='text-danger'>{errors.UF_22}</p>}
            </div>

            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Количество детей *
              </label>
              <Field as='select' validate={requiredd} name='UF_23' className='form-control'>
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </Field>
              {errors.UF_23 && touched.UF_23 && <p className='text-danger'>{errors.UF_23}</p>}
            </div>

            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Образование *
              </label>
              <Field as='select' validate={requiredd} name='UF_24' className='form-control'>
                <option value=""></option>
                <option value="Без образования">Без образования</option>
                <option value="Среднее">Среднее</option>
                <option value="Высшее">Высшее</option>
              </Field>
              {errors.UF_24 && touched.UF_24 && <p className='text-danger'>{errors.UF_24}</p>}
            </div>

            <div className='col-md-6 mb-3'>
              <label htmlFor=''>
                Город/Область *
              </label>
              <Field  onChange={(e)=>fetchRegions(e)} value={city}  as='select' name='UF_17'   className='form-control'>
                <option value="" disabled></option>
                {gorods.map(gorod => (
                  <option key={gorod.id} value={gorod.id}>{gorod.name}</option>
                ))}
              </Field>
              {errors.UF_17 && touched.UF_17 && <p className='text-danger'>{errors.UF_17}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>Регионы/Районы *</label>
              <div className='input-group'>
                <Field as='select' validate={requiredd} name='UF_18' className='form-control'>
                  <option value="" ></option>
                  {regions.length>0 && regions.map(gorod=> (
                    <option key={gorod.id} value={gorod.id}>{gorod.name}</option>
                  ))}
                </Field>
              </div>
              <div className="hint">Сначала выберите Город/Область из списка</div>
              
              {errors.UF_18 && touched.UF_18 && <p className='text-danger'>{errors.UF_18}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>Улица *</label>
              <Field name='UF_19' validate={requiredd} autocomplete='off' className='form-control'></Field>
              {errors.UF_19 && touched.UF_19 && <p className='text-danger'>{errors.UF_19}</p>}
            </div>

            <div className='col-md-6 mb-3'>
              <label>Дом *</label>
              <Field name='UF_20' validate={requiredd} autocomplete='off' className='form-control'></Field>
              {errors.UF_20 && touched.UF_20 && <p className='text-danger'>{errors.UF_20}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>Номер квартиры *</label>
              <Field name='UF_21' validate={!checked ? requiredd : ''} type='number' className='form-control' disabled={checked}></Field>
              {errors.UF_21 && touched.UF_21 && <p className={checked ? 'd-none' : 'text-danger'} >{errors.UF_21}</p>}
            </div>  
            <div className="col-md-6 mb-3">
              <input
                type="checkbox"
                onChange={() => setChecked(!checked)}
                defaultChecked={checked}/>
              <label className="form-check-label ml-3" for="exampleCheck1">Частный дом</label>
            </div>
          </div>
          <h2 className="mt-5 mb-5">Родственник</h2>
          <div className='row form-group'>
            <div className='col-md-6 mb-3'>
              <label>Имя и Фамилия*</label>
              <div className='input-group'>
              <Field name='UF_25' validate={requiredd, acceptCirrilic} autocomplete='off' className='form-control'></Field>
           
              <div className="hint">только на киррилице</div>
              </div>
              {errors.UF_25 && touched.UF_25 && <p className='text-danger'>{errors.UF_25}</p>}
            </div>
          
            <div className='col-md-6 mb-3'>
            <label>Номер телефона *</label>
            <Field 
              name='UF_27'
              className='form-control'
              type='tel'
              validate={phoneValidation}
              component = {PhoneMask}
            ></Field>
           
           {errors.UF_27 && touched.UF_27 && <p className='text-danger'>{errors.UF_27}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>Вид родства *</label>
              <div className='input-group'>
                <Field as='select' name='UF_26' validate={requiredd} className='form-control'>
                  <option value="" disabled></option>
                  {relative_type.map(relative => (
                  <option key={relative.id} value={relative.id}>{relative.name}</option>
                ))}
                </Field>
              </div>
              
              {errors.UF_26 && touched.UF_26 && <p className='text-danger'>{errors.UF_26}</p>}
            </div>
          </div>

          <h2 className="mt-5 mb-5">Дополнительный контакт</h2>
          <div className='row form-group'>
            <div className='col-md-6 mb-3'>
              <label>Имя и Фамилия*</label>
              <div className='input-group'>
              <Field name='UF_28' validate={requiredd, acceptCirrilic} autocomplete='off' className='form-control'></Field>
           
              <div className="hint">только на киррилице</div>
              </div>
              {errors.UF_28 && touched.UF_28 && <p className='text-danger'>{errors.UF_28}</p>}
            </div>
 
            <div className='col-md-6 mb-3'>
            <label>Номер телефона *</label>
            <Field 
              name='UF_30'
              className='form-control'
              type='tel'
              validate={phoneValidation}
              component = {PhoneMask}
            ></Field>
           
           {errors.UF_30 && touched.UF_30 && <p className='text-danger'>{errors.UF_30}</p>}
            </div>
            <div className='col-md-6 mb-3'>
              <label>Вид родства *</label>
              <div className='input-group'>
                <Field as='select' validate={requiredd} name='UF_29' className='form-control'>
                  <option value="" disabled></option>
                  {addition_contact_type.map(relative => (
                  <option key={relative.id} value={relative.id}>{relative.name}</option>
                ))}
                </Field>
              </div>
              
              {errors.UF_29 && touched.UF_29 && <p className='text-danger'>{errors.UF_29}</p>}
            </div>
                    
          </div>
          <div className="button form-group mb-5">
         
              <button
                type="submit "
                className="agreement-btn"
              >Дальше</button>
          </div>
          </Form>
    )}
      </Formik> 
   
    </div>
  )
}

export default ContinueStep2;