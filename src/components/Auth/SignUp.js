/* eslint-disable import/order */
/* eslint-disable react/jsx-fragments */
/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {Fragment, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Layout from '../Layout'
import {
  signWrapper,
  labelWrapper,
  spinner,
  warning,
  btnStyle,
  signWrapperInput,
  h1XL,
} from '../../Styles'
import {signUp} from '../../Store/Actions/AuthActions'

// eslint-disable-next-line no-shadow
function SignUp({auth, authError, signUp}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passError, setPassError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (
      password.length >= 6 &&
      confirmPassword.length >= 6 &&
      password !== confirmPassword
    ) {
      setPassError(true)
    }
    return () => {
      setPassError(false)
    }
  }, [password, confirmPassword])

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    const arr = {firstName, lastName, email, password, confirmPassword}
    await signUp(arr)
    setIsSubmitting(false)
  }

  return (
    <Fragment>
      {!auth.uid ? (
        <Redirect to="/signin" />
      ) : (
        <Layout>
          <h1 css={h1XL}>Sign up</h1>
          <div
            css={css`
              width: 100%;
              display: flex;
              place-content: center;
            `}
          >
            <form id="#sign-up" css={signWrapper} onSubmit={handleSubmit}>
              <label htmlFor="firstName" css={labelWrapper}>
                <input
                  onChange={e => setFirstName(e.target.value)}
                  css={signWrapperInput}
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  placeholder="First Name"
                  required
                  minLength={3}
                  maxLength={15}
                />
              </label>
              <label css={labelWrapper} htmlFor="lastName">
                <input
                  onChange={e => setLastName(e.target.value)}
                  css={signWrapperInput}
                  name="lastName"
                  value={lastName}
                  required
                  minLength={3}
                  maxLength={15}
                  id="lastName"
                  placeholder="Last Name"
                />
              </label>
              <label css={labelWrapper} htmlFor="email">
                <input
                  onChange={e => setEmail(e.target.value)}
                  css={signWrapperInput}
                  name="email"
                  id="email"
                  type="email"
                  required
                  value={email}
                  maxLength={50}
                  placeholder="Email Address"
                />
              </label>

              <label css={labelWrapper} htmlFor="password">
                <input
                  onChange={e => setPassword(e.target.value)}
                  css={signWrapperInput}
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  minLength={6}
                  maxLength={20}
                  required
                />
              </label>
              <label css={labelWrapper} htmlFor="confirmPassword">
                <input
                  onChange={e => setConfirmPassword(e.target.value)}
                  css={signWrapperInput}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  placeholder="Re-Enter Password"
                  minLength={6}
                  maxLength={20}
                  required
                />
                {passError ? (
                  <span css={warning}>Password Don&apos;t Match</span>
                ) : null}
              </label>
              {authError ? <div css={warning}>{authError}</div> : null}

              {isSubmitting ? (
                <div
                  css={css`
                    width: 100%;
                  `}
                >
                  <div css={spinner} />
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || passError}
                  css={btnStyle}
                >
                  Submit
                </button>
              )}
            </form>
          </div>
        </Layout>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signUp: values => dispatch(signUp(values)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
