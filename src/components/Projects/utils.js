/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import * as React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../../Config/CloudInary'
import {btnStyle, colors, h1XL, mq, spinner, textArea} from '../Styles'
import {db} from '../Utils/firebase'
import Input from '../Utils/Input'
import PopUp from '../Utils/PopUp/PopUp'
import {useClientFetch} from '../Utils/apis'

async function createNewProject(project) {
  await db
    .collection('projects')
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

async function updateProject(project) {
  const {id, name} = project
  await db
    .collection('projects')
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

async function uploadImage(image, project) {
  let formData
  formData = new FormData()
  formData.set('file', image)
  formData.set('tags', [`${project}`, `image`])
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

function ImageDropZone({getRootProps, getInputProps, color = colors.darkBlue}) {
  return (
    <React.Fragment>
      <div
        css={css`
          display: flex;
          place-items: center;
          place-content: center;
          border: 10px dashed ${color};
          width: 95%;
          height: 200px;
          text-align: center;
          cursor: pointer;
          margin-bottom: 20px;
          padding: 0;
          margin-right: 0;
          :hover,
          :focus {
            border-color: ${colors.blueFont};
          }
        `}
        {...getRootProps()}
      >
        <em
          css={[
            h1XL,
            css`
              padding: 0;
              color: ${colors.aliceLightBlue};
            `,
          ]}
        >
          Image(s) Drop Zone
        </em>
        <input
          id="dropZone"
          type="file"
          name="projectLogo"
          aria-label="ImageDropZone"
          css={[
            textArea,
            css`
              width: initial;
              margin: 0;
            `,
          ]}
          {...getInputProps()}
        />
      </div>
    </React.Fragment>
  )
}

const createProjectFormReducer = (state, {type, payload}) => {
  const {formData, acceptedImages, rejectedImages} = state
  switch (type) {
    case 'error':
      return {...state, error: {...payload[0]}}

    case 'accepted_images':
      if (acceptedImages.length > 9)
        return {...state, error: {code: 'too-many-files'}}
      return {
        ...state,
        acceptedImages: acceptedImages
          ? [...acceptedImages, ...payload]
          : [...payload],
        status: 'idle',
        error: null,
      }
    case 'rejected_images':
      return {
        ...state,
        rejectedImages: rejectedImages
          ? [...rejectedImages, ...payload]
          : [...payload],
        status: 'idle',
      }
    case 'remove_oldImages':
      formData.projectLogo.splice(payload, 1)
      return {...state}
    case 'remove_rejectedImages':
      rejectedImages.splice(payload, 1)
      return {...state}
    case 'remove_acceptedImages':
      acceptedImages.splice(payload, 1)
      return {...state}

    case 'submit_formData':
      formData.name = payload.name
      formData.link = payload.link
      formData.repoLink = payload.repoLink
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
      return {
        ...state,
        formData: {
          name: '',
          link: '',
          repoLink: '',
          description: '',
          projectLogo: [],
          tags: [],
        },
        acceptedImages: [],
        rejectedImages: [],
        status: 'idle',
        error: null,
      }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

function ButtonWithSpinner({status, project}) {
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
    <button
      type="submit"
      css={[btnStyle, {fontSize: '126%'}]}
      disabled={status !== 'idle'}
    >
      {project ? 'Edit' : 'Create'} Project
    </button>
  )
}

function DisplayingImages({
  acceptedImages,
  rejectedImages,
  oldImages,
  handleClick,
}) {
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
      background: ${colors.backgroundShade};
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
      {acceptedImages?.length > 0 && (
        <div css={[xyz]}>
          <h2 css={[hStyle, {background: '#11826B'}]}>Accepted Images</h2>
          <div css={imgWrap}>
            {acceptedImages?.map(({preview}, i) => (
              <div key={preview} css={div}>
                <PopUp
                  title="Image"
                  onClick={() => handleClick('remove_acceptedImages', i)}
                />
                <img alt="" width={100} src={preview} />
              </div>
            ))}
          </div>
        </div>
      )}
      {rejectedImages?.length > 0 && (
        <div css={[xyz]}>
          <h2 css={[hStyle, {background: colors.burgundyRed}]}>
            Rejected Images
          </h2>
          <div css={imgWrap}>
            {rejectedImages?.map(({preview}, i) => (
              <div key={preview} css={div}>
                <PopUp
                  title="Image"
                  onClick={() => handleClick('remove_rejectedImages', i)}
                />
                <img alt="" width={100} src={preview} />
              </div>
            ))}
          </div>
        </div>
      )}
      {oldImages?.length > 0 && (
        <div css={xyz}>
          <h2 css={hStyle}>current Images</h2>
          <div css={imgWrap}>
            {oldImages?.map((file, i) => (
              <div key={file} css={div}>
                <PopUp
                  title="Image"
                  onClick={() => handleClick('remove_oldImages', i)}
                />
                <img alt="" width={100} src={file} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function TagsCheckBox({handleClick, projectTags, ...props}) {
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
        flex-wrap: wrap;
      `}
    >
      {TagsData?.map((tag, i) => {
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
            htmlFor={tag.name}
          >
            <input
              name="tags"
              aria-label={`tag-${tag.name}`}
              id={tag.url}
              data-testid={`tag-${i}`}
              color={colors.independenceBlue}
              type="checkbox"
              alt={tag.name}
              onChange={e => {
                handleClick(e)
              }}
              checked={projectTags?.find(
                item => item.trim() === tag.url.trim(),
              )}
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
  createProjectFormReducer,
  updateProject,
  deleteProject,
  createNewProject,
  ButtonWithSpinner,
  DisplayingImages,
  TagsCheckBox,
}
