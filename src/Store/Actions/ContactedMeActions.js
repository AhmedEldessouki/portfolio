

export const contactedMe = (contact) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    //make async call to the db
    const firestore = getFirestore();
    firestore.collection('contactedMe').add({
      contactName: contact.contactName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      description: contact.description,
      sentAt: new Date()
    }).then(()=>{
      dispatch({ type: 'MESSAGE_SENT', contact });
    }).catch((err)=>{
      dispatch({type: 'MESSAGE_NOT_SENT', err})
    })
  }
};

export const deleteMessage = (contact) => {
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    //make async call to the db
    const firestore = getFirestore();
    console.log('message actions....:',contact)
    firestore.collection('contactedMe').doc(`${contact.id}`).delete().then(()=>{
      dispatch({ type: 'MESSAGE_DELETED'});
    }).catch((err)=>{
      dispatch({type: 'MESSAGE_DELETE_ERROR', err})
    })
  }
};