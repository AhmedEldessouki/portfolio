/* eslint-disable complexity */
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
import {deepEqual} from '../Utils/helpers'
import {createNewProject, updateProject} from '../Utils/apis'
import {uploadImage, projectFormReducer} from './helpers/functions'
import {
  ImageDropZone,
  ButtonWithSpinner,
  DisplayingImages,
  ProjInput,
  TagsCheckBox,
} from './helpers/components'

function CreateProjectX() {
  const {selectedProject, setProject} = useAuth()
  const [state, unsafeDispatch] = React.useReducer(projectFormReducer, {
    status: 'idle',
    // Passing Selected Project Data to the Form
    enteredProjectData: {
      name: selectedProject?.name ?? '',
      link: selectedProject?.link ?? '',
      repoLink: selectedProject?.repoLink ?? '',
      projectType: selectedProject?.projectType ?? 'Personal',
      projectLogo: selectedProject ? [...selectedProject.projectLogo] : [],
      tag: selectedProject?.tag ?? [],
      description: selectedProject?.description ?? '',
    },
    error: undefined,
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
      // dispatch({type: 'clean_up'})
    }
  }, [selectedProject, setProject])

  const gradualUpload = React.useCallback(
    async (imagesArray: Array<{preview: string & File}>, name: string) =>
      Promise.allSettled(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        imagesArray.map(async (file: any) => {
          dispatch({type: 'next'})
          return uploadImage(file, name)
        }),
      )
        .then(results =>
          results.forEach((result: PromiseSettledResult<string>) => {
            if (result.status === 'fulfilled') {
              toast.success('Images Uploaded')
              dispatch({type: 'next_add', payload: result.value})
              return result.value
            }
            return result.reason
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
    return undefined
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

    const {
      name,
      link,
      repoLink,
      projectType,
      description,
    } = e.target as typeof e.target & {
      name: {value: string}
      link: {value: string}
      repoLink: {value: string}
      projectType: {value: 'Personal' | 'Contribution'}
      description: {value: string}
    }

    dispatch({
      type: 'submit_newData',
      payload: {
        name: name.value,
        link: link.value,
        repoLink: repoLink.value,
        projectType: projectType.value,
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
        await updateProject({...enteredProjectData, id: selectedProject.id})
        setProject(undefined)
      } else {
        toast.warn(`No Update Found in ${enteredProjectData.name}`, {
          style: {color: 'black'},
        })
      }
      dispatch({type: 'redirect'})
    }

    if (!selectedProject) {
      await createNewProject(enteredProjectData)
      dispatch({type: 'redirect'})
    }
    dispatch({type: 'idle'})
  }
  function handleDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch({type: 'submit_description', payload: e.target.value})
  }

  if (status === 'redirect') {
    return <Redirect to="/dashboard" />
  }

  const {
    name,
    link,
    repoLink,
    projectLogo,
    description,
    projectType,
    tag,
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
                (selectedProject && selectedProject.projectLogo.length >= 0)
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
            oldImages={projectLogo}
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
            <form css={[formWrapper, {gap: 6}]} onSubmit={useHandleSubmit}>
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
                editableValue={name}
                placeholder="Name"
                required
                minLength={3}
                maxLength={15}
                cleanColor={isPending}
              />
              <ProjInput
                type="url"
                required
                editableValue={link}
                placeholder="Project Link"
                name="link"
                cleanColor={isPending}
              />
              <ProjInput
                type="url"
                required
                editableValue={repoLink}
                placeholder="Repo Link"
                name="repoLink"
                cleanColor={isPending}
              />
              <select
                css={{
                  color: colors.whiteFaded,
                  background: colors.darkBlue,
                  margin: '2px 0',
                  height: 50,
                  letterSpacing: '2.2px',
                  width: '100%',
                  borderRadius: '11%',
                  padding: 8,
                  fontSize: '1.4rem',
                  border: `0 solid ${colors.independenceBlue}`,
                  boxShadow: `0 1px 0 1px ${colors.independenceBlue}`,
                  appearance: 'none',
                  backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	                  linear-gradient(to bottom, ${colors.darkBlue} 0%,${colors.darkBlue} 100%)`,
                  backgroundRepeat: ` no-repeat, repeat`,
                  backgroundPosition: `right .7em top 50%, 0 0`,
                  backgroundSize: `.65em auto, 100%`,
                  option: {
                    borderRadius: '11%',
                    padding: 8,
                  },
                }}
                defaultValue={projectType}
                name="projectType"
                aria-label="Please Select Project Type"
              >
                <option value="Personal">Personal</option>
                <option value="Contribution">Contribution</option>
              </select>
              <TagsCheckBox
                handleClick={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                projectTags={tag}
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
                  value={description}
                  minLength={10}
                  onChange={e => handleDescription(e)}
                  onBlur={e => {
                    e.target.validity.valid
                      ? setDescriptionErr(colors.lightGreen)
                      : setDescriptionErr(colors.burgundyRed)
                  }}
                  required
                />
              </label>
              <ButtonWithSpinner
                isPending={status !== 'idle'}
                isProject={!!selectedProject}
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
