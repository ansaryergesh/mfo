import * as ActionTypes from '../types'

export const MoneyVal = (state = '55000', action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.MONEY_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
