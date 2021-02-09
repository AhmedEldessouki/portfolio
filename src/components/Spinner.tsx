/** @jsxRuntime classic */
/** @jsx jsx */

import {css, jsx} from '@emotion/react'
import {spinner} from '../Styles'

function Spinner() {
  return (
    <div
      css={css`
        width: 100%;
        margin-top: 38px;
      `}
    >
      <div css={spinner} aria-label="loading" />
    </div>
  )
}

export default Spinner
