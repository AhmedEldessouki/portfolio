/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {ErrorBoundary} from 'react-error-boundary'

import {btnStyle, h2XL, formWrapper, spinner} from '../Styles'
import Input from '../Utils/Input'
import {ErrorMessageFallback} from '../Utils/util'

function Spinner() {
  return (
    <div
      css={css`
        width: 100%;
        margin-top: 38px;
      `}
    >
      <div css={spinner} aria-busy="true" />
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
      <ErrorBoundary FallbackComponent={ErrorMessageFallback}>
        <form onSubmit={e => handleSubmit(e)} css={formWrapper}>
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
      </ErrorBoundary>
    </div>
  )
}

export default TagForm
