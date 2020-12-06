import {toast} from 'react-toastify'
import {db} from '../../Utils/firebase'

async function deleteMessage(message) {
  let resolved
  let error

  await db
    .collection('contactedMe')
    .doc(`${message.id}`)
    .delete()
    .then(() => {
      toast.success(`Message from "${message.contactName}" is no longer exits`)
      resolved = true
    })
    .catch(err => {
      toast.error('Error! Message Still Exists')
      error = err.message
    })
  return {resolved, error}
}

export {deleteMessage}
