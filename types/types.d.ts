type ReducerState = {
  status: 'idle' | 'pending' | 'redirect'
  enteredProjectData: Omit<Project, 'id' | 'date'>

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
  payload?: ErrorType | string
}

export {ImportedImages, ReducerAction, ReducerState, UploadedImagesArrayType}
