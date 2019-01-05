

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    //make async call to the db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      projectName: project.projectName,
      projectLink: project.projectLink,
      description: project.description,
      projectLogo: [...project.projectLogos],
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err)=>{
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
  }
};
export const updateProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    //make async call to the db
    const firestore = getFirestore();
    console.log('project actions....:',project)
    firestore.collection('projects').doc(`${project.match.params.id}`).update({
      projectName: project.projectName ? project.projectName : project.project.projectName ,
      projectLink: project.projectLink ? project.projectLink : project.project.projectLink,
      projectLogo: project.projectLogos ? [...project.projectLogos]:[...project.project.projectLogo]  ,
      description: project.description ? project.description : project.project.description,
      // createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'PROJECT_UPDATED', project });
    }).catch((err)=>{
      dispatch({type: 'PROJECT_NOT_UPDATED', err})
    })
  }
};
// export const deleteProject = (project) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) =>{
//     //make async call to the db
//     const firestore = getFirestore();
//     console.log('project actions....:',project)
//     firestore.collection('projects').doc(`${project.match.params.id}`).set({
//       [project]: null
//
//       // createdAt: new Date()
//     }).then(()=>{
//       dispatch({ type: 'PROJECT_DELETED', project});
//     }).catch((err)=>{
//       dispatch({type: 'PROJECT_DELETE_ERROR', err})
//     })
//   }
// };

export const deleteProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    //make async call to the db
    const firestore = getFirestore();
    console.log('project actions....:',project)
    firestore.collection('projects').doc(`${project.id}`).delete().then(()=>{
      dispatch({ type: 'PROJECT_DELETED'});
    }).catch((err)=>{
      dispatch({type: 'PROJECT_DELETE_ERROR', err})
    })
  }
};