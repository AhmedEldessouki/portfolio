// const metadata = {
//   projectLogo: `image/jpeg`,
//   file:[]
// };
//
//
// export const createProject = (project) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) =>{
//     //make async call to the db
//     // const firestore = getFirestore();
//     const firebase = getFirebase();
//     const storageRef= firebase.storage.ref()
//     const stor = getState().firebase.storage;
//     const storageRef = this.props.firebase.storage ()
//     .ref.put ('projectLogo/' + file.name).then(()=>{
//       console.log('Success')
//     }).catch((err) =>{
//       console.log('error', err)
//     });
//     storageRef.child(`projectLogo/`).ref.put(projLogo).then(()=>{
//       dispatch({ type: 'CREATE_PROJECT', project });
//     }).catch((err)=>{
//       dispatch({type: 'CREATE_PROJECT_ERROR', err})
//     })
//   }
// };