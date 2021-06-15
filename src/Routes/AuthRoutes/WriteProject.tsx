/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {toast} from 'react-toastify'
import {ErrorBoundary} from 'react-error-boundary'
import {Redirect} from 'react-router-dom'

import {useAuth} from '../../context/AuthProvider'
import ErrorMessageFallback from '../../components/ErrorMessageFallback'
import {useSafeDispatch} from '../../Utils/hooks'
import {h1XL, mq} from '../../Styles'
import {createNewProject, updateProject} from '../../Utils/apis'
import {
  projectFormReducer,
  gradualUpload,
} from '../../components/Projects/helpers/functions'
import {DisplayingImages} from '../../components/Projects/helpers/components'
import type {ImportedImages} from '../../../types/types'
import type {Tag} from '../../../types/interfaces'
import ProjectForm from '../../components/Projects/ProjectForm'

function WriteProject() {
  const {selectedProject, setProject} = useAuth()
  const [importedImages, setImportedImages] = React.useState<ImportedImages>({
    acceptedImages: {imagesType: 'acceptedImages', imgs: []},
    rejectedImages: {imagesType: 'rejectedImages', imgs: []},
  })

  const [state, unsafeDispatch] = React.useReducer(projectFormReducer, {
    status: 'idle',
    enteredProjectData: {
      name: '',
      link: '',
      repoLink: '',
      projectType: 'Personal',
      projectLogo: [],
      tag: [],
      description: '',
    },
    error: undefined,
  })

  const dispatch = useSafeDispatch(unsafeDispatch)
  const [descriptionFieldControl, setDescriptionFieldControl] = React.useState({
    value: selectedProject?.description ?? '',
    color: '',
  })

  React.useEffect(() => {
    if (!selectedProject) return
    if (
      JSON.stringify(selectedProject) ===
      JSON.stringify(state.enteredProjectData)
    )
      return

    dispatch({
      type: 'set_form_values',
      payload: {
        name: selectedProject.name,
        link: selectedProject.link,
        repoLink: selectedProject.repoLink,
        projectType: selectedProject.projectType,
        projectLogo: selectedProject.projectLogo,
        tag: selectedProject.tag,
        description: selectedProject.description,
      },
    })
    window.scroll(0, 0)
    // eslint-disable-next-line consistent-return
    return () => {
      setProject(undefined)
    }
  }, [dispatch, selectedProject, setProject, state.enteredProjectData])

  async function useHandleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {name, link, repoLink, projectType, description, tags} =
      e.target as typeof e.target & {
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
      if (
        JSON.stringify(selectedProject) ===
        JSON.stringify({
          ...formData,
          id: selectedProject.id,
        })
      ) {
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
      index: number,
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
  const {projectLogo} = enteredProjectData
  if (status === 'redirect') {
    return <Redirect to="/dashboard" />
  }
  return (
    <main>
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
          resetKeys={[status, enteredProjectData, error]}
          onReset={() => dispatch({type: 'clean_up'})}
        >
          <ProjectForm
            useHandleSubmit={useHandleSubmit}
            importedImages={importedImages}
            setImportedImages={setImportedImages}
            state={state}
            descriptionFieldControl={descriptionFieldControl}
            setDescriptionFieldControl={setDescriptionFieldControl}
            selectedProject={selectedProject}
          />
        </ErrorBoundary>
      </div>
    </main>
  )
}

export default WriteProject
