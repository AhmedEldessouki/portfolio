/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'

import {useAuth} from '../../context/AuthProvider'
import Layout from '../Layout'
import {formWrapper, warning, btnStyle, h1XL, colors} from '../Styles'
import Input from '../Utils/Input'
import {useAsync} from '../Utils/hooks'
import {NewUser} from '../Utils/interfaces'
import {Spinner} from '../Utils/util'

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
    <Layout>
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
          css={[formWrapper, {gap: 6}]}
          onSubmit={submitNewUserCredentials}
        >
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
            cleanColor={status === 'resolved'}
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
            cleanColor={status === 'resolved'}
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
    </Layout>
  )
}

export default SignUp
