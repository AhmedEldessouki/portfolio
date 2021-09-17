/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {NavLink} from 'react-router-dom'

import {colors, mq} from '../../Styles'

const nav = css`
  width: 100%;
  background-color: ${colors.darkBlue};
  display: flex;
  justify-content: center;
  min-width: 100%;
  min-height: 114px;
`
const h1a = css`
  padding: 23px 40px 24px;
  text-decoration: none;
  font-size: 2rem;
  background: ${colors.independenceBlue};
  margin: 16px 0;
  letter-spacing: 1.6px;
  border-radius: 12%;
  font-variant-caps: petite-caps;
  :hover {
    background-color: ${colors.independenceBlue};
    opacity: 0.8;
  }
  ${mq.s} {
    font-size: 1.2rem;
    letter-spacing: 2.5px;
  }
`

const UnAuthNavlinks = () => (
  <nav css={nav}>
    <NavLink to="/" style={{textDecoration: 'none'}}>
      <h1 css={h1a}>Ahmed Eldessouki</h1>
    </NavLink>
  </nav>
)

export default UnAuthNavlinks
