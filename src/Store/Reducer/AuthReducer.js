const initState = {
  authError: null
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      // console.log('login Success');
      return {
        ...state,
        authError: null
      };
    case 'LOGIN_ERROR':
      // console.log('login error');
      return {
        ...state,
        authError: action.err.message
      };
    case 'SIGNOUT_SUCCESS':
      // console.log('SIGN OUT SUCCESS');
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_FAILED':
      // console.error('Sign Out Error');
      return {
        ...state,
        authError: action.err.message
      };
    case 'SIGNUP_SUCCESS':
      // console.log('signUp Successful')
      return{
        ...state,
        authError: null
      }
      case 'SIGNUP_ERROR':
      // console.log('signUp failed')
      return{
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
};

export default AuthReducer