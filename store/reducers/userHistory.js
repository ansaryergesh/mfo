export const userHistory = (state = {
    isLoading: false,
    errMess: null,
    userHistory: [],
  }, action) => {
    switch (action.type) {
      case 'HISTORY_SUCCESS':
        return {
          ...state, isLoading: false, errMess: null, userHistory: action.payload,
        };
      case 'DATE_LOADING':
        return {
          ...state, isLoading: true, errMess: null, userHistory: [],
        };
      case 'DATE_FAILED':
        return {
          ...state, isLoading: false, errMess: action.payload, userHistory: [],
        };
      default:
        return state;
    }
  };