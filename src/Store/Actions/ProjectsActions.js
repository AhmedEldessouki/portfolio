

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    //make async call to the db
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirtsName: 'ahmed',
      authorLastName: 'eldessouki',
      autherId: 1243,
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err)=>{
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
  }
};