const initState ={
  projects:[
    {id:1, projectName: 'cong dong', description: 'jasd asfddasf '},
    {id:2, projectName: 'cong dong', description: 'jasd asfddasf '},
    {id:3, projectName: 'cong dong', description: 'jasd asfddasf '}
  ]
};

const ProjectReducer = (state = initState,action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('project has been created', action.project);
      return {...state};
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return {
        ...state,
        projError: action.err.message
      };
    case 'PROJECT_UPDATED':
      console.log('project successfully updated', action.project);
      return {...state};
    case 'PROJECT_NOT_UPDATED':
      console.log('project did not update', action.err);
      return {
        ...state,
        projError: action.err.message
      };
    default:
      return state;
  }
};

export default ProjectReducer
