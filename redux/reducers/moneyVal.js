import * as ActionTypes from '../actions/ActionTypes'

export const MoneyVal = (state = '10000', action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.MONEY_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
