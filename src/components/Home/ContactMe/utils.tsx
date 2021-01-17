import {toast} from 'react-toastify'
import type {Message} from '../../Utils/interfaces'
import {db} from '../../Utils/firebase'

async function sendMessage(contact: Message) {
  let resolved
  let error

  await db
    .collection('contactedMe')
    .add({
      name: contact.name,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      description: contact.description,
      date: new Date(),
    })
    .then(() => {
      toast.success(`Thanks "${contact.name}"`)
      resolved = true
    })
    .catch(err => {
      toast.error('Sorry, Something went wrong. Please try again.')
      error = err.message
    })
  return {resolved, error}
}

export {sendMessage}
