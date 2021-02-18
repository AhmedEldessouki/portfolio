/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {NavLink} from 'react-router-dom'

import {colors, mq} from '../../Styles'

const UnAuthNavlinks = () => {
  const nav = css`
    position: absolute;
    top: 0;
    width: 100%;
    background-color: ${colors.darkBlue};
    display: flex;
    justify-content: center;
    min-width: 100%;
  `
  const h1a = css`
    padding: 23px 40px 24px;
    text-decoration: none;
    font-size: 2rem;
    background: ${colors.darkBlue};
    margin: 16px 0;
    letter-spacing: 1.6px;
    border-radius: 12%;
    font-variant-caps: petite-caps;
    :hover,
    :focus,
    :active {
      background-color: ${colors.independenceBlue};
      color: inherit;
    }
    ${mq.s} {
      font-size: 1.2rem;
      letter-spacing: 2.5px;
    }
  `
  return (
    <nav css={nav}>
      <NavLink to="/" style={{textDecoration: 'none'}}>
        <h1 css={h1a}>Ahmed Eldessouki</h1>
      </NavLink>
    </nav>
  )
}

export default UnAuthNavlinks
