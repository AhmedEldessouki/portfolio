/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signIn } from '../../Store/Actions/AuthActions'
import Layout from '../Layout'
import {
  signWrapper,
  labelWrapper,
  signWrapperInput,
  h1XL,
  btnStyle,
} from '../../Styles'

const SignIn = ({ signIn, auth, authError }) => {
  const email = useFormInput('')
  const password = useFormInput('')

  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const handleChange = e => {
      setValue(e.target.value)
    }
    return { value, onChange: handleChange }
  }
  const handleSubmit = e => {
    e.preventDefault()
    const signInValues = {
      email: email.value,
      password: password.value,
    }
    signIn(signInValues)
  }
  return (
    <Fragment>
      {auth.uid ? (
        <Redirect to='/' />
      ) : (
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
              <div className='field-container'>
                <label htmlFor='email' css={labelWrapper}>
                  <input
                    css={signWrapperInput}
                    type='email'
                    id='email'
                    placeholder='Email'
                    {...email}
                  />
                </label>
                <label css={labelWrapper} htmlFor='password'>
                  <input
                    css={signWrapperInput}
                    {...password}
                    type='password'
                    id='password'
                    placeholder='Password'
                  />
                </label>
              </div>
              <button css={btnStyle} type='submit'>
                SignIn
              </button>
              {authError ? <p>{authError}</p> : null}
            </form>
          </div>
        </Layout>
      )}
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
