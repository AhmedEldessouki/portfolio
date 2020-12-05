/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React, {cloneElement} from 'react'
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
import {
  uploadImage,
  ImageDropZone,
  useSafeDispatch,
  reducer,
  createNewProject,
  updateProject,
} from './utils'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorMessage} from '../Utils/util'

function FallBackComp({error}) {
  return <ErrorMessage error={error} />
}

function CreateProjectX({match}) {
  const {project, setProject} = useAuth()
  console.dir('createProject-project', project)

  const [
    {
      status,
      formData,
      error,
      imagesFile,
      imagesDisplay,
      // err: {projectNameErr, projectLinkErr, descriptionErr},
    },
    unsafeDispatch,
  ] = React.useReducer(reducer, {
    status: 'idle',
    formData: {
      projectName: project ? project.projectName : '',
      projectLink: project ? project.projectLink : '',
      projectLogo: project ? [...project.projectLogo] : [],
      description: project ? project.description : '',
    },
    error: null,
    imagesFile: [],
    imagesDisplay: [],
    // err: {
    //   projectNameErr: '',
    //   projectLinkErr: '',
    //   descriptionErr: '',
    // },
  })
  console.log('createProject-status', status)
  console.log('createProject-status', Object.is(project, formData))

  console.dir('createProject-formData', formData)

  const dispatch = useSafeDispatch(unsafeDispatch)

  const [projectLinkErr, setProjectLinkErr] = React.useState('')
  const [descriptionErr, setDescriptionErr] = React.useState('')
  const [projectNameErr, setProjectNameErr] = React.useState('')

  React.useEffect(() => {
    console.log(`Rendered`)
    return () => {
      setProject(null)
    }
  }, [setProject])

  function handleDrop(acceptedFiles, rejectedFiles) {
    const imagesFile = []
    const imagesDisplay = []
    acceptedFiles.forEach((file, i) => {
      if (acceptedFiles[i].size < 8000000) {
        imagesFile.push(file)
        imagesDisplay.push(URL.createObjectURL(file))
      }

      if (rejectedFiles && rejectedFiles.length > 0) {
        if (rejectedFiles[0].Size > 8000000) {
          toast.error('This File is too big')
        }
      }
    })
    dispatch({
      type: 'images',
      payload: {file: imagesFile, url: imagesDisplay},
    })
    console.log(imagesFile)
  }

  const bamBam = React.useCallback(
    () =>
      Promise.allSettled(
        imagesFile.map(file => {
          dispatch({type: 'next'})
          return uploadImage(file, formData.projectName)
        }),
      )
        .then(results =>
          results.forEach(result => {
            dispatch({type: 'next_add', payload: result.value})
            return result.value
          }),
        )
        .then(() => {
          toast.success('Images Uploaded')
          dispatch({type: 'images_uploaded'})
        }),
    [dispatch, formData.projectName, imagesFile],
  )
  async function useSubmitImages() {
    console.dir('Async before run')
    console.log('submit images', imagesFile)

    await bamBam()

    console.dir(' Async after run', projectLogo)

    if (project !== formData) {
      updateProject({...formData, id: project.id})
    }
    if (!project) {
      createNewProject(formData)
    }
    dispatch({type: 'idle'})
  }

  function useHandleSubmit(e) {
    e.preventDefault()

    const {projectName, projectLink, description} = e.target.elements
    dispatch({
      type: 'submit_formData',
      payload: {
        projectName: projectName.value,
        projectLink: projectLink.value,
        description: description.value,
        projectLogo,
      },
    })
    useSubmitImages()
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
            {imagesDisplay &&
              imagesDisplay.map((file, i) => (
                <div key={file}>
                  <Image alt="" crop="lpad" width={200} src={file} />
                </div>
              ))}
          </div>
          {/* <form id="createProject" css={signWrapper} > */}
          <form id="createProject" css={signWrapper} onSubmit={useHandleSubmit}>
            <ImageDropZone handleDrop={handleDrop} />
            <Input
              onChange={e => console.log(e.target.value)}
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
              onChange={e => console.log(e.target.value)}
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
                onChange={e => console.log(e.target.value)}
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

function CreateProject() {
  return (
    <ErrorBoundary fallback={<FallBackComp />}>
      <CreateProjectX />
    </ErrorBoundary>
  )
}

export default CreateProject
