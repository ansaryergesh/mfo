export const userStatus = (state = {
    isLoading: false,
    errMess: null,
    userStatus: [],
  }, action) => {
    switch (action.type) {
      case 'STATUS_SUCCESS':
        return {
          ...state, isLoading: false, errMess: null, userStatus: action.payload,
        };
      case 'DATE_LOADING':
        return {
          ...state, isLoading: true, errMess: null, userStatus: [],
        };
      case 'DATE_FAILED':
        return {
          ...state, isLoading: false, errMess: action.payload, userStatus: [],
        };
      default:
        return state;
    }
  };