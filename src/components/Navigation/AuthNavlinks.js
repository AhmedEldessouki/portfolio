/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { signOut } from '../../Store/Actions/AuthActions'
import my from '../../assets/my.svg'
import { colors, weights, mq } from '../../Styles'

const AuthNavlinks = ({ signOut }) => {
  const nav = css`
    display: flex;
    place-content: space-evenly;
    background: black;
    background-color: ${colors.darkBlue};
    & > a {
      font-weight: ${weights.black};
      letter-spacing: 0.145rem;
      padding: 0 2%;
      align-self: center;
      flex-grow: 1;
      flex-basis: min-content;
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
        to={'/'}
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        <img
          src={my}
          alt={'Ahmed ElDessouki'}
          style={{ width: '150px', padding: '0' }}
        />
      </NavLink>
      <NavLink
        to={'/dashboard'}
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        DashBoard
      </NavLink>
      <NavLink
        to={'/create-project'}
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        Create Project
      </NavLink>
      <NavLink
        to={'/signup'}
        exact
        activeStyle={{
          backgroundColor: colors.independenceBlue,
          padding: `1% 2%`,
        }}
      >
        SignUp
      </NavLink>
      <NavLink onClick={signOut} to={'/'}>
        SignOut
      </NavLink>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(AuthNavlinks)
