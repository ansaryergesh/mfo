import * as ActionTypes from '../types'
export const loading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};
