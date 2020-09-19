/* eslint-disable import/order */
/* eslint-disable react/jsx-fragments */
/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {useState, Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  signWrapper,
  labelWrapper,
  signWrapperInput,
  h1XL,
  btnStyle,
  colors,
} from '../../Styles'
import {signIn} from '../../Store/Actions/AuthActions'
import Layout from '../Layout'

// eslint-disable-next-line no-shadow
const SignIn = ({signIn, auth, authError}) => {
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const signInValues = {
      email,
      password,
    }
    signIn(signInValues)
  }
  return (
    <Fragment>
      {auth.uid ? (
        <Redirect to="/" />
      ) : (
        <Layout>
          <h1 css={h1XL}>Sign-in</h1>
          <div
            css={css`
              width: 100%;
              display: flex;
              place-content: center;
            `}
          >
            <form onSubmit={handleSubmit} css={signWrapper}>
              <div className="field-container">
                <label htmlFor="email" css={labelWrapper}>
                  <input
                    css={[
                      signWrapperInput,
                      css`
                        border-color: ${emailErr};
                      `,
                    ]}
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                    onBlur={e =>
                      e.target.validity.valid
                        ? setEmailErr('inherit')
                        : setEmailErr(colors.burgundyRed)
                    }
                  />
                </label>
                <label css={labelWrapper} htmlFor="password">
                  <input
                    css={[
                      signWrapperInput,
                      css`
                        border-color: ${passwordErr};
                      `,
                    ]}
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    minLength={6}
                    maxLength={20}
                    required
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    onBlur={e =>
                      e.target.validity.valid
                        ? setPasswordErr('inherit')
                        : setPasswordErr(colors.burgundyRed)
                    }
                  />
                </label>
              </div>
              <button css={btnStyle} type="submit">
                SignIn
              </button>
              {authError ? <p>{authError}</p> : null}
            </form>
          </div>
        </Layout>
      )}
    </Fragment>
  )
}

SignIn.prototypes = {
  signIn: PropTypes.func,
  auth: PropTypes.object,
  authError: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
