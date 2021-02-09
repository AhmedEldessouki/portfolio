/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {toast} from 'react-toastify'
import {ErrorBoundary} from 'react-error-boundary'
import {Redirect} from 'react-router-dom'

import {useAuth} from '../context/AuthProvider'
import ErrorMessageFallback from '../components/ErrorMessageFallback'
import {useSafeDispatch} from '../Utils/hooks'
import Layout from '../components/Layout'
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
import {
  projectFormReducer,
  gradualUpload,
} from '../components/Projects/helpers/functions'
import {
  ImageDropZone,
  ButtonWithSpinner,
  DisplayingImages,
  ProjInput,
  TagsCheckBox,
} from '../components/Projects/helpers/components'
import type {ImportedImages} from '../../types/types'
import type {Tag} from '../../types/interfaces'

function CreateProject() {
  const {selectedProject, setProject} = useAuth()
  const [importedImages, setImportedImages] = React.useState<ImportedImages>({
    acceptedImages: {imagesType: 'acceptedImages', imgs: []},
    rejectedImages: {imagesType: 'rejectedImages', imgs: []},
  })
  const proj = React.useCallback(
    oldProj => ({
      name: oldProj?.name ?? '',
      link: oldProj?.link ?? '',
      repoLink: oldProj?.repoLink ?? '',
      projectType: oldProj?.projectType ?? 'Personal',
      projectLogo: oldProj?.projectLogo ?? [],
      tag: oldProj?.tag ?? [],
      description: oldProj?.description ?? '',
    }),
    [],
  )
  const [state, unsafeDispatch] = React.useReducer(projectFormReducer, {
    status: 'idle',
    // Passing Selected Project Data to the Form
    enteredProjectData: proj(selectedProject),
    error: undefined,
  })
  const dispatch = useSafeDispatch(unsafeDispatch)
  const [descriptionFieldControl, setDescriptionFieldControl] = React.useState({
    value: selectedProject?.description ?? '',

    color: '',
  })
  React.useEffect(() => {
    if (selectedProject) {
      window.scroll(0, 0)
    }
    return () => {
      setProject(undefined)
    }
  }, [selectedProject, setProject])
  async function useHandleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    dispatch({type: 'pending'})

    const {
      name,
      link,
      repoLink,
      projectType,
      description,
      tags,
    } = e.target as typeof e.target & {
      name: HTMLInputElement
      link: HTMLInputElement
      repoLink: HTMLInputElement
      projectType: HTMLInputElement & {value: 'Personal' | 'Contribution'}
      description: HTMLInputElement
      tags: Array<HTMLInputElement>
    }

    const checkedTags: Array<Tag> = []
    for (const {alt, checked, value} of tags) {
      if (checked) {
        checkedTags.push({name: alt, url: value})
      }
    }

    const uploadedImages = await gradualUpload(
      importedImages.acceptedImages.imgs,
      name.value,
    )

    const formData = {
      name: name.value,
      link: link.value,
      repoLink: repoLink.value,
      projectType: projectType.value,
      description: description.value,
      projectLogo: [...state.enteredProjectData.projectLogo, ...uploadedImages],
      tag: checkedTags,
    }

    if (selectedProject) {
      // Note: deepEqual return true if they are equal
      const hasChanged = !deepEqual(selectedProject, {
        ...formData,
        id: selectedProject.id,
      })

      if (hasChanged) {
        await updateProject({...formData, id: selectedProject.id})
        setProject(undefined)
        dispatch({type: 'redirect'})
      } else {
        toast.warn(`No Update Found in ${formData.name}`, {
          style: {color: 'black'},
        })
      }
    }

    if (!selectedProject) {
      await createNewProject(formData)
      dispatch({type: 'redirect'})
    }
    dispatch({type: 'idle'})
  }
  const {status, enteredProjectData, error} = state

  const handleImageRemoval = React.useCallback(
    (
      type:
        | 'remove_acceptedImages'
        | 'remove_oldImages'
        | 'remove_rejectedImages',
      index,
    ) => {
      if (type === 'remove_oldImages') {
        enteredProjectData.projectLogo.splice(index, 1)
        dispatch({type: 'idle'})
      } else if (type === 'remove_acceptedImages') {
        importedImages.acceptedImages.imgs.splice(index, 1)
        setImportedImages({
          ...importedImages,
        })
      } else {
        importedImages.rejectedImages.imgs.splice(index, 1)
        setImportedImages({
          ...importedImages,
        })
      }
    },
    [dispatch, enteredProjectData.projectLogo, importedImages],
  )

  const {
    name,
    link,
    repoLink,
    projectLogo,
    projectType,
    tag,
  } = enteredProjectData
  const isPending = status === 'pending'

  if (status === 'redirect') {
    return <Redirect to="/dashboard" />
  }
  return (
    <Layout>
      <React.Fragment>
        <h1 css={h1XL}>{selectedProject ? `Edit` : `Create`} Project</h1>
        <div
          css={[
            {
              display: 'flex',
              placeContent:
                importedImages.acceptedImages.imgs?.length ||
                importedImages.rejectedImages.imgs?.length ||
                (selectedProject && selectedProject.projectLogo?.length >= 0)
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
            acceptedImages={importedImages.acceptedImages.imgs}
            rejectedImages={importedImages.rejectedImages.imgs}
            oldImages={projectLogo}
            handleClick={handleImageRemoval}
          />
          <ErrorBoundary
            FallbackComponent={ErrorMessageFallback}
            resetKeys={[state]}
            onReset={() => dispatch({type: 'clean_up'})}
          >
            <form
              css={[formWrapper, {gap: 6}]}
              onSubmit={useHandleSubmit}
              id="create-project-form"
            >
              <ImageDropZone
                importedImages={importedImages}
                setImportedImages={setImportedImages}
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
                defaultValue={projectType ?? 'Personal'}
                name="projectType"
                aria-label="Please Select Project Type"
              >
                <option value="Personal">Personal</option>
                <option value="Contribution">Contribution</option>
              </select>
              <TagsCheckBox projectTags={tag} />
              <label
                htmlFor="description"
                style={{marginTop: '10px'}}
                css={labelWrapper}
              >
                <textarea
                  css={[
                    textArea,
                    {margin: 0, borderColor: descriptionFieldControl.color},
                  ]}
                  id="description"
                  aria-label="description"
                  placeholder="Project Description"
                  name="description"
                  value={descriptionFieldControl.value}
                  minLength={10}
                  onChange={e => {
                    if (e.target.validity.valid) {
                      setDescriptionFieldControl({
                        ...descriptionFieldControl,
                        color: colors.lightGreen,
                      })
                    }
                    setDescriptionFieldControl({
                      ...descriptionFieldControl,
                      value: e.target.value,
                    })
                  }}
                  onBlur={e => {
                    e.target.validity.valid
                      ? setDescriptionFieldControl({
                          ...descriptionFieldControl,
                          color: colors.lightGreen,
                        })
                      : setDescriptionFieldControl({
                          ...descriptionFieldControl,
                          color: colors.burgundyRed,
                        })
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
        </div>
      </React.Fragment>
    </Layout>
  )
}

export default CreateProject
