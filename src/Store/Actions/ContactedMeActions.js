import {toast} from 'react-toastify'

export const contactedMe = contact => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to the db
    const firestore = getFirestore()
    firestore
      .collection('contactedMe')
      .add({
        contactName: contact.contactName,
        email: contact.email,
        phoneNumber: contact.phoneNumber,
        description: contact.description,
        sentAt: new Date(),
      })
      .then(() => {
        toast.success(`Thanks "${contact.contactName}" For Contacting Me`)
        dispatch({type: 'MESSAGE_SENT', contact})
      })
      .catch(err => {
        toast.error("Sorry, I Didn't Get Your Message. Due to an Error")
        dispatch({type: 'MESSAGE_NOT_SENT', err})
      })
  }
}

export const deleteMessage = contact => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to the db
    const firestore = getFirestore()
    console.log('message actions....:', contact)
    firestore
      .collection('contactedMe')
      .doc(`${contact.id}`)
      .delete()
      .then(() => {
        toast.success(
          `Message from "${contact.contactName}" is no longer exits`,
        )
        dispatch({type: 'MESSAGE_DELETED'})
      })
      .catch(err => {
        toast.error('Error! Message Still Exists')
        dispatch({type: 'MESSAGE_DELETE_ERROR', err})
      })
  }
}
