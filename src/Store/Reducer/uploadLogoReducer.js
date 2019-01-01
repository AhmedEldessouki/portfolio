const initState ={
  projects:[
    {id:1, projectName: 'cong dong', description: 'jasd asfddasf '},
    {id:2, projectName: 'cong dong', description: 'jasd asfddasf '},
    {id:3, projectName: 'cong dong', description: 'jasd asfddasf '}
  ],
  projError: null
};

const uploadLogoReducer = (state = initState,action) => {
  switch(action.type){
    case 'PROJ_LOGO_ADDED':
      console.log('PROJ_LOGO_ADDED', action.file);
      return state;
    case 'PROJ_LOGO_NOT_ADDED':
      console.log('PROJ_LOGO_NOT_ADDED', action.err);
      return {
        ...state,
        projError: action.err.message
      };
    default:
      return state;
  }
};

export default uploadLogoReducer
