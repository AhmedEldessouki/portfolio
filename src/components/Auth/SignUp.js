/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'

import {useAuth} from '../../context/AuthProvider'
import Layout from '../Layout'
import {signWrapper, spinner, warning, btnStyle, h1XL, colors} from '../Styles'
import Input from '../Utils/Input'
import {useAsync} from '../Utils/util'

function SignUp() {
  const {useSignUp} = useAuth()
  const [authError, signUp] = useSignUp()
  const {status, dispatch} = useAsync()

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = e.target.elements
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    }
    await signUp(formData)

    if (!authError) {
      e.currentTarget.reset()
    }
    dispatch({type: 'resolved'})
  }

  return (
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
          <Input
            name="firstName"
            placeholder="First Name"
            required
            minLength={3}
            maxLength={15}
            cleanColor={status === 'resolved'}
          />
          <Input
            name="lastName"
            required
            minLength={3}
            maxLength={15}
            placeholder="Last Name"
            cleanColor={status === 'resolved'}
          />
          <Input
            name="email"
            autoComplete="username"
            type="email"
            required
            maxLength={50}
            placeholder="Email Address"
            cleanColor={status === 'resolved'}
          />

          <Input
            cssNew={
              status === 'rejected'
                ? css`
                    border-color: ${colors.burgundyRed};
                  `
                : void 0
            }
            name="password"
            autoComplete="new-password"
            type="password"
            placeholder="Enter Password"
            minLength={6}
            maxLength={20}
            required
            cleanColor={status === 'resolved'}
            onBlur={e => {
              if (e.target.form[4].value !== e.target.value) {
                dispatch({type: 'rejected'})
              } else {
                dispatch({type: 'idle'})
              }
            }}
          />
          <Input
            onBlur={e => {
              if (e.target.form[3].value !== e.target.value) {
                dispatch({type: 'rejected'})
              } else {
                dispatch({type: 'idle'})
              }
            }}
            cssNew={
              status === 'rejected'
                ? css`
                    border-color: ${colors.burgundyRed};
                  `
                : void 0
            }
            autoComplete="new-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            minLength={6}
            maxLength={20}
            required
            cleanColor={status === 'resolved'}
          />
          {status === 'rejected' ? (
            <span css={warning}>Password Don&apos;t Match</span>
          ) : null}
          {authError ? (
            <div css={warning} role="alert">
              {authError}
            </div>
          ) : null}

          {status === 'pending' ? (
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
              disabled={status === 'rejected'}
              css={btnStyle}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </Layout>
  )
}

export default SignUp
