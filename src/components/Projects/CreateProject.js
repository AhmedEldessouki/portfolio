/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {toast} from 'react-toastify'
import {ErrorBoundary} from 'react-error-boundary'

import Layout from '../Layout'
import {colors, labelWrapper, mq, signWrapper, textArea} from '../Styles'

import {useAuth} from '../Utils/AuthProvider'
import {
  uploadImage,
  ImageDropZone,
  useSafeDispatch,
  reducer,
  createNewProject,
  updateProject,
  Button,
  DisplayingImages,
  ProjInput,
} from './utils'
import {ErrorMessage} from '../Utils/util'

function CreateProjectX() {
  const {project, setProject} = useAuth()

  const [
    {status, formData, imagesFile, imagesDisplay},
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
  })

  const dispatch = useSafeDispatch(unsafeDispatch)

  const [descriptionErr, setDescriptionErr] = React.useState('')

  if (status === 'images_uploaded') {
    if (project) {
      updateProject({...formData, id: project.id})
    }
    if (!project) {
      createNewProject(formData)
    }
    dispatch({type: 'idle'})
  }

  React.useEffect(() => {
    return () => {
      setProject(null)
      dispatch({type: 'clean_up'})
    }
  }, [dispatch, setProject])

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
      payload: {file: imagesFile, src: imagesDisplay},
    })
  }

  const gradualUpload = React.useCallback(
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
    await gradualUpload()
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
      },
    })
    useSubmitImages()
    e.currentTarget.reset()
  }

  function handleDescription(e) {
    dispatch({type: 'submit_description', payload: e.target.value})
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
            oldImages={project ? projectLogo : null}
            handleClick={(array, index) =>
              dispatch({type: 'remove_image', payload: {array, index}})
            }
          />
          <form css={signWrapper} onSubmit={useHandleSubmit}>
            <ImageDropZone handleDrop={handleDrop} />
            <ProjInput
              name="projectName"
              project={projectName}
              placeholder="Name"
              required
              minLength={3}
              maxLength={15}
              cleanColor={status === 'pending'}
            />
            <ProjInput
              type="url"
              required
              project={projectLink}
              placeholder="Project Link"
              name="projectLink"
              cleanColor={status === 'pending'}
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
                value={project ? description : void 0}
                minLength={10}
                onChange={project ? e => handleDescription(e) : void 0}
                onBlur={e => {
                  e.target.validity.valid
                    ? setDescriptionErr(colors.lightGreen)
                    : setDescriptionErr(colors.burgundyRed)
                  handleDescription(e)
                }}
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

function FallBackComp({error}) {
  return <ErrorMessage error={error} />
}

const CreateProjectY = React.memo(CreateProjectX)
function CreateProject() {
  return (
    <ErrorBoundary fallback={<FallBackComp />}>
      <CreateProjectY />
    </ErrorBoundary>
  )
}
export default CreateProject
