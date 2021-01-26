/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {toast} from 'react-toastify'
import {ErrorBoundary} from 'react-error-boundary'
import {useDropzone} from 'react-dropzone'
import {Redirect} from 'react-router-dom'

import {useAuth} from '../../context/AuthProvider'
import {ErrorMessageFallback} from '../Utils/util'
import {useSafeDispatch} from '../Utils/hooks'
import Layout from '../Layout'
import {
  colors,
  h1XL,
  labelWrapper,
  mq,
  formWrapper,
  textArea,
  warning,
} from '../Styles'
import {
  uploadImage,
  projectFormReducer,
  createNewProject,
  updateProject,
} from './helpers/functions'
import {
  ImageDropZone,
  ButtonWithSpinner,
  DisplayingImages,
  ProjInput,
  TagsCheckBox,
} from './helpers/components'
import {deepEqual} from '../Utils/helpers'

function CreateProjectX() {
  const {selectedProject, setProject} = useAuth()

  const [state, unsafeDispatch] = React.useReducer(projectFormReducer, {
    status: 'idle',
    // Passing Selected Project Data to the Form
    enteredProjectData: {
      name: selectedProject?.name ?? '',
      link: selectedProject?.link ?? '',
      repoLink: selectedProject?.repoLink ?? '',
      projectLogo: selectedProject ? [...selectedProject.projectLogo] : [],
      tag: selectedProject ? selectedProject.tag ?? [] : [],
      description: selectedProject?.description ?? '',
    },
    error: null,
    acceptedImages: [],
    rejectedImages: [],
  })
  const dispatch = useSafeDispatch(unsafeDispatch)
  // const dispatch = useSafeDispatch<Pick<ReducerAction, "type">,Pick<ReducerAction, "payload">|undefined>(unsafeDispatch)
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
    onDropRejected: rejectedFiles => {
      setIsDragActive(!isDragActive)

      dispatch({type: 'error', payload: {...rejectedFiles[0].errors[0]}})
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
    if (selectedProject) {
      window.scroll(0, 0)
    }
    return () => {
      setProject(undefined)
      dispatch({type: 'clean_up'})
    }
  }, [dispatch, selectedProject, setProject])

  const gradualUpload = React.useCallback(
    async (imagesArray: Array<{preview: string & File}>, name: string) =>
      await Promise.allSettled(
        imagesArray.map(async (file: any) => {
          dispatch({type: 'next'})
          return await uploadImage(file, name)
        }),
      )
        .then(results =>
          results.forEach((result: any) => {
            if (result.status === 'fulfilled') {
              toast.success('Images Uploaded')
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

  async function useSubmitImages(
    uploadImagesArr: Array<{preview: string & File}>,
    name: string,
  ) {
    if (uploadImagesArr.length >= 0) {
      await gradualUpload(uploadImagesArr, name)
      return dispatch({type: 'images_uploaded'})
    }
  }
  const {
    status,
    enteredProjectData,
    error,
    acceptedImages,
    rejectedImages,
  } = state
  async function useHandleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    const {name, link, repoLink, description} = e.target as typeof e.target & {
      name: {value: string}
      link: {value: string}
      repoLink: {value: string}
      description: {value: string}
    }
    dispatch({
      type: 'submit_newData',
      payload: {
        name: name.value,
        link: link.value,
        repoLink: repoLink.value,
        description: description.value,
      },
    })
    await useSubmitImages(acceptedImages, enteredProjectData.name)
    if (selectedProject) {
      const hasChanged = !deepEqual(selectedProject, {
        ...enteredProjectData,
        id: selectedProject.id,
      })

      if (hasChanged) {
        console.log(`[hasChanged]: ${hasChanged}`)
        await updateProject({...enteredProjectData, id: selectedProject.id})
        setProject(undefined)
      } else {
        toast.warn(`No Update Found in ${selectedProjectName}`, {
          style: {color: 'black'},
        })
        dispatch({type: 'idle'})
        console.log(`[hasChanged]: ${hasChanged}`)
      }
    }
    if (!selectedProject) {
      await createNewProject(enteredProjectData)
    }

    new Redirect({to: '/dashboard'})
  }

  function handleDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch({type: 'submit_description', payload: e.target.value})
  }

  const {
    name: selectedProjectName,
    link: selectedProjectLink,
    repoLink: selectedProjectRepoLink,
    description: selectedProjectDescription,
    projectLogo: selectedProjectImages,
    tag: selectedProjectTags,
  } = enteredProjectData

  const isPending = status === 'images_uploaded'

  return (
    <Layout>
      <section>
        <h1 css={h1XL}>{selectedProject ? `Edit` : `Create`} Project</h1>
        <section
          css={[
            {
              display: 'flex',
              placeContent:
                acceptedImages.length ||
                rejectedImages.length ||
                (selectedProject && selectedProject?.projectLogo.length >= 0)
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
            oldImages={selectedProjectImages}
            handleClick={(
              type:
                | 'remove_acceptedImages'
                | 'remove_oldImages'
                | 'remove_rejectedImages',
              index,
            ) => dispatch({type, payload: index})}
          />
          <ErrorBoundary
            FallbackComponent={ErrorMessageFallback}
            onReset={() => dispatch({type: 'clean_up'})}
          >
            <form css={formWrapper} onSubmit={useHandleSubmit}>
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
                editableValue={selectedProjectName ?? undefined}
                placeholder="Name"
                required
                minLength={3}
                maxLength={15}
                cleanColor={isPending}
              />
              <ProjInput
                type="url"
                required
                editableValue={selectedProjectLink ?? undefined}
                placeholder="Project Link"
                name="link"
                cleanColor={isPending}
              />
              <ProjInput
                type="url"
                required
                editableValue={selectedProjectRepoLink ?? undefined}
                placeholder="Repo Link"
                name="repoLink"
                cleanColor={isPending}
              />
              <TagsCheckBox
                handleClick={(e: any) => {
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
                projectTags={selectedProjectTags}
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
                  value={
                    selectedProject ? selectedProjectDescription : undefined
                  }
                  minLength={10}
                  onChange={
                    selectedProject ? e => handleDescription(e) : void 0
                  }
                  onBlur={e => {
                    e.target.validity.valid
                      ? setDescriptionErr(colors.lightGreen)
                      : setDescriptionErr(colors.burgundyRed)
                    handleDescription(e)
                  }}
                  required
                />
              </label>
              <ButtonWithSpinner
                isPending={status !== 'idle'}
                isProject={selectedProject ? true : false}
              />
            </form>
          </ErrorBoundary>
        </section>
      </section>
    </Layout>
  )
}

const CreateProject = React.memo(CreateProjectX)

export default CreateProject
