import {toast} from 'react-toastify'

export const createProject = project => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    const {profile} = getState().firebase
    const authorId = getState().firebase.auth.uid
    firestore
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
        dispatch({type: 'CREATE_PROJECT', project})
      })
      .catch(err => {
        toast.error('Project Creation Failed')
        dispatch({type: 'CREATE_PROJECT_ERROR', err})
      })
  }
}
export const updateProject = project => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // TODO: fix image update
    const firestore = getFirestore()
    firestore
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
      })
      .then(() => {
        toast.success(`Project "${project.projectName}" Updated`)
        dispatch({type: 'PROJECT_UPDATED', project})
      })
      .catch(err => {
        dispatch({type: 'PROJECT_NOT_UPDATED', err})
        toast.error("Project Didn't Update")
      })
  }
}

export const deleteProject = project => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    firestore
      .collection('projects')
      .doc(`${project.id}`)
      .delete()
      .then(() => {
        toast.success(`Project "${project.projectName}" deleted`)
        dispatch({type: 'PROJECT_DELETED'})
      })
      .catch(err => {
        toast.error('Project Deletion Failed')
        dispatch({type: 'PROJECT_DELETE_ERROR', err})
      })
  }
}
