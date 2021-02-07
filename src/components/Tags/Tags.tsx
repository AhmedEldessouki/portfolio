/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {h1XL, h2XL} from '../../Styles'
import PopUp from '../PopUp/PopUp'
import {useAsync} from '../../Utils/hooks'
import {createNewTag, deleteTag} from '../../Utils/apis'
import {replaceWhiteSpaceWith} from '../../Utils/helpers'
import type {Tag} from '../../../types/tagsTypes'
import TagForm from './TagForm'


function Tags({TagsData}: {TagsData: Array<Tag>}) {
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
    <React.Fragment>
      <h1 css={h1XL}>Tags Control</h1>
      <TagForm status={status} handleSubmit={handleSubmit} />
      <h2 css={h2XL}>Tags Control</h2>
      <div
        css={css`
          display: flex;
          place-content: space-around;
          flex-wrap: wrap;
          margin-button: 20px;
        `}
      >
        {TagsData?.map(tag => (
          <div
            key={tag.id}
            css={css`
              display: flex;
              place-items: flex-start;
              flex-direction: row-reverse;
              margin: 0 10px;
            `}
          >
            <PopUp
              info={`${tag.name} Tag`}
              onClickYes={() => deleteTag(tag)}
              controls={replaceWhiteSpaceWith(tag.name, '-')}
            />
            <img src={tag.url} alt={tag.name} width="50" />
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Tags
