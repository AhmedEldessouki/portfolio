/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {formStyles, h1XL, btnStyle, warning} from '../Styles'
import {useAuth} from '../context/AuthProvider'
import Input from '../components/Input'
import {useAsync} from '../Utils/hooks'
import Spinner from '../components/Spinner'

const SignIn = () => {
  const {useVerifyUserSignInCredentials} = useAuth()
  const [
    verificationFailed,
    checkUserCredentials,
  ] = useVerifyUserSignInCredentials()
  const {status, dispatch} = useAsync()

  async function submitUserCredentials(e: React.SyntheticEvent) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {signin_email, signin_password} = e.target as typeof e.target & {
      signin_email: {value: string}
      signin_password: {value: string}
    }
    const credentials = {
      email: signin_email.value,
      password: signin_password.value,
    }

    await checkUserCredentials(credentials)

    dispatch({type: 'resolved'})
  }

  return (
    <main css={{marginTop: '114px'}}>
      <h1 css={h1XL}>Sign-in</h1>
      <div
        css={css`
          width: 100%;
          display: flex;
          place-content: center;
          min-height: 63vh;
          place-items: center;
        `}
      >
        <form onSubmit={submitUserCredentials} css={[formStyles, {gap: 6}]}>
          <div css={{width: '89%'}}>
            <Input
              name="signin_email"
              placeholder="Enter email"
              type="email"
              required
            />
            <Input
              type="password"
              name="signin_password"
              minLength={6}
              maxLength={20}
              required
              placeholder="Enter password"
            />
          </div>
          {verificationFailed && (
            <div role="alert" css={warning}>
              {verificationFailed}
            </div>
          )}
          {status === 'pending' ? (
            <Spinner />
          ) : (
            <button type="submit" css={btnStyle}>
              Submit
            </button>
          )}
        </form>
      </div>
    </main>
  )
}

export default SignIn
