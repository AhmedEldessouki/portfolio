/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import Layout from '../Layout'
import {
  signWrapper,
  spinner,
  warning,
  btnStyle,
  signWrapperInput,
  h1XL,
  colors,
} from '../../Styles'
import {useAuth} from '../Utils/AuthProvider'
import Input from '../Utils/Input'

function SignUp() {
  const {signUp} = useAuth()
  const [authError, setAuthError] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const [firstNameErr, setFirstNameErr] = React.useState('')
  const [lastNameErr, setLastNameErr] = React.useState('')
  const [emailErr, setEmailErr] = React.useState('')
  const [passwordErr, setPasswordErr] = React.useState('')
  const [confirmPasswordErr, setConfirmPasswordErr] = React.useState('')
  const [passError, setPassError] = React.useState(false)

  React.useEffect(() => {
    if (
      password.length >= 6 &&
      confirmPassword.length >= 6 &&
      password !== confirmPassword
    ) {
      setPassError(true)
      setPasswordErr(colors.burgundyRed)
      setConfirmPasswordErr(colors.burgundyRed)
    }
    return () => {
      setPassError(false)
      setConfirmPasswordErr('none')
      setPasswordErr('none')
    }
  }, [password, confirmPassword])

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
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
    console.log(formData)
    const {error, resolved} = await signUp(formData)
    if (error) {
      setAuthError(error)
    }
    if (resolved) {
      e.currentTarget.reset()
    }
    setIsSubmitting(false)
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
            onBlur={e =>
              e.target.validity.valid
                ? setFirstNameErr('none')
                : setFirstNameErr(colors.burgundyRed)
            }
            css={[
              signWrapperInput,
              css`
                border-color: ${firstNameErr};
              `,
            ]}
            name="firstName"
            placeholder="First Name"
            required
            minLength={3}
            maxLength={15}
          />
          <Input
            onBlur={e =>
              e.target.validity.valid
                ? setLastNameErr('none')
                : setLastNameErr(colors.burgundyRed)
            }
            css={[
              signWrapperInput,
              css`
                border-color: ${lastNameErr};
              `,
            ]}
            name="lastName"
            required
            minLength={3}
            maxLength={15}
            id="lastName"
            placeholder="Last Name"
          />
          <Input
            onBlur={e =>
              e.target.validity.valid
                ? setEmailErr('none')
                : setEmailErr(colors.burgundyRed)
            }
            css={[
              signWrapperInput,
              css`
                border-color: ${emailErr};
              `,
            ]}
            name="email"
            autoComplete="username"
            type="email"
            required
            maxLength={50}
            placeholder="Email Address"
          />

          <Input
            onBlur={e => {
              setPassword(e.target.value)
              e.target.validity.valid
                ? setPasswordErr('none')
                : setPasswordErr(colors.burgundyRed)
            }}
            css={[
              signWrapperInput,
              css`
                border-color: ${passwordErr};
              `,
            ]}
            name="password"
            autoComplete="new-password"
            type="password"
            placeholder="Enter Password"
            minLength={6}
            maxLength={20}
            required
          />
          <Input
            onBlur={e => {
              setConfirmPassword(e.target.value)
              e.target.validity.valid
                ? setConfirmPasswordErr('none')
                : setConfirmPasswordErr(colors.burgundyRed)
            }}
            css={[
              signWrapperInput,
              css`
                border-color: ${confirmPasswordErr};
              `,
            ]}
            autoComplete="new-password"
            name="confirmPassword"
            type="password"
            placeholder="Re-Enter Password"
            minLength={6}
            maxLength={20}
            required
          />
          {passError ? (
            <span css={warning}>Password Don&apos;t Match</span>
          ) : null}
          {authError ? (
            <div css={warning} type="alert">
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
  )
}

export default SignUp
