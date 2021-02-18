import {combineReducers} from 'redux'
import { dayReducer } from './dayReducer'
import {MoneyVal} from './moneyVal'
import {registration} from './registration'
import {regionsReducer} from './regions'
import {loading} from './loading'
import {messages} from './messages'
import {stepregistration} from './stepregistration'
import userReducer from './userReducer'
import {userStatus} from './userStatus'
import {userHistory} from './userHistory'
import {nonanswered} from './nonanswered'
import {answered} from './answered'
import admmessage from './admmessage'
import {createForms} from 'react-redux-form'
import {RegistrationStep1,RegistrationStep2} from './registrationStep1'
import adminReducer from './adminreducer'
export default combineReducers ({
  dayVal: dayReducer,
  moneyVal: MoneyVal,
  message: messages,
  userReducer,
  registrationValues: registration,
  stepregistration: stepregistration,
  regionsReducer: regionsReducer,
  userHistory: userHistory,
  nonanswered: nonanswered,
  answered: answered,
  userStatus: userStatus,
  loading: loading,
  ...createForms({registration: RegistrationStep1, codeConfirm: "", registration2: RegistrationStep2,
  registration3: "", oplata: "", feedback: ""})
})
