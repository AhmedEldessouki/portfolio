const initState = {
  authError: null
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login Success');
      return {
        ...state,
        authError: null
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      };
    case 'SIGNOUT_SUCCESS':
      console.log('SIGNOUT SUCCESS');
      return state;
    default:
      return state;
  }
};

export default AuthReducer