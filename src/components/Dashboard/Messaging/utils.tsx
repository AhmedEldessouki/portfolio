import {toast} from 'react-toastify'
import {db} from '../../Utils/firebase'
import type {Message} from '../../Utils/interfaces'

async function deleteMessage(message: Message) {
  let resolved
  let error

  await db
    .collection('contactedMe')
    .doc(`${message.id}`)
    .delete()
    .then(() => {
      toast.success(`Message from "${message.name}" is no longer exits`)
      resolved = true
    })
    .catch(err => {
      toast.error('Error! Message Still Exists')
      error = err.message
    })
  return {resolved, error}
}

export {deleteMessage}
