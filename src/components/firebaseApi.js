import {toast} from 'react-toastify'
import {auth, db} from '../Config/firebase'

async function contactedMe(contact) {
  let resolved
  let error

  await db
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
      resolved = true
    })
    .catch(err => {
      toast.error("Sorry, I Didn't Get Your Message. Due to an Error")
      error = err.message
    })
  return {resolved, error}
}

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

async function createProject(project, profile) {
  let resolved
  let error

  const authorId = auth.currentUser.uid
  await db
    .collection('projects')
    .add({
      projectName: project.projectName,
      projectLink: project.projectLink,
      description: project.description,
      projectLogo: [...project.projectLogos],
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date(),
    })
    .then(() => {
      toast.success(`Project "${project.projectName}" Created`)
      resolved = true
    })
    .catch(err => {
      toast.error('Project Creation Failed')
      error = err.message
    })
  return {resolved, error}
}

async function updateProject(project) {
  let resolved
  let error

  // TODO: fix image update
  await db
    .collection('projects')
    .doc(`${project.id}`)
    .update({
      projectName: project.projectName
        ? project.projectName
        : project.project.projectName,
      projectLink: project.projectLink
        ? project.projectLink
        : project.project.projectLink,
      // projectLogo: project.projectLogos
      //   ? [...project.projectLogos]
      //   : [...project.project.projectLogo],
      description: project.description
        ? project.description
        : project.project.description,
      updatedOn: new Date(),
    })
    .then(() => {
      toast.success(`Project "${project.projectName}" Updated`)
      resolved = true
    })
    .catch(err => {
      toast.error("Project Didn't Update")
      error = err.message
    })
  return {resolved, error}
}

async function deleteProject(project) {
  let resolved
  let error

  await db
    .collection('projects')
    .doc(`${project.id}`)
    .delete()
    .then(() => {
      toast.success(`Project "${project.projectName}" deleted`)
      resolved = true
    })
    .catch(err => {
      toast.error('Project Deletion Failed')
      console.log(error)
      error = err.message
    })
  return {resolved, error}
}

export {contactedMe, updateProject, deleteProject, createProject, deleteMessage}
