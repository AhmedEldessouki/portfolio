/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import * as React from 'react'

import {btnStyle, colors, h1XL, mq, textArea} from '../../Styles'
import Input from '../../Utils/Input'
import PopUp from '../../Utils/PopUp/PopUp'
import {useClientFetch} from '../../Utils/apis'

import type {Tag} from '../../Tags/tagsTypes'
import type {DropzoneInputProps, DropzoneRootProps} from 'react-dropzone'
import {Spinner} from '../../Utils/util'

function ImageDropZone({
  getRootProps,
  getInputProps,
  color = colors.darkBlue,
}: {
  getRootProps: (props?: DropzoneRootProps | undefined) => DropzoneRootProps
  getInputProps: (props?: DropzoneInputProps | undefined) => DropzoneInputProps
  color: string
}) {
  return (
    <React.Fragment>
      <article
        css={css`
          display: flex;
          place-items: center;
          place-content: center;
          border: 10px dashed ${color};
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
    </React.Fragment>
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
  acceptedImages: Array<{preview: string & File}>
  rejectedImages: Array<{preview: string & File}>
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
                />
                <img alt="" width={100} src={preview} />
              </div>
            ))}
          </section>
        </article>
      )}
      {oldImages && oldImages.length > 0 && (
        <article css={xyz}>
          <h2 css={hStyle}>current Images</h2>
          <section css={imgWrap}>
            {oldImages.map((imageUrl, i) => (
              <div key={imageUrl} css={div}>
                <PopUp
                  info="Image"
                  onClickYes={() => handleClick('remove_oldImages', i)}
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

function TagsCheckBox({
  handleClick,
  projectTags,
  ...inputProps
}: {
  handleClick: (e: React.ChangeEvent) => void
  projectTags: Array<string>
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const TagsData = useClientFetch('tags') as Array<Tag>
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
      {TagsData.map((tag, i) => {
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
                handleClick(e)
              }}
              checked={
                projectTags?.find(item => item.trim() === tag.url.trim())
                  ? true
                  : false
              }
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

function ProjInputX({
  editableValue,
  ...inputOverrides
}: {
  editableValue?: string | Array<string> | undefined
  cleanColor?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [state, setState] = React.useState(editableValue)

  if (editableValue) {
    return (
      <Input
        value={editableValue ? state : undefined}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (editableValue) {
            return undefined
          }
          setState(e.target.value)
        }}
        {...inputOverrides}
      />
    )
  }
  return <Input {...inputOverrides} />
}

const ProjInput = React.memo(ProjInputX)

export {
  ProjInput,
  ImageDropZone,
  ButtonWithSpinner,
  DisplayingImages,
  TagsCheckBox,
}
