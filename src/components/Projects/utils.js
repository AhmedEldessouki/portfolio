/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import * as React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import Dropzone from 'react-dropzone'
import {Image} from 'cloudinary-react'

// import {cloudinaryPRESET, cloudinaryURL, cloudinaryApiKey} from '../../config'
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../../Config/CloudInary'
import {btnStyle, colors, h1XL, mq, spinner, textArea} from '../Styles'
import {db} from '../Utils/firebase'
import Input from '../Utils/Input'
import PopUp from '../Utils/PopUp/PopUp'
import {useQuery} from 'react-query'
import {useClientFetch} from '../../utils/apis'

function createNewProject(project) {
  db.collection('projects')
    .add({
      ...project,
      date: new Date(),
    })
    .then(() => {
      toast.success(`Project "${project.name}" Created`)
    })
    .catch(err => {
      toast.error(`Project Creation Failed ${err.message}`)
      throw err.message
    })
}

function updateProject(project) {
  const {id, name} = project
  db.collection('projects')
    .doc(`${id}`)
    .update({
      ...project,
      updatedOn: new Date(),
    })
    .then(() => {
      toast.success(`Project "${name}" Updated`)
    })
    .catch(err => {
      toast.error(`Project Didn't Update ${err.message}`)
      throw err.message
    })
}

function deleteProject(project) {
  db.collection('projects')
    .doc(`${project.id}`)
    .delete()
    .then(() => {
      toast.success(`Project "${project.name}" deleted`)
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
  formData.set('upload_preset', `${CLOUDINARY_UPLOAD_PRESET}`)
  formData.set('api_key', `${CLOUDINARY_API_KEY}`)

  return axios.post(`${CLOUDINARY_UPLOAD_URL}`, formData).then(
    res => {
      return res.data.secure_url
    },
    err => {
      toast.error(`Upload of ${image.name}Failed!`)
      throw new Error(err.message)
    },
  )
}

function ImageDropZone({handleDrop}) {
  return (
    <Dropzone onDrop={handleDrop} accept="image/*" multiple maxSize={8000000}>
      {({getRootProps, getInputProps}) => (
        <label
          htmlFor="dropZone"
          css={css`
            display: flex;
            place-items: center;
            place-content: center;
            border: 10px dashed ${colors.darkBlue};
            width: 95%;
            height: 200px;
            text-align: center;
            cursor: pointer;
            margin-bottom: 20px;
            padding: 0;
            margin-right: 0;
          `}
          {...getRootProps()}
        >
          <span
            css={[
              h1XL,
              css`
                padding: 0;
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
          ? [...imagesDisplay, ...payload.src]
          : [...payload.src],
        status: 'idle',
        error: null,
      }
    case 'remove_image':
      const {array, index} = payload
      if (array === 'oldImages') formData.projectLogo.splice(index, 1)
      if (array === 'imagesDisplay') imagesDisplay.splice(index, 1)
      return {...state}
    case 'submit_formData':
      formData.name = payload.name
      formData.link = payload.link
      formData.description = payload.description
      return {
        ...state,
        status: 'submitted',
        error: null,
      }
    case 'submit_description':
      return {
        ...state,
        formData: {...formData, description: payload},
      }
    case 'add_tag':
      formData.tag.push(payload)
      return {
        ...state,
      }
    case 'remove_tag':
      const i = formData.tag.indexOf(payload)
      formData.tag.splice(i, 1)
      return {
        ...state,
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

    case 'clean_up':
      formData.name = ''
      formData.link = ''
      formData.description = ''
      formData.projectLogo = []
      formData.tags = []
      imagesFile.length = 0
      imagesDisplay.length = 0
      return {
        ...state,
        status: 'idle',
        error: null,
      }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

function Button({status, project}) {
  return status !== 'idle' ? (
    <div
      css={css`
        width: 100%;
        margin-top: 43px;
      `}
    >
      <div css={spinner} />
    </div>
  ) : (
    <button type="submit" css={btnStyle} disabled={status !== 'idle'}>
      {project ? 'Edit' : 'Create'} Project
    </button>
  )
}

function DisplayingImages({imagesDisplay, oldImages, handleClick}) {
  const imgWrap = css`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    overflow: auto hidden;
    background: ${colors.kindaDarkBlue};
    height: 199px;
    padding-left: 22px;
  `
  const xyz = css`
    background: ${colors.darkBlue};
    overflow: hidden;
    padding: 0 31px 43px;
    width: 36vw;
    ${mq.phoneLarge} {
      width: 76vw;
    }
  `
  const hStyle = css`
    margin: 3px 0px 3px -15px;
    background: ${colors.independenceBlue};
    padding: 5px;
  `
  const div = css`
    display: flex;
    place-items: flex-start;
    padding-right: 28px;
    :hover {
      background: ${colors.darkBlue};
    }
  `
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
      `}
    >
      <div css={xyz}>
        <h2 css={hStyle}>New Images</h2>
        <div css={imgWrap}>
          {imagesDisplay &&
            imagesDisplay.map((file, i) => (
              <div key={file} css={div}>
                <PopUp
                  title="Image"
                  fn={() => handleClick('imagesDisplay', i)}
                />
                <Image alt="" crop="lpad" width={100} src={file} />
              </div>
            ))}
        </div>
      </div>
      {oldImages ? (
        <div css={xyz}>
          <h2 css={hStyle}>Old Images</h2>
          <div css={imgWrap}>
            {oldImages &&
              oldImages.map((file, i) => (
                <div key={file} css={div}>
                  <PopUp title="Image" fn={() => handleClick('oldImages', i)} />
                  <Image alt="" crop="lpad" width={100} src={file} />
                </div>
              ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function TagsCheckBox({handleClick, projectTag = [], ...props}) {
  const TagsData = useClientFetch({collection: 'tags'})

  return (
    <div
      css={css`
        display: flex;
        place-content: space-evenly;
        width: 94%;
        margin: 10px 0;
        border: 10px dashed ${colors.darkBlue};
        padding: 9px 0;
        place-items: center;
      `}
    >
      {TagsData?.map(tag => {
        return (
          <label
            key={tag.id}
            css={css`
              display: grid;
              grid-gap: 4px;
              place-items: center;
              grid-auto-flow: column;
              & input {
              }
            `}
          >
            <input
              name="tags"
              id={tag.url}
              color={colors.independenceBlue}
              type="checkbox"
              alt={tag.name}
              onChange={e => {
                handleClick(e)
              }}
              checked={projectTag.find(item => item.trim() === tag.url.trim())}
              {...props}
            />
            <img
              css={css`
                margin: 0;
              `}
              src={tag.url}
              alt={tag.name}
              width="30"
            />
          </label>
        )
      })}
    </div>
  )
}

function ProjInputX({project, ...props}) {
  const [state, setState] = React.useState(project)

  if (project)
    return (
      <Input
        value={state}
        onChange={e => setState(e.target.value)}
        {...props}
      />
    )
  return <Input {...props} />
}

const ProjInput = React.memo(ProjInputX)

export {
  ProjInput,
  uploadImage,
  ImageDropZone,
  useSafeDispatch,
  reducer,
  updateProject,
  deleteProject,
  createNewProject,
  Button,
  DisplayingImages,
  TagsCheckBox,
}
