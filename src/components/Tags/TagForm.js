/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {btnStyle, h2XL, signWrapper, spinner} from '../Styles'
import Input from '../Utils/Input'

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

function TagForm({status, handleSubmit}) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        place-content: center;
        flex-wrap: wrap;
      `}
    >
      <h2 css={h2XL}>Create Tag</h2>
      <form onSubmit={e => handleSubmit(e)} css={signWrapper}>
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
          <button type="submit" disabled={status === 'pending'} css={btnStyle}>
            Create Tag
          </button>
        )}
      </form>
    </div>
  )
}

export default TagForm
