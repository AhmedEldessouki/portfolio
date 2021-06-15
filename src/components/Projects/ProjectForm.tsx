/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import React from 'react'
import {colors, labelWrapper, formStyles, textArea, warning} from '../../Styles'
import {
  ImageDropZone,
  ButtonWithSpinner,
  ProjInput,
  TagsCheckBox,
} from "./helpers/components"

import type {ImportedImages, ReducerState} from '../../../types/types'
import type {Project} from '../../../types/interfaces'

function ProjectForm({
  useHandleSubmit,
  importedImages,
  setImportedImages,
  state,
  descriptionFieldControl,
  setDescriptionFieldControl,
  selectedProject,
}: {
  useHandleSubmit: (e: React.SyntheticEvent) => Promise<void>
  importedImages: ImportedImages
  setImportedImages: React.Dispatch<React.SetStateAction<ImportedImages>>
  state: ReducerState
  descriptionFieldControl: {value: string; color: string}
  setDescriptionFieldControl: React.Dispatch<
    React.SetStateAction<{value: string; color: string}>
  >
  selectedProject: Project | undefined
}) {
  const {status, enteredProjectData, error} = state
  const {
    name,
    link,
    repoLink,

    projectType,
    tag,
  } = enteredProjectData
  return (
    <form
      css={[formStyles, {gap: 6}]}
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
      />
      <ProjInput
        type="url"
        required
        editableValue={link}
        placeholder="Project Link"
        name="link"
      />
      <ProjInput
        type="url"
        required
        editableValue={repoLink}
        placeholder="Repo Link"
        name="repoLink"
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
            setDescriptionFieldControl({
              ...descriptionFieldControl,
              value: e.target.value,
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
  )
}

export default ProjectForm
