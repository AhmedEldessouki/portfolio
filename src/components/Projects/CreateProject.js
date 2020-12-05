/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {Redirect} from 'react-router-dom'
import {toast} from 'react-toastify'

import Layout from '../Layout'
import {
  colors,
  labelWrapper,
  mq,
  signWrapper,
  signWrapperInput,
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
  Button,
  DisplayingImages,
} from './utils'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorMessage} from '../Utils/util'

function FallBackComp({error}) {
  return <ErrorMessage error={error} />
}

function CreateProjectX({match}) {
  const {project, setProject} = useAuth()

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
            if (result.status === 'fulfilled') {
              dispatch({type: 'next_add', payload: result.value})
              return result.value
            }
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
    await bamBam()

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
      <div>
        <h1>{project ? `Edit` : `Create`} Project</h1>
        <div
          css={css`
            display: flex;
            width: 98vw;
            place-content: space-around;
            flex-wrap: wrap-reverse;
            ${mq.s} {
              place-content: center;
              grid-template: none;
            }
          `}
        >
          <DisplayingImages
            imagesDisplay={imagesDisplay}
            oldImages={project ? project.projectLogo : null}
          />
          <form css={signWrapper} onSubmit={useHandleSubmit}>
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
                required
              />
            </label>
            <Button status={status} project={project ? true : false} />
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
