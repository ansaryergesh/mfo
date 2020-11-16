export const regionsReducer = (state = {
    isLoading: false,
    errMess: null,
    regions: [],
  }, action) => {
    switch (action.type) {
      case 'REGION_SUCCESS':
        return {
          ...state, isLoading: false, errMess: null, regions: action.payload,
        };
      case 'DATE_LOADING':
        return {
          ...state, isLoading: true, errMess: null, regions: [],
        };
      case 'DATE_FAILED':
        return {
          ...state, isLoading: false, errMess: action.payload, regions: [],
        };
      default:
        return state;
    }
  };