/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {useAuth} from '../../context/AuthProvider'

import {colors, weights, mq} from '../Styles'

const AuthNavlinksX = () => {
  const {signOut} = useAuth()

  const nav = css`
    display: flex;
    place-content: space-evenly;
    background: black;
    background-color: ${colors.darkBlue};
    padding: 8px 6px 0;
    & > a {
      letter-spacing: 0.145rem;
      padding: 0 2%;
      align-self: center;
      flex-grow: 1;
      &:hover,
      &:focus {
        background-color: ${colors.independenceBlue};
      }
      h1 {
        width: 100%;
        font-size: 2rem;
        padding: 5px 0;
        color: ${colors.blueFont};
        letter-spacing: 1.6px;
        font-variant-caps: petite-caps;
        margin: 0;
        ${mq.s} {
          font-size: 1.2rem;
          letter-spacing: 2.5px;
        }
      }
      h2 {
        font-weight: ${weights.black};
        padding: 3px 0;
        tex-align: center;
        ${mq.s} {
          letter-spacing: 2.5px;
          font-size: 1rem;
        }
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
        <h1>Ahmed ElDessouki</h1>
      </NavLink>
      <NavLink
        to="/dashboard"
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        <h2>DashBoard</h2>
      </NavLink>
      <NavLink
        to="/create-project"
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        <h2>Create Project</h2>
      </NavLink>
      <NavLink
        to="/tags"
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        <h2>Tags</h2>
      </NavLink>
      <NavLink
        to="/signup"
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        <h2>SignUp</h2>
      </NavLink>
      <NavLink onClick={signOut} to="/">
        <h2>SignOut</h2>
      </NavLink>
    </div>
  )
}
const AuthNavlinks = React.memo(AuthNavlinksX)
export default AuthNavlinks
