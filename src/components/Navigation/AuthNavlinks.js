/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {NavLink} from 'react-router-dom'

import {colors, weights, mq} from '../Styles'
import {useAuth} from '../Utils/AuthProvider'

const AuthNavlinksX = () => {
  const {signOut} = useAuth()

  const nav = css`
    display: flex;
    place-content: space-evenly;
    background: black;
    background-color: ${colors.darkBlue};
    font-size: 124%;
    & > a {
      font-weight: ${weights.black};
      letter-spacing: 0.145rem;
      padding: 0 2%;
      align-self: center;
      flex-grow: 1;
      &:hover,
      &:focus {
        background-color: ${colors.independenceBlue};
      }
    }
    ${mq.phoneLarge} {
      flex-direction: column;
      padding-bottom: 17px;
      & > a {
        width: 73%;
        text-align: center;
      }
    }
  `

  return (
    <div css={nav}>
      <NavLink
        to="/"
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        <span
          style={{
            width: '100%',
            fontSize: '2rem',
            padding: '5px 0',
            color: '#61dafb',
            letterSpacing: '1.6px',
            fontVariantCaps: 'petite-caps',
          }}
        >
          Ahmed ElDessouki
        </span>
      </NavLink>
      <NavLink
        to="/dashboard"
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        DashBoard
      </NavLink>
      <NavLink
        to="/create-project"
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        Create Project
      </NavLink>
      <NavLink
        to="/signup"
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        SignUp
      </NavLink>
      <NavLink onClick={signOut} to="/">
        SignOut
      </NavLink>
    </div>
  )
}
const AuthNavlinks = React.memo(AuthNavlinksX)
export default AuthNavlinks
