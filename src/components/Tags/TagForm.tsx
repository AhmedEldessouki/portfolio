/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {ErrorBoundary} from 'react-error-boundary'

import {btnStyle, h2XL, formStyles} from '../../Styles'
import Input from '../Input'
import ErrorMessageFallback from '../ErrorMessageFallback'
import Spinner from '../Spinner'

import type {Status} from '../../../types/interfaces'

function TagForm({
  status,
  handleSubmit,
}: {
  status: Status
  handleSubmit: (e: React.SyntheticEvent) => void
}) {
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
        <form onSubmit={e => handleSubmit(e)} css={formStyles}>
          <Input
            type="text"
            placeholder="Enter Tag's Name"
            name="name"
            style={{marginBottom: '10px'}}
            required
          />
          <Input
            type="url"
            name="url"
            required
            placeholder="Enter Tag's Link"
          />
          {status === 'pending' ? (
            <Spinner />
          ) : (
            <button type="submit" css={btnStyle}>
              Create Tag
            </button>
          )}
        </form>
      </ErrorBoundary>
    </div>
  )
}

export default TagForm
