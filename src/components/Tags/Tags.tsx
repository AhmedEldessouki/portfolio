/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {h1XL, h2XL} from '../../Styles'
import PopUp from '../PopUp/PopUp'
import {useAsync} from '../../Utils/hooks'
import {createNewTag, deleteTag} from '../../Utils/apis'
import replaceWhiteSpaceWith from '../../Utils/helpers'
import type {Tag} from '../../../types/interfaces'
import ImgWithFallback from '../Image'
import TagForm from './TagForm'

const tagsInnerWrapper = css`
  display: flex;
  place-items: flex-start;
  flex-direction: row-reverse;
  margin: 0 10px;
`
const tagsOuterWrapper = css`
  display: flex;
  place-content: space-around;
  flex-wrap: wrap;
  margin-button: 20px;
`

function Tags({tagsData}: {tagsData: Array<Tag>}) {
  const {status, dispatch} = useAsync()

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {name, url} = e.target as typeof e.target & {
      name: {value: string}
      url: {value: string}
    }
    const newTagData = {
      name: name.value,
      url: url.value,
    }

    createNewTag(newTagData)

    dispatch({type: 'resolved'})
  }

  return (
    <main>
      <h1 css={h1XL}>Tags Control</h1>
      <TagForm status={status} handleSubmit={handleSubmit} />
      <h2 css={h2XL}>Tags Control</h2>
      <div css={tagsOuterWrapper}>
        {tagsData?.map(tag => (
          <div key={tag.id} css={tagsInnerWrapper}>
            <PopUp
              info={`${tag.name} Tag`}
              onClickYes={() => deleteTag(tag)}
              controls={replaceWhiteSpaceWith(tag.name, '-')}
            />
            <ImgWithFallback
              src={tag.url}
              fallback="/icons/apple-icon-180.png"
              alt={tag.name}
              width="50"
              height="50"
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Tags
