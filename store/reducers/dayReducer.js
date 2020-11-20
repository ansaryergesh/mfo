import * as types from '../types'


export const dayReducer = (state = '15', action) => {
  const { type } = action;
  switch (type) {
    case types.DAY_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
