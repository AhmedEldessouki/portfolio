import type {ErrorType, Project} from './interfaces'

type ReducerState = {
  status:
    | 'idle'
    | 'submitted'
    | 'next'
    | 'images_uploaded'
    | 'next_add'
    | 'redirect'
  enteredProjectData: Omit<Project, 'id' | 'date'>
  acceptedImages: Array<{preview: string & File}>
  rejectedImages: Array<{preview: string & File}>
  error: ErrorType
}

type ReducerAction = {
  type:
    | 'error'
    | 'accepted_images'
    | 'rejected_images'
    | 'remove_oldImages'
    | 'remove_rejectedImages'
    | 'remove_acceptedImages'
    | 'submit_newData'
    | 'submit_description'
    | 'add_tag'
    | 'remove_tag'
    | 'idle'
    | 'next'
    | 'images_uploaded'
    | 'next_add'
    | 'clean_up'
    | 'redirect'
  payload?:
    | Partial<ReducerState>
    | Omit<Project, 'projectLogo', 'tag', 'id', 'date'>
    | Omit<Project, 'projectLogo', 'id', 'date'>
    | string
}

export {ReducerAction, ReducerState}
