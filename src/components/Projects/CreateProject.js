/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {Redirect} from 'react-router-dom'
import {toast} from 'react-toastify'
import {Image} from 'cloudinary-react'

import Layout from '../Layout'
import {
  btnStyle,
  colors,
  labelWrapper,
  mq,
  signWrapper,
  signWrapperInput,
  spinner,
  textArea,
} from '../Styles'

import {useAuth} from '../Utils/AuthProvider'
import Input from '../Utils/Input'
import {uploadImage, ImageDropZone, useSafeDispatch, reducer} from './utils'

// const imagesFile = []

function CreateProject({match}) {
  const {project, setProject} = useAuth()

  const [
    {
      status,
      formData,
      error,
      imagesFile,
      // err: {projectNameErr, projectLinkErr, descriptionErr},
    },
    unsafeDispatch,
  ] = React.useReducer(reducer, {
    status: 'idle',
    formData: {
      projectName: project ? project.projectName : '',
      projectLink: project ? project.projectLink : '',
      projectLogo: project ? project.projectLogo : '',
      description: project ? project.description : '',
    },
    error: null,
    imagesFile: [],
    // err: {
    //   projectNameErr: '',
    //   projectLinkErr: '',
    //   descriptionErr: '',
    // },
  })
  console.log(status)

  const dispatch = useSafeDispatch(unsafeDispatch)

  const [projectLinkErr, setProjectLinkErr] = React.useState('')
  const [descriptionErr, setDescriptionErr] = React.useState('')
  const [projectNameErr, setProjectNameErr] = React.useState('')

  React.useEffect(() => {
    if (status === 'submitted') {
      dispatch({
        type: 'upload_images',
        payload: {
          oldImages: project ? formData.projectLogo : null,
          fetch: imagesFile,
        },
      })
    }
    if (status === 'images_uploaded') {
      if (project) {
        dispatch({
          type: 'update_project',
          payload: {...formData, id: project.id},
        })
      } else {
        dispatch({
          type: 'create_project',
          payload: formData,
        })
      }
    }
    // return () => {
    //   setProject(null)
    // }
  }, [dispatch, formData, imagesFile, project, setProject, status])

  function handleDrop(acceptedFiles, rejectedFiles) {
    const imagesFile = []
    acceptedFiles.forEach((file, i) => {
      if (acceptedFiles[i].size < 8000000) {
        imagesFile.push(file)
      }
    })

    if (rejectedFiles && rejectedFiles.length > 0) {
      if (rejectedFiles[0].Size > 8000000) {
        toast.error('This File is too big')
      }
    }
    dispatch({
      type: 'images',
      payload: imagesFile,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const {projectName, projectLink, description} = e.target.elements
    if (status === 'idle') {
      dispatch({
        type: 'submit_formData',
        payload: {
          projectName: projectName.value,
          projectLink: projectLink.value,
          description: description.value,
        },
      })
    }
  }

  const {projectName, projectLink, description, projectLogo} = formData

  return (
    <Layout>
      <div className="CreateProject">
        <h1>{project ? `Edit` : `Create`} Project</h1>
        <div
          css={css`
            display: grid;
            grid-template: 1fr/1fr 2fr;
            width: 100%;
            place-items: center;
            ${mq.s} {
              grid-template: none;
            }
          `}
        >
          <div>
            {projectLogo &&
              projectLogo?.map(link => (
                <Image alt="" crop="lpad" width={200} key={link} src={link} />
              ))}
          </div>
          {/* <form id="createProject" css={signWrapper} > */}
          <form id="createProject" css={signWrapper} onSubmit={handleSubmit}>
            <ImageDropZone handleDrop={handleDrop} />
            <Input
              // onChange={e => setProjectName(e.target.value)}
              onBlur={e =>
                e.target.validity.valid
                  ? setProjectNameErr('inherit')
                  : setProjectNameErr(colors.burgundyRed)
              }
              css={[
                signWrapperInput,
                css`
                  border-color: ${projectNameErr};
                `,
              ]}
              id="projectName"
              name="projectName"
              value={projectName}
              placeholder="Name"
              required
              minLength={3}
              maxLength={15}
            />
            <Input
              type="url"
              css={[
                signWrapperInput,
                css`
                  border-color: ${projectLinkErr};
                `,
              ]}
              required
              value={projectLink}
              placeholder="Project Link"
              // onChange={e => setProjectLink(e.target.value)}
              onBlur={e =>
                e.target.validity.valid
                  ? setProjectLinkErr('inherit')
                  : setProjectLinkErr(colors.burgundyRed)
              }
              name="projectLink"
              id="projectLink"
            />
            <label htmlFor="description" css={labelWrapper}>
              <textarea
                css={[
                  textArea,
                  css`
                    margin: 0;
                    border-color: ${descriptionErr};
                  `,
                ]}
                placeholder="Project Description"
                name="description"
                value={description}
                minLength={10}
                // onChange={e => setDescription(e.target.value)}
                onBlur={e =>
                  e.target.validity.valid
                    ? setDescriptionErr('inherit')
                    : setDescriptionErr(colors.burgundyRed)
                }
                id="description"
                required
              />
            </label>
            {status !== 'idle' ? (
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
            )}
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default CreateProject
