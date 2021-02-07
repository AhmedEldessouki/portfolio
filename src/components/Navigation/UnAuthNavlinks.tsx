/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {NavLink} from 'react-router-dom'

import {colors, mq} from '../../Styles'

const UnAuthNavlinks = () => {
  const container = css`
    background-color: ${colors.darkBlue};
    display: flex;
    justify-content: center;
    min-width: 100%;
  `
  const h1a = css`
    padding: 23px 40px 24px;
    text-decoration: none;
    font-size: 2.6rem;
    background: ${colors.independenceBlue};
    margin: 16px 0;
    letter-spacing: 1.5px;
    border-radius: 12%;
    font-variant-caps: petite-caps;
    :hover {
      opacity: 0.8;
    }
    ${mq.s} {
      font-size: 1.2rem;
    }
  `
  return (
    <div css={container} role="navigation">
      <NavLink to="/" style={{textDecoration: 'none'}}>
        <h1 css={h1a}>Ahmed Eldessouki</h1>
      </NavLink>
    </div>
  )
}

export default UnAuthNavlinks
