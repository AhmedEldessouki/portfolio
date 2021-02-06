/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {formWrapper, h1XL, btnStyle, warning} from '../Styles'
import {useAuth} from '../../context/AuthProvider'
import Layout from '../Layout'
import Input from '../Utils/Input'
import {useAsync} from '../Utils/hooks'
import {Spinner} from '../Utils/util'

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
    <Layout height="74.5vmin">
      <h1 css={h1XL}>Sign-in</h1>
      <div
        css={css`
          width: 100%;
          display: flex;
          place-content: center;
        `}
      >
        <form onSubmit={submitUserCredentials} css={[formWrapper, {gap: 6}]}>
          <div css={{width: '89%'}}>
            <Input
              name="signin_email"
              placeholder="Enter email"
              type="email"
              required
              cleanColor={status === 'resolved'}
            />
            <Input
              type="password"
              name="signin_password"
              minLength={6}
              maxLength={20}
              required
              placeholder="Enter password"
              cleanColor={status === 'resolved'}
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
    </Layout>
  )
}

export default SignIn
