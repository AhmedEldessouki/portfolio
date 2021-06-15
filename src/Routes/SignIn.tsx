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
  const [verificationFailed, checkUserCredentials] =
    useVerifyUserSignInCredentials()
  const {status, dispatch} = useAsync()

  async function submitUserCredentials(e: React.SyntheticEvent) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {signinEmail, signinPassword} = e.target as typeof e.target & {
      signinEmail: {value: string}
      signinPassword: {value: string}
    }
    const credentials = {
      email: signinEmail.value,
      password: signinPassword.value,
    }
    if (typeof checkUserCredentials === 'string') {
      dispatch({
        type: 'rejected',
        payload: {
          error: {
            message: '[checkUserCredentials] has been detected as a String!',
          } as Error,
        },
      })
      return
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
              name="signinEmail"
              placeholder="Enter email"
              type="email"
              required
            />
            <Input
              type="password"
              name="signinPassword"
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
