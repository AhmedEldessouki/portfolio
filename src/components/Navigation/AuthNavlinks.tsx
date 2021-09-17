/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {useAuth} from '../../context/AuthProvider'

import {colors, mq} from '../../Styles'

const nav = css`
  width: 100%;
  display: flex;
  place-content: space-evenly;
  background: black;
  background-color: ${colors.darkBlue};
  padding: 5px 0;
  min-height: 111px;
  & > a,
  button {
    text-decoration: none;
    border: none;
    border-radius: 11%;
    letter-spacing: 0.145rem;
    padding: 0 2%;
    align-self: center;
    flex-grow: 1;
    &:hover,
    &:focus {
      padding: 5px 10px;
      background-color: ${colors.independenceBlue};
      color: inherit;
    }
    h1 {
      width: 100%;
      font-size: 2rem;
      padding: 5px 0;
      letter-spacing: 1.6px;
      font-variant-caps: petite-caps;
      margin: 0;
      ${mq.s} {
        font-size: 1.2rem;
        letter-spacing: 2.5px;
      }
    }
    h2 {
      padding: 3px 0;
      text-align: center;
      font-size: 1.3rem;
      ${mq.s} {
        letter-spacing: 2.5px;
        font-size: 1rem;
      }
    }
  }
  ${mq.phoneLarge} {
    flex-direction: column;
    padding: 18px 0;
    padding-bottom: 17px;
    & > a,
    button {
      width: 73%;
      text-align: center;
    }
  }
`

const AuthNavlinksX = () => {
  const {signUserOut} = useAuth()

  return (
    <nav css={nav}>
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
        to="/tags-control"
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
      <button
        onClick={signUserOut}
        type="button"
        css={{
          background: 'transparent',
          color: 'inherit',
        }}
      >
        <h2>SignOut</h2>
      </button>
    </nav>
  )
}
const AuthNavlinks = React.memo(AuthNavlinksX)
export default AuthNavlinks
