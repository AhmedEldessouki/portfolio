/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {
  signWrapper,
  labelWrapper,
  signWrapperInput,
  h1XL,
  btnStyle,
  colors,
} from '../../Styles'
import {useAuth} from '../Utils/AuthProvider'
import Layout from '../Layout'

const SignIn = () => {
  const [email, setEmail] = React.useState('')
  const [emailErr, setEmailErr] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordErr, setPasswordErr] = React.useState('')
  const {signIn, setAuthData} = useAuth(null)

  const handleSubmit = e => {
    e.preventDefault()
    const signInValues = {
      email,
      password,
    }

    setAuthData(signIn(signInValues))
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
          {/* {authError ? <p>{authError}</p> : null} */}
        </form>
      </div>
    </Layout>
  )
}

export default SignIn
