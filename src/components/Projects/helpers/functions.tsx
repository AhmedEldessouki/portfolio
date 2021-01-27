import axios from 'axios'
import {toast} from 'react-toastify'

import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../../../Config/CloudInary'

import {ReducerAction, ReducerState} from './types'

async function uploadImage(image: File, projectName: string) {
  let formData
  formData = new FormData()
  formData.set('file', image)
  formData.set('', `${projectName}_image`)
  formData.set('upload_preset', `${CLOUDINARY_UPLOAD_PRESET}`)
  formData.set('api_key', `${CLOUDINARY_API_KEY}`)

  return await axios.post(`${CLOUDINARY_UPLOAD_URL}`, formData).then(
    res => {
      return res.data.secure_url
    },
    err => {
      toast.error(`Upload of ${image.name}Failed!`)
      throw new Error(err.message)
    },
  )
}

const projectFormReducer = (state: ReducerState, action: ReducerAction) => {
  const {type, payload} = action
  const {enteredProjectData, acceptedImages, rejectedImages} = state
  switch (type) {
    case 'error': {
      state.error = {...payload}
      return {...state}
    }

    case 'accepted_images': {
      if (acceptedImages.length > 9) {
        state.error = {code: 'too-many-files', message: 'too-many-files'}
      } else {
        state.acceptedImages = acceptedImages
          ? [...acceptedImages, ...payload]
          : [...payload]
        state.status = 'idle'
        state.error = null
      }
      return {
        ...state,
      }
    }
    case 'rejected_images': {
      state.rejectedImages = rejectedImages
        ? [...rejectedImages, ...payload]
        : [...payload]
      state.status = 'idle'
      return {
        ...state,
      }
    }
    case 'remove_oldImages': {
      enteredProjectData?.projectLogo?.splice(payload, 1)
      return {...state}
    }
    case 'remove_rejectedImages': {
      rejectedImages.splice(payload, 1)
      return {...state}
    }
    case 'remove_acceptedImages': {
      acceptedImages.splice(payload, 1)
      return {...state}
    }

    case 'submit_newData': {
      enteredProjectData.name = payload.name
      enteredProjectData.link = payload.link
      enteredProjectData.repoLink = payload.repoLink
      enteredProjectData.projectType = payload.projectType
      enteredProjectData.description = payload.description
      state.status = 'submitted'
      state.error = null
      return {
        ...state,
      }
    }
    case 'submit_description': {
      state.enteredProjectData.description = payload
      return {
        ...state,
      }
    }
    case 'add_tag': {
      enteredProjectData.tag?.push(payload)
      return {
        ...state,
      }
    }
    case 'remove_tag': {
      const i = enteredProjectData.tag?.indexOf(payload)
      if (i >= 0) {
        enteredProjectData.tag?.splice(i, 1)
      }
      return {
        ...state,
      }
    }

    case 'idle': {
      state.status = 'idle'
      return {...state}
    }
    case 'redirect': {
      state.status = 'redirect'
      return {...state}
    }
    case 'next': {
      state.status = 'next'
      return {...state}
    }
    case 'images_uploaded': {
      state.status = 'images_uploaded'
      return {...state}
    }
    case 'next_add':
      enteredProjectData.projectLogo?.push(payload)
      state.status = 'next_add'
      return {
        ...state,
      }

    case 'clean_up': {
      state.enteredProjectData = {
        name: '',
        link: '',
        repoLink: '',
        description: '',
        projectType: 'Personal',
        projectLogo: [],
        tag: [],
      }
      state.acceptedImages = []
      state.rejectedImages = []
      state.status = 'idle'
      state.error = null
      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}

export {uploadImage, projectFormReducer}
