/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {toast} from 'react-toastify'

import Layout from '../Layout'
import {btnStyle, h1XL, h2XL, signWrapper, spinner} from '../Styles'
import {db} from '../Utils/firebase'
import Input from '../Utils/Input'
import PopUp from '../Utils/PopUp/PopUp'
import {useAsync} from '../Utils/util'

function Spinner() {
  return (
    <div
      css={css`
        width: 100%;
        margin-top: 38px;
      `}
    >
      <div css={spinner} />
    </div>
  )
}

function Tags({TagsData}) {
  const {status, dispatch} = useAsync()

  function createNewTag(tag) {
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

  function deleteTag(tag) {
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

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {name, url} = e.target.elements
    const formData = {
      name: name.value,
      url: url.value,
    }

    createNewTag(formData)

    dispatch({type: 'resolved'})
    e.target.reset()
  }

  return (
    <Layout>
      <h1 css={h1XL}>Tags Control</h1>
      <div
        css={css`
          width: 100%;
          display: flex;
          place-content: center;
          flex-wrap: wrap;
        `}
      >
        <h2 css={h2XL}>Create Tag</h2>
        <form onSubmit={handleSubmit} css={signWrapper}>
          <div className="field-container">
            <Input
              type="text"
              placeholder="Enter Tag's Name"
              name="name"
              required
              cleanColor={status === 'resolved'}
            />
            <Input
              type="url"
              name="url"
              required
              placeholder="Enter Tag's Link"
              cleanColor={status === 'resolved'}
            />
          </div>
          {status === 'pending' ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              disabled={status === 'pending'}
              css={btnStyle}
            >
              Create Tag
            </button>
          )}
        </form>
      </div>
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
            <PopUp title={`${tag.name} Tag`} onClick={() => deleteTag(tag)} />
            <img src={tag.url} alt={tag.name} width="50" />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Tags
