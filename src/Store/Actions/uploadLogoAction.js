const metadata = {
  contentType: [
    "image/jpeg",
    "image/png"
  ]

};


export const uploadLogo = (file) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    //make async call to the db
    const firebase = getFirebase();
    const storageRef= firebase.storage()
    // const stor = getState().firebase.storage;
    // const storageRef = this.props.firebase.storage ()
    // .ref.put ('projectLogo/' + file.name).then(()=>{
    //   console.log('Success')
    // }).catch((err) =>{
    //   console.log('error', err)
    // });
    console.log('from the action',file)
    file.map((item) =>{
      storageRef.ref(`projectLogo/${item.name}`).put(item).then(()=>{
        dispatch({ type: 'PROJ_LOGO_ADDED', item });
      }).catch((err)=>{
        dispatch({type: 'PROJ_LOGO_NOT_ADDED', err})
      })

    })
  }
};