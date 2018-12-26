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
    // console.log('create_project', action.project);
    return state;
    case 'CREATE_PROJECT_ERROR':
    // console.log('create project error', action.err);
    return state;
    default:
    return state;
  }
};

export default ProjectReducer
