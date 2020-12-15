import {toast} from 'react-toastify'
import {db} from '../../Utils/firebase'

async function contactedMe(contact) {
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
      toast.success(`Thanks "${contact.name}" For Contacting Me`)
      resolved = true
    })
    .catch(err => {
      toast.error("Sorry, I Didn't Get Your Message. Due to an Error")
      error = err.message
    })
  return {resolved, error}
}

export {contactedMe}
