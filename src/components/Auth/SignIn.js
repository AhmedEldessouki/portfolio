/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {
  signWrapper,
  signWrapperInput,
  h1XL,
  btnStyle,
  colors,
  warning,
  spinner,
} from '../../Styles'
import {useAuth} from '../Utils/AuthProvider'
import Layout from '../Layout'
import Input from '../Utils/Input'

const SignIn = () => {
  const {signIn, setAuthData} = useAuth(null)

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [authError, setAuthError] = React.useState('')
  const [emailErr, setEmailErr] = React.useState('')
  const [passwordErr, setPasswordErr] = React.useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    const {email, password} = e.target.elements
    const formData = {
      email: email.value,
      password: password.value,
    }

    const {error, resolved} = await signIn(formData)
    e.target.reset()
    setIsSubmitting(false)
    if (error) {
      setAuthError(error)
    }
    if (resolved) {
      setAuthData(resolved)
    }
  }

  return (
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
            <Input
              css={[
                signWrapperInput,
                css`
                  border-color: ${emailErr};
                `,
              ]}
              type="email"
              autoComplete="email"
              placeholder="Email"
              name="email"
              required
              onBlur={e =>
                e.target.validity.valid
                  ? setEmailErr('inherit')
                  : setEmailErr(colors.burgundyRed)
              }
            />
            <Input
              css={[
                signWrapperInput,
                css`
                  border-color: ${passwordErr};
                `,
              ]}
              type="password"
              name="password"
              autoComplete="password"
              minLength={6}
              maxLength={20}
              required
              placeholder="Password"
              onBlur={e =>
                e.target.validity.valid
                  ? setPasswordErr('inherit')
                  : setPasswordErr(colors.burgundyRed)
              }
            />
          </div>
          {authError ? (
            <div type="alert" css={warning}>
              {authError}
            </div>
          ) : null}
          {isSubmitting ? (
            <div
              css={css`
                width: 100%;
              `}
            >
              <div css={spinner} />
            </div>
          ) : (
            <button type="submit" disabled={isSubmitting} css={btnStyle}>
              Submit
            </button>
          )}
        </form>
      </div>
    </Layout>
  )
}

export default SignIn
