

export const contactedMe = (contact) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    //make async call to the db
    const firestore = getFirestore();
    firestore.collection('contactedMe').add({
      ...contact,
      sentAt: new Date()
    }).then(()=>{
      dispatch({ type: 'MESSAGE_SENT', contact });
    }).catch((err)=>{
      dispatch({type: 'MESSAGE_NOT_SENT', err})
    })
  }
};