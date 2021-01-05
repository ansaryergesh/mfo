export const answered = (state = {
    isLoading: false,
    errMess: null,
    answered: [],
  }, action) => {
    switch (action.type) {
      case 'MSGS_SUCCESS':
        return {
          ...state, isLoading: false, errMess: null, answered: action.payload,
        };
      case 'MSGS_LOADING':
        return {
          ...state, isLoading: true, errMess: null, answered: [],
        };
      case 'MSGS_FAILED':
        return {
          ...state, isLoading: false, errMess: action.payload, answered: [],
        };
      default:
        return state;
    }
  };