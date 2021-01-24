/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {toast} from 'react-toastify'

import {h1XL, h2XL} from '../Styles'
import {db} from '../Utils/firebase'
import PopUp from '../Utils/PopUp/PopUp'
import {useAsync} from '../Utils/hooks'
import TagForm from './TagForm'

import type {Tag} from './tagsTypes'

function Tags({TagsData}: {TagsData: Array<Tag>}) {
  const {status, dispatch} = useAsync()

  function createNewTag(tag: Omit<Tag, 'id'>) {
    db.collection('tags')
      .add({
        ...tag,
      })
      .then(() => {
        toast.success(`Tag "${tag.name}" Created`)
      })
      .catch(err => {
        toast.error(`Tag Creation Failed ${err.message}`)
        throw err.message
      })
  }

  // function updateTag(tag) {
  //   const {id, name, link} = tag
  //   db.collection('tags')
  //     .doc(`${id}`)
  //     .update({
  //       name,
  //       link,
  //     })
  //     .then(() => {
  //       toast.success(`tag "${name}" Updated`)
  //     })
  //     .catch(err => {
  //       toast.error(`tag Didn't Update ${err.message}`)
  //       throw err.message
  //     })
  // }

  function deleteTag(tag: Tag) {
    db.collection('tags')
      .doc(`${tag.id}`)
      .delete()
      .then(() => {
        toast.success(`tag "${tag.name}" deleted`)
      })
      .catch(err => {
        toast.error(`tag Deletion Failed ${err.message}`)
        throw err
      })
  }

  function handleSubmit(
    e: {
      preventDefault: () => void
      target: {
        elements: {
          name: any
          url: any
        }
        reset: () => void
      }
    } & React.FormEventHandler,
  ) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {name, url} = e.target.elements
    const newTagData = {
      name: name.value,
      url: url.value,
    }

    createNewTag(newTagData)

    dispatch({type: 'resolved'})
    e.target.reset()
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
            <PopUp info={`${tag.name} Tag`} onClickYes={() => deleteTag(tag)} />
            <img src={tag.url} alt={tag.name} width="50" />
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Tags
