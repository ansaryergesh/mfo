import * as ActionTypes from '../types'

export const stepregistration = (state = '0', action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.STEP_REGISTRATION:
      return action.payload;
    default:
      return state;
  }
};
