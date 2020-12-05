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

async function createNewProject(project, profile) {
  console.log(' created', project)

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
    })
    .catch(err => {
      toast.error(`Project Creation Failed ${err.message}`)
      throw err
    })
}

function updateProject(project) {
  console.log(' Updated', project)
  const {id, projectName, projectLink, projectLogo, description} = project
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
    })
    .catch(err => {
      toast.error(`Project Didn't Update ${err.message}`)
      throw err
    })
}

async function deleteProject(project) {
  await db
    .collection('projects')
    .doc(`${project.id}`)
    .delete()
    .then(() => {
      toast.success(`Project "${project.projectName}" deleted`)
    })
    .catch(err => {
      toast.error(`Project Deletion Failed ${err.message}`)
      throw err
    })
}

function uploadImage(image, project) {
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
        return res.data.secure_url
      },
      err => {
        toast.error(`Upload of ${image.name}Failed!`)
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
  const {formData, imagesFile, imagesDisplay} = state
  switch (type) {
    case 'images':
      return {
        ...state,
        imagesFile: imagesFile
          ? [...imagesFile, ...payload.file]
          : [...payload.file],
        imagesDisplay: imagesDisplay
          ? [...imagesDisplay, ...payload.url]
          : [...payload.url],
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

    case 'idle':
      return {...state, status: 'idle'}
    case 'next':
      return {...state, status: 'next'}
    case 'images_uploaded':
      return {...state, status: 'images_uploaded'}
    case 'next_add':
      formData.projectLogo.push(payload)
      return {
        ...state,
        status: 'next_add',
      }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
export {
  uploadImage,
  ImageDropZone,
  useSafeDispatch,
  reducer,
  updateProject,
  deleteProject,
  createNewProject,
}
