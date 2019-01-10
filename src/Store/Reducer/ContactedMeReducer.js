const initState ={
  contError:null,
  contactedMe:[
    {id:1, projectName: 'cong dong', description: 'jasd asfddasf '},
    {id:2, projectName: 'cong dong', description: 'jasd asfddasf '},
    {id:3, projectName: 'cong dong', description: 'jasd asfddasf '}
  ]
};
const ContactedMeReducer = (state = initState,action) => {
  switch(action.type){
    case 'MESSAGE_SENT':
      // console.log('Message sent', action.contact);
      return {
        ...state,
        contError: null
      };
    case 'MESSAGE_NOT_SENT':
      // console.log('Message cannot be sent', action.err);
      return {
        ...state,
        contError: action.err.message
      };
    case 'MESSAGE_DELETED':
      console.log('Message no longer exists');
      return null;
    case 'MESSAGE_DELETE_ERROR':
      console.log('Message cannot be sent', action.err);
      return {
        ...state,
        contError: action.err.message
      };
    default:
      return state;
  }
};

export default ContactedMeReducer
