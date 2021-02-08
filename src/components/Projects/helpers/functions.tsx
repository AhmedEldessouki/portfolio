/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import {toast} from 'react-toastify'
import type {ReducerAction, ReducerState} from '../../../../types/types'

import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../../../Config/CloudInary'

async function uploadImage(
  image: File,
  projectName: string,
): Promise<PromiseFulfilledResult<string>> {
  const formData = new FormData()
  formData.set('file', image)
  formData.set('tag', `${projectName}_image`)
  formData.set('upload_preset', `${CLOUDINARY_UPLOAD_PRESET}`)
  formData.set('api_key', `${CLOUDINARY_API_KEY}`)

  return axios.post(`${CLOUDINARY_UPLOAD_URL}`, formData).then(
    res => {
      return res.data.secure_url
    },
    err => {
      toast.error(`Upload of ${image.name}Failed!`)
      throw new Error(err)
    },
  )
}
const gradualUpload = async (
  imagesArray: Array<{preview: string; file: File}>,
  name: string,
) => {
  if (imagesArray.length > 0) {
    const uploadedImages = await Promise.all(
      imagesArray.map(({file}) => uploadImage(file, name)),
    )
    return uploadedImages
  }
  return []
}
const projectFormReducer = (state: ReducerState, action: ReducerAction) => {
  const {type, payload} = action
  switch (type) {
    case 'error': {
      state.error = payload as typeof state.error
      return {...state}
    }
    case 'idle': {
      state.status = 'idle'
      return {...state}
    }
    case 'pending': {
      state.status = 'pending'
      return {...state}
    }
    case 'redirect': {
      state.status = 'redirect'
      return {...state}
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
      state.status = 'idle'
      state.error = undefined
      return {
        ...state,
      }
    }
    default: {
      return state
    }
  }
}

export {uploadImage, projectFormReducer, gradualUpload}
