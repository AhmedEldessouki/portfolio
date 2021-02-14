/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {useAuth} from '../../context/AuthProvider'
import {formStyles, warning, btnStyle, h1XL, colors} from '../../Styles'
import {useAsync} from '../../Utils/hooks'
import {NewUser} from '../../../types/interfaces'
import Spinner from '../../components/Spinner'
import Input from '../../components/Input'

function SignUp() {
  const {useCreateNewUser} = useAuth()
  const [newUserCreationFailed, createNewUser] = useCreateNewUser()
  const {status, dispatch} = useAsync()

  async function submitNewUserCredentials(e: React.SyntheticEvent) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = e.target as typeof e.target & {
      firstName: {value: string}
      lastName: {value: string}
      email: {value: string}
      password: {value: string}
      confirmPassword: {value: string}
    }
    const newUserData: NewUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    }
    await createNewUser(newUserData)

    if (!newUserCreationFailed) {
      dispatch({type: 'resolved'})
    }
    dispatch({type: 'resolved'})
  }

  return (
    <main>
      <h1 css={h1XL}>Sign up</h1>
      <div
        css={css`
          width: 100%;
          display: flex;
          place-content: center;
        `}
      >
        <form
          id="sign-up"
          css={[formStyles, {gap: 6}]}
          onSubmit={submitNewUserCredentials}
        >
          <Input
            name="firstName"
            placeholder="First Name"
            required
            minLength={3}
            maxLength={15}
          />
          <Input
            name="lastName"
            required
            minLength={3}
            maxLength={15}
            placeholder="Last Name"
          />
          <Input
            name="email"
            autoComplete="username"
            type="email"
            required
            maxLength={50}
            placeholder="Email Address"
          />

          <Input
            cssNew={
              status === 'rejected'
                ? {
                    borderColor: colors.burgundyRed,
                  }
                : undefined
            }
            name="password"
            autoComplete="new-password"
            type="password"
            placeholder="Enter Password"
            minLength={6}
            maxLength={20}
            required
            onBlur={e => {
              const {form} = e.target as typeof e.target & {
                form: Array<React.InputHTMLAttributes<HTMLInputElement>>
              }
              if (form[4]?.value !== e.target.value) {
                dispatch({type: 'rejected'})
              } else {
                dispatch({type: 'idle'})
              }
            }}
          />
          <Input
            onBlur={e => {
              const {form} = e.target as typeof e.target & {
                form: Array<React.InputHTMLAttributes<HTMLInputElement>>
              }
              if (form[3]?.value !== e.target.value) {
                dispatch({type: 'rejected'})
              } else {
                dispatch({type: 'idle'})
              }
            }}
            cssNew={
              status === 'rejected'
                ? {
                    borderColor: colors.burgundyRed,
                  }
                : undefined
            }
            autoComplete="new-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            minLength={6}
            maxLength={20}
            required
          />
          {status === 'rejected' ? (
            <span css={warning} role="alert">
              Password Don&apos;t Match
            </span>
          ) : null}
          {newUserCreationFailed ? (
            <div css={warning} role="alert">
              {newUserCreationFailed}
            </div>
          ) : null}

          {status === 'pending' ? (
            <Spinner />
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
    </main>
  )
}

export default SignUp
