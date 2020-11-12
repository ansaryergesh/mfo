import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { DayVal } from './dayVal';
import { registration} from './registration';
import { MoneyVal } from './moneyVal';
import { regionsReducer } from './regions';
import {messages } from './messages'
import {stepregistration} from './stepregistration';
import {loading} from './loading';
import { createForms } from 'react-redux-form';
import { RegistrationStep1, RegistrationStep2 } from './registrationStep1';
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      moneyVal: MoneyVal,
      dayVal: DayVal,
      message: messages,
      registrationValues: registration,
      stepregistration: stepregistration,
      regionsReducer: regionsReducer,
      loading: loading,
      ...createForms({registration: RegistrationStep1, codeConfirm: "", registration2: RegistrationStep2,
      registration3: "", oplata: "", feedback: ""})
    }),
    applyMiddleware(thunk, logger),
  );

  return store;
};
