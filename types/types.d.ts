import type {ErrorType, Project} from './interfaces'

type ReducerState = {
  status: 'idle' | 'pending' | 'redirect'
  enteredProjectData: Project
  error: ErrorType
}
type UploadedImagesArrayType = Array<{preview: string; file: File}>
type ImportedImages = {
  acceptedImages: {
    imagesType: 'acceptedImages'
    imgs: Array<{preview: string; file: File}>
  }
  rejectedImages: {
    imagesType: 'rejectedImages'
    imgs: Array<{preview: string; file: File}>
  }
}
type ReducerAction = {
  type:
    | 'error'
    | 'idle'
    | 'pending'
    | 'clean_up'
    | 'redirect'
    | 'set_form_values'
  payload?: ErrorType | string | Project
}

export {ImportedImages, ReducerAction, ReducerState, UploadedImagesArrayType}
