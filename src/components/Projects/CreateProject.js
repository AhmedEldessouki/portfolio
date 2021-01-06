/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {toast} from 'react-toastify'
import {ErrorBoundary} from 'react-error-boundary'

import {useAuth} from '../../context/AuthProvider'
import {ErrorMessageFallback} from '../Utils/util'
import Layout from '../Layout'
import {colors, h1XL, labelWrapper, mq, signWrapper, textArea} from '../Styles'
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
  TagsCheckBox,
} from './utils'

function CreateProjectX() {
  const {project, setProject} = useAuth()

  const [
    {status, formData, imagesFile, imagesDisplay},
    unsafeDispatch,
  ] = React.useReducer(reducer, {
    status: 'idle',
    formData: {
      name: project ? project.name : '',
      link: project ? project.link : '',
      repoLink: project ? project.repoLink : '',
      projectLogo: project ? [...project.projectLogo] : [],
      tag: project ? project.tag ?? [] : [],
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
    })
    if (rejectedFiles && rejectedFiles.length > 0) {
      if (rejectedFiles[0].Size > 8000000) {
        toast.error('This Img is too big')
      }
    }
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
          return uploadImage(file, formData.name)
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
          dispatch({type: 'images_uploaded'})
        }),
    [dispatch, formData.name, imagesFile],
  )

  async function useSubmitImages() {
    if (imagesFile.length > -1) {
      await gradualUpload()
      toast.success('Images Uploaded')
      return
    }
    dispatch({type: 'images_uploaded'})
  }

  function useHandleSubmit(e) {
    e.preventDefault()

    const {name, link, repoLink, description} = e.target.elements
    dispatch({
      type: 'submit_formData',
      payload: {
        name: name.value,
        link: link.value,
        repoLink: repoLink.value,
        description: description.value,
      },
    })
    useSubmitImages()
    e.currentTarget.reset()
  }

  function handleDescription(e) {
    dispatch({type: 'submit_description', payload: e.target.value})
  }
  const {name, link, repoLink, description, projectLogo, tag} = formData
  return (
    <Layout>
      <div>
        <h1 css={h1XL}>{project ? `Edit` : `Create`} Project</h1>
        <div
          css={css`
            display: flex;
            place-content: space-around;
            flex-wrap: wrap-reverse;
            ${mq.s} {
              place-content: center;
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
          <ErrorBoundary FallbackComponent={ErrorMessageFallback}>
            <form css={signWrapper} onSubmit={useHandleSubmit}>
              <ImageDropZone handleDrop={handleDrop} />
              <ProjInput
                name="name"
                project={name}
                placeholder="Name"
                required
                minLength={3}
                maxLength={15}
                cleanColor={status === 'pending'}
              />
              <ProjInput
                type="url"
                required
                project={link}
                placeholder="Project Link"
                name="link"
                cleanColor={status === 'pending'}
              />
              <ProjInput
                type="url"
                required
                project={repoLink}
                placeholder="Repo Link"
                name="repoLink"
                cleanColor={status === 'pending'}
              />
              <TagsCheckBox
                handleClick={e => {
                  if (e.target.checked) {
                    dispatch({
                      type: 'add_tag',
                      payload: e.target.id,
                    })
                  } else {
                    dispatch({
                      type: 'remove_tag',
                      payload: e.target.id,
                    })
                  }
                }}
                projectTags={project ? tag : undefined}
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
                  id="description"
                  aria-label="description"
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
              <Button status={status} project={project} />
            </form>
          </ErrorBoundary>
        </div>
      </div>
    </Layout>
  )
}

const CreateProject = React.memo(CreateProjectX)

export default CreateProject
