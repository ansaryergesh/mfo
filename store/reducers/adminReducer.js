const defaultState = {
    user: {name:null, email:null,role_id: null, admin: null, permissions: []},
    loggedIn: false,
    authenticatingUser: false,
    failedLogin: false,
    error: null,
  };
  
  const adminReducer = /* FUNCTION */ (state = defaultState, action) => {
    switch (action.type) {
      // TODO: move to types
      case 'SET_CURRENT_ADMIN':
        // action.payload {username: 'Chandler Bing', bio: 'my user bio', avatar: 'some image url'}
        return {
          ...state, user: action.payload, error: null, loggedIn: true, authenticatingUser: false,
        };
      case 'AUTHENTICATING_ADMIN': // tells the app we're fetching
        return { ...state, authenticatingUser: true };
      case 'AUTHENTICATED_ADMIN':
        return { ...state, authenticatingUser: false };
      case 'FAILED_LOGIN': // for error handling
        return {
          ...state,
          failedLogin: true,
          error: action.payload,
          authenticatingUser: false,
        };
      case 'LOGOUT_ADMIN':
        return {
          ...state,
          user: {name:null, email:null,role_id: null, admin: null, permissions: []},
          loggedIn: false,
          authenticatingUser: false,
          failedLogin: false,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default adminReducer;
  