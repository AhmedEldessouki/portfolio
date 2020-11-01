/* eslint-disable no-shadow */
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {NavLink} from 'react-router-dom'

import {signOut} from '../../Store/Actions/AuthActions'
import my from '../../assets/my.svg'
import {colors, weights, mq} from '../../Styles'

const AuthNavlinks = () => {
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
        {my ? (
          <img
            src={my}
            alt="Ahmed ElDessouki"
            style={{width: '150px', padding: '0'}}
          />
        ) : (
          <h1 style={{width: '150px', padding: '0'}}>Ahmed Eldessouki</h1>
        )}
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

export default AuthNavlinks
