/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {toast} from 'react-toastify'
import {ErrorBoundary} from 'react-error-boundary'
import {useDropzone} from 'react-dropzone'

import {useAuth} from '../../context/AuthProvider'
import {ErrorMessageFallback, useSafeDispatch} from '../Utils/util'
import Layout from '../Layout'
import {
  colors,
  h1XL,
  labelWrapper,
  mq,
  signWrapper,
  textArea,
  warning,
} from '../Styles'
import {
  uploadImage,
  ImageDropZone,
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
    {status, formData, acceptedImages, rejectedImages, error},
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
    acceptedImages: [],
    rejectedImages: [],
  })
  const dispatch = useSafeDispatch(unsafeDispatch)

  const [descriptionErr, setDescriptionErr] = React.useState('')
  const [isDragActive, setIsDragActive] = React.useState(false)

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    maxFiles: 10,
    maxSize: 8000000,
    onDropAccepted: acceptedFiles => {
      setIsDragActive(!isDragActive)

      const newArr = acceptedFiles.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      })
      dispatch({
        type: 'accepted_images',
        payload: newArr,
      })
    },
    onDropRejected: async rejectedFiles => {
      setIsDragActive(!isDragActive)

      await dispatch({type: 'error', payload: {...rejectedFiles[0].errors}})
      const newArr = rejectedFiles.map(({file}) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      })
      dispatch({
        type: 'rejected_images',
        payload: newArr,
      })
    },
    onDragEnter: () => {
      setIsDragActive(!isDragActive)
    },
    onDragLeave: () => {
      setIsDragActive(!isDragActive)
    },
  })

  React.useEffect(() => {
    return () => {
      setProject(null)
      dispatch({type: 'clean_up'})
    }
  }, [dispatch, setProject])

  const gradualUpload = React.useCallback(
    async (imagesArray, name) =>
      await Promise.allSettled(
        imagesArray.map(async file => {
          dispatch({type: 'next'})
          return await uploadImage(file, name)
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
    [dispatch],
  )

  async function useSubmitImages(uploadImagesArr = [], name) {
    if (uploadImagesArr.length >= 0) {
      await gradualUpload(uploadImagesArr, name)
      toast.success('Images Uploaded')
      return dispatch({type: 'images_uploaded'})
    }
  }

  async function useHandleSubmit(e) {
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
    await useSubmitImages(acceptedImages)
    if (project) {
      await updateProject({...formData, id: project.id})
      setProject(null)
    }
    if (!project) {
      await createNewProject(formData)
    }

    window.location.assign('/dashboard')
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
          css={[
            {
              display: 'flex',
              placeContent:
                acceptedImages.length ||
                rejectedImages.length ||
                project?.projectLogo.length >= 0
                  ? 'space-around'
                  : 'center',
              flexWrap: 'wrap-reverse',
              transition: 'all 0.3s ease-in-out',
            },
            css`
              ${mq.phoneLarge} {
                place-content: center;
              }
            `,
          ]}
        >
          <DisplayingImages
            acceptedImages={acceptedImages}
            rejectedImages={rejectedImages}
            oldImages={project ? projectLogo : undefined}
            handleClick={(type, index) => dispatch({type, payload: index})}
          />
          <ErrorBoundary
            FallbackComponent={ErrorMessageFallback}
            onReset={() => dispatch({type: 'clean_up'})}
          >
            <form css={signWrapper} onSubmit={useHandleSubmit}>
              <ImageDropZone
                color={isDragActive ? colors.blueFont : colors.darkBlue}
                getRootProps={getRootProps}
                getInputProps={getInputProps}
              />
              {error?.code === 'too-many-files' && (
                <span css={warning} role="alert">
                  Please Upload 10 files or less
                </span>
              )}
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
              <label
                htmlFor="description"
                style={{marginTop: '10px'}}
                css={labelWrapper}
              >
                <textarea
                  css={[textArea, {margin: 0, borderColor: descriptionErr}]}
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
