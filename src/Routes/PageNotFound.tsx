/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css, Global} from '@emotion/react'
import {NavLink} from 'react-router-dom'
import {globalStyles, h1XL} from '../Styles'

function PageNotFound() {
  return (
    <div
      css={css`
        display: flex;
        place-content: center;
        place-items: center;
        height: 97vh;
        flex-direction: column;
        font-size: 159%;
      `}
    >
      <Global styles={globalStyles} />

      <h1
        css={[
          h1XL,
          css`
            padding: 0;
          `,
        ]}
      >
        404
      </h1>
      <h2
        css={[
          h1XL,
          css`
            padding: 0;
            margin: 0;
          `,
        ]}
      >
        Page Not Found
      </h2>
      <NavLink to="/">
        <h1 css={h1XL}>Home</h1>
      </NavLink>
    </div>
  )
}

export default PageNotFound
