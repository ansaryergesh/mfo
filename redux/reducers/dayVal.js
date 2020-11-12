import * as ActionTypes from '../actions/ActionTypes'

export const DayVal = (state = '61', action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.DAY_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
