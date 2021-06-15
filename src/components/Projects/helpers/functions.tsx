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
    res => res.data.secure_url,
    (err: Error) => {
      toast.error(`Upload of ${image.name}Failed!`)
      throw new Error(err.message)
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
const projectFormReducer = (
  state: ReducerState,
  action: ReducerAction,
): ReducerState => {
  const {type, payload} = action
  switch (type) {
    case 'error': {
      return {...state, error: payload as typeof state.error}
    }
    case 'idle': {
      return {...state, status: 'idle'}
    }
    case 'pending': {
      return {...state, status: 'pending'}
    }
    case 'redirect': {
      return {...state, status: 'redirect'}
    }

    case 'clean_up': {
      return {
        ...state,
        status: 'idle',
        error: undefined,
        enteredProjectData: {
          name: '',
          link: '',
          repoLink: '',
          description: '',
          projectType: 'Personal',
          projectLogo: [],
          tag: [],
        },
      }
    }
    default: {
      return state
    }
  }
}

export {uploadImage, projectFormReducer, gradualUpload}
