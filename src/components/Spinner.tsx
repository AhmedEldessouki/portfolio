/** @jsxRuntime classic */
/** @jsx jsx */

import {css, jsx} from '@emotion/react'
import {spinner} from '../Styles'

const spinnerWrapper = css`
  width: 100%;
  margin-top: 38px;
`

function Spinner() {
  return (
    <div css={spinnerWrapper}>
      <div css={spinner} aria-label="loading" />
    </div>
  )
}

export default Spinner
