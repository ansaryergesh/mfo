export const nonanswered = (state = {
    isLoading: false,
    errMess: null,
    nonanswered: [],
  }, action) => {
    switch (action.type) {
      case 'MSGS_SUCCESS':
        return {
          ...state, isLoading: false, errMess: null, nonanswered: action.payload,
        };
      case 'MSGS_LOADING':
        return {
          ...state, isLoading: true, errMess: null, nonanswered: [],
        };
      case 'MSGS_FAILED':
        return {
          ...state, isLoading: false, errMess: action.payload, nonanswered: [],
        };
      default:
        return state;
    }
  };