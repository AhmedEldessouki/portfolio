/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'

import type {FallbackProps} from 'react-error-boundary'
import {colors, warning} from '../Styles'

function ErrorMessageFallback({error, resetErrorBoundary}: FallbackProps) {
  return (
    <div role="alert" css={[warning, {background: colors.independenceBlue}]}>
      <p>There was an error: </p>
      <pre>{error.message}</pre>
      <ol>
        <li>
          <button onClick={resetErrorBoundary}>retry</button>
        </li>
        <li>
          <button onClick={() => window.location.reload()}>
            Refresh the page
          </button>
        </li>
      </ol>
    </div>
  )
}

export default ErrorMessageFallback
