import * as ActionTypes from '../types'
export const registration = (state = '', action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.ADD_REGISTRATION:
      return action.payload;
    default:
      return state;
  }
};
