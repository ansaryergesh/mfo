import * as ActionTypes from './actions/ActionTypes';

export const stepregistration = (state = '0', action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.STEP_REGISTRATION:
      return action.payload;
    default:
      return state;
  }
};