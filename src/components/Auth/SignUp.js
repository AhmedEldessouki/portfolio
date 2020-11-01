/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {useEffect, useState} from 'react'

import Layout from '../Layout'
import {
  signWrapper,
  labelWrapper,
  spinner,
  warning,
  btnStyle,
  signWrapperInput,
  h1XL,
  colors,
} from '../../Styles'
// import {signUp} from '../../Store/Actions/AuthActions'

// eslint-disable-next-line no-shadow
function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [firstNameErr, setFirstNameErr] = useState('')
  const [lastNameErr, setLastNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('')
  const [passError, setPassError] = useState(false)

  useEffect(() => {
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
      setConfirmPasswordErr('inherit')
      setPasswordErr('inherit')
    }
  }, [password, confirmPassword])

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    const arr = {firstName, lastName, email, password, confirmPassword}
    // await signUp(arr)
    setIsSubmitting(false)
    return arr
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
          <label htmlFor="firstName" css={labelWrapper}>
            <input
              onChange={e => setFirstName(e.target.value)}
              onBlur={e =>
                e.target.validity.valid
                  ? setFirstNameErr('inherit')
                  : setFirstNameErr(colors.burgundyRed)
              }
              css={[
                signWrapperInput,
                css`
                  border-color: ${firstNameErr};
                `,
              ]}
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
              onBlur={e =>
                e.target.validity.valid
                  ? setLastNameErr('inherit')
                  : setLastNameErr(colors.burgundyRed)
              }
              css={[
                signWrapperInput,
                css`
                  border-color: ${lastNameErr};
                `,
              ]}
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
              onBlur={e =>
                e.target.validity.valid
                  ? setEmailErr('inherit')
                  : setEmailErr(colors.burgundyRed)
              }
              css={[
                signWrapperInput,
                css`
                  border-color: ${emailErr};
                `,
              ]}
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
              onBlur={e =>
                e.target.validity.valid
                  ? setPasswordErr('inherit')
                  : setPasswordErr(colors.burgundyRed)
              }
              css={[
                signWrapperInput,
                css`
                  border-color: ${passwordErr};
                `,
              ]}
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
              onBlur={e =>
                e.target.validity.valid
                  ? setConfirmPasswordErr('inherit')
                  : setConfirmPasswordErr(colors.burgundyRed)
              }
              css={[
                signWrapperInput,
                css`
                  border-color: ${confirmPasswordErr};
                `,
              ]}
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
          {/* {authError ? <div css={warning}>{authError}</div> : null} */}

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
