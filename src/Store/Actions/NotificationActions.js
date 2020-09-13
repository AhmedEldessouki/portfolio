import {toast} from 'react-toastify'

export const deleteNotification = notification => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to the db
    const firestore = getFirestore()
    console.log('notification actions....:', notification)
    firestore
      .collection('notifications')
      .doc(`${notification.id}`)
      .delete()
      .then(() => {
        toast.success(`Notification deleted`)
        dispatch({type: 'NOTIFICATION_DELETED'})
      })
      .catch(err => {
        toast.error('Notification Deletion Failed')
        dispatch({type: 'NOTIFICATION_DELETE_ERROR', err})
      })
  }
}
