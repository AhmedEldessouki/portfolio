/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {useDropzone} from 'react-dropzone'
import {btnStyle, colors, h1XL, mq, textArea} from '../../../Styles'
import Input from '../../Input'
import PopUp from '../../PopUp/PopUp'
import {useClientFetch} from '../../../Utils/apis'

import Spinner from '../../Spinner'
import type {
  ImportedImages,
  UploadedImagesArrayType,
} from '../../../../types/types'
import type {Tag} from '../../../../types/interfaces'

function ImageDropZone({
  importedImages,
  setImportedImages,
}: {
  importedImages: ImportedImages
  setImportedImages: React.Dispatch<React.SetStateAction<ImportedImages>>
}) {
  const [isDragActive, setIsDragActive] = React.useState(false)

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    maxFiles: 10,
    maxSize: 8000000,
    onDropAccepted: acceptedFiles => {
      setIsDragActive(!isDragActive)

      const newArr = acceptedFiles.map(file => {
        return {file, preview: URL.createObjectURL(file)}
      })
      setImportedImages({
        ...importedImages,
        acceptedImages: {
          ...importedImages.acceptedImages,
          imgs: [...importedImages.acceptedImages.imgs, ...newArr],
        },
      })
    },
    onDropRejected: rejectedFiles => {
      setIsDragActive(!isDragActive)

      const newArr = rejectedFiles.map(({file}) => {
        return {file, preview: URL.createObjectURL(file)}
      })
      setImportedImages({
        ...importedImages,
        rejectedImages: {
          ...importedImages.rejectedImages,
          imgs: [...importedImages.rejectedImages.imgs, ...newArr],
        },
      })
    },
    onDragEnter: () => {
      setIsDragActive(!isDragActive)
    },
    onDragLeave: () => {
      setIsDragActive(!isDragActive)
    },
  })

  return (
    <article
      css={css`
        display: flex;
        place-items: center;
        place-content: center;
        border: 10px dashed ${isDragActive ? colors.blueFont : colors.darkBlue};
        width: 95%;
        height: 200px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 20px;
        padding: 0;
        margin-right: 0;
        :hover,
        :focus {
          border-color: ${colors.blueFont};
        }
      `}
      {...getRootProps()}
    >
      <em
        css={[
          h1XL,
          css`
            padding: 0;
            color: ${colors.aliceLightBlue};
          `,
        ]}
      >
        Image(s) Drop Zone
      </em>
      <input
        id="dropZone"
        type="file"
        name="projectLogo"
        aria-label="ImageDropZone"
        css={[
          textArea,
          css`
            width: initial;
            margin: 0;
          `,
        ]}
        {...getInputProps()}
      />
    </article>
  )
}

function ButtonWithSpinner({
  isPending = false,
  isProject,
}: {
  isPending: boolean
  isProject: boolean
}) {
  if (isPending) {
    return <Spinner />
  }
  return (
    <button type="submit" css={[btnStyle, {fontSize: '126%'}]}>
      {isProject ? 'Edit' : 'Create'} Project
    </button>
  )
}

