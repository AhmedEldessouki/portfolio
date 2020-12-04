/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import * as React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import Dropzone from 'react-dropzone'

import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../../Config/CloudInary'
import {colors, h1XL, labelWrapper, textArea} from '../Styles'
import {db} from '../../Config/firebase'

async function createProject(project, profile) {
  let resolved
  let error

  const authorId = profile.uid
  await db
    .collection('projects')
    .add({
      projectName: project.projectName,
      projectLink: project.projectLink,
      description: project.description,
      projectLogo: [...project.projectLogos],
      // authorFirstName: profile.firstName,
      // authorLastName: profile.lastName,
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

function updateProject(project) {
  let resolved
  let error
  console.log(project)
  const {id, projectName, projectLink, projectLogo, description} = project
  // TODO: fix image update
  db.collection('projects')
    .doc(`${id}`)
    .update({
      projectName,
      projectLink,
      projectLogo,
      description,
      updatedOn: new Date(),
    })
    .then(() => {
      toast.success(`Project "${projectName}" Updated`)
      resolved = 'success'
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

function uploadImage(image, project) {
  let result
  let err
  let formData
  formData = new FormData()
  formData.set('file', image)
  formData.set('tags', [`${project}`, `image`])
  formData.set('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  formData.set('api_key', CLOUDINARY_API_KEY)

  return axios
    .post(CLOUDINARY_UPLOAD_URL, formData, {
      headers: {'X-Requested-With': 'XMLHttpRequest'},
    })
    .then(
      res => {
        console.log(res)
        result = res.data.secure_url
        return result
      },
      err => {
        toast.error('Upload Failed!')
        err = err.message
        return err
      },
    )
}

function ImageDropZone({handleDrop}) {
  return (
    <Dropzone onDrop={handleDrop} accept="image/*" multiple maxSize={8000000}>
      {({getRootProps, getInputProps}) => (
        <label
          htmlFor="dropZone"
          css={[
            labelWrapper,
            css`
              border: 10px dashed ${colors.darkBlue};
              width: 87%;
              height: 200px;
              text-align: center;
              cursor: pointer;
              margin-bottom: 20px;
              margin-right: 0;
              align-self: flex-end;
            `,
          ]}
          {...getRootProps()}
        >
          <span
            css={[
              h1XL,
              css`
                color: ${colors.aliceLightBlue};
              `,
            ]}
          >
            Drop Image(s)
          </span>
          <input
            id="dropZone"
            type="file"
            name="projectLogo"
            css={[
              textArea,
              css`
                width: initial;
                margin: 0;
              `,
            ]}
            {...getInputProps()}
          />
        </label>
      )}
    </Dropzone>
  )
}

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}

const reducer = (state, {type, payload}) => {
  const {formData} = state
  const {oldImages, fetch} = payload
  switch (type) {
    case 'images':
      return {
        ...state,
        imagesFile: [...payload],
        status: 'idle',
        error: null,
      }
    case 'submit_formData':
      return {
        ...state,
        formData: {...payload},
        status: 'submitted',
        error: null,
      }

    case 'upload_images':
      const imagesUrl = []
      Promise.allSettled(
        fetch.map(url => uploadImage(url, formData.projectName)),
      ).then(results =>
        results.forEach(result => {
          toast.success('Images Uploaded')
          imagesUrl.push(result.value)
        }),
      )
      const projectLogo = oldImages ? [...oldImages, ...imagesUrl] : imagesUrl
      console.dir('projectLogo', projectLogo)
      return {
        ...state,
        formData: {...formData, projectLogo},
        status: 'images_uploaded',
        error: null,
      }

    case 'update_project':
      console.log(formData)
      const {error} = updateProject(payload)
      if (error) return {...state, error: error, status: 'rejected'}
      return {...state, error: null, status: 'idle'}

    case 'create_project':
      const {error: err} = createProject(payload)
      if (err) return {...state, error: error, status: 'rejected'}
      return {...state, error: null, status: 'idle'}

    default:
      return state
  }
}
export {
  uploadImage,
  ImageDropZone,
  useSafeDispatch,
  reducer,
  updateProject,
  deleteProject,
  createProject,
}