function DisplayingImages({
  acceptedImages,
  rejectedImages,
  oldImages,
  handleClick,
}: {
  acceptedImages: UploadedImagesArrayType
  rejectedImages: UploadedImagesArrayType
  oldImages: Array<string>
  handleClick: (
    arg0:
      | 'remove_acceptedImages'
      | 'remove_oldImages'
      | 'remove_rejectedImages',
    arg1: number,
  ) => void
}) {
  const imgWrap = css`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    overflow: auto hidden;
    background: ${colors.kindaDarkBlue};
    height: 199px;
    padding-left: 22px;
  `
  const xyz = css`
    background: ${colors.darkBlue};
    overflow: hidden;
    padding: 0 31px 43px;
    width: 36vw;
    ${mq.phoneLarge} {
      width: 76vw;
    }
  `
  const hStyle = css`
    margin: 3px 0px 3px -15px;
    background: ${colors.independenceBlue};
    padding: 5px;
  `
  const div = css`
    display: flex;
    place-items: flex-start;
    padding-right: 28px;
    :hover {
      background: ${colors.backgroundShade};
    }
  `
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
      `}
    >
      {acceptedImages?.length > 0 && (
        <article css={[xyz]}>
          <h2 css={[hStyle, {background: '#11826B'}]}>Accepted Images</h2>
          <section css={imgWrap}>
            {acceptedImages?.map(({preview}, i) => (
              <div key={preview} css={div}>
                <PopUp
                  info="Image"
                  onClickYes={() => handleClick('remove_acceptedImages', i)}
                  controls={preview}
                />
                <img alt="" width={100} src={preview} />
              </div>
            ))}
          </section>
        </article>
      )}
      {rejectedImages?.length > 0 && (
        <article css={[xyz]}>
          <h2 css={[hStyle, {background: colors.burgundyRed}]}>
            Rejected Images
          </h2>
          <section css={imgWrap}>
            {rejectedImages?.map(({preview}, i) => (
              <div key={preview} css={div}>
                <PopUp
                  info="Image"
                  onClickYes={() => handleClick('remove_rejectedImages', i)}
                  controls={preview}
                />
                <img alt="" width={100} src={preview} />
              </div>
            ))}
          </section>
        </article>
      )}
      {oldImages?.length > 0 && (
        <article css={xyz}>
          <h2 css={hStyle}>current Images</h2>
          <section css={imgWrap}>
            {oldImages?.map((imageUrl, i) => (
              <div key={imageUrl} css={div}>
                <PopUp
                  info="Image"
                  onClickYes={() => handleClick('remove_oldImages', i)}
                  controls={imageUrl}
                />
                <picture>
                  {/* 
                    // TODO: Image MediaQuery
                    <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
                    <source media="(min-width:465px)" srcset="img_white_flower.jpg"> 
                  */}
                  <img alt="" width={100} src={imageUrl} />
                </picture>
              </div>
            ))}
          </section>
        </article>
      )}
    </section>
  )
}

// TODO: After Changing All the `ProjectData` Tags into [Object] Remove the type [String] of `ProjectTags`
function TagsCheckBoxX({
  projectTags,
  ...inputProps
}: {
  projectTags: Array<string | Tag>
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const tagsData = useClientFetch('tags') as Array<Tag>
  const [isChecked, setChecked] = React.useState(
    tagsData.map(
      tag =>
        projectTags?.length > 0 &&
        !!projectTags?.find(
          item =>
            (typeof item === 'object' ? item.url.trim() : item.trim()) ===
            tag.url.trim(),
        ),
    ),
  )
  return (
    <div
      css={css`
        display: flex;
        place-content: space-evenly;
        width: 94%;
        margin: 10px 0;
        border: 10px dashed ${colors.darkBlue};
        padding: 9px 0;
        place-items: center;
        flex-wrap: wrap;
      `}
    >
      {tagsData.map((tag, i) => {
        return (
          <label
            key={tag.id}
            css={css`
              display: grid;
              grid-gap: 4px;
              place-items: center;
              grid-auto-flow: column;
              & input {
              }
            `}
            htmlFor={tag.name}
          >
            <input
              name="tags"
              aria-label={`tag-${tag.name}`}
              id={tag.url}
              data-testid={`tag-${i}`}
              color={colors.independenceBlue}
              type="checkbox"
              alt={tag.name}
              onChange={e => {
                isChecked.splice(i, 1, e.target.checked)
                setChecked([...isChecked])
              }}
              value={tag.url}
              checked={isChecked[i]}
              {...inputProps}
            />
            <img
              css={css`
                margin: 0;
              `}
              src={tag.url}
              alt={tag.name}
              width="30"
            />
          </label>
        )
      })}
    </div>
  )
}
const TagsCheckBox = React.memo(TagsCheckBoxX)
function ProjInputX({
  editableValue,
  ...inputOverrides
}: {
  editableValue?: string | undefined
  cleanColor?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [state, setState] = React.useState(editableValue)
  return (
    <Input
      value={state}
      onChange={e => {
        setState(e.target.value)
      }}
      {...inputOverrides}
    />
  )
}

const ProjInput = React.memo(ProjInputX)

export {
  ProjInput,
  ImageDropZone,
  ButtonWithSpinner,
  DisplayingImages,
  TagsCheckBox,
}
