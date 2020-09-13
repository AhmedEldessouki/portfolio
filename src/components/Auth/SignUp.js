/**@jsx jsx */
import {jsx, css} from '@emotion/core'
import {Component, Fragment} from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {signUp} from '../../Store/Actions/AuthActions'
import {
  signWrapper,
  labelWrapper,
  spinner,
  warning,
  btnStyle,
  signWrapperInput,
  h1XL,
} from '../../Styles'
import Layout from '../Layout'

const INIT_PROPS = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
class FormikSignUp extends Component {
  state = {
    ...INIT_PROPS,
  }
  render() {
    const {
      errors,
      touched,
      isSubmitting,
      authError,
      auth,
      handleSubmit,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.props

    return (
      <Fragment>
        {!auth.uid ? (
          <Redirect to="/signin" />
        ) : (
          <Layout>
            <h1 css={h1XL}>Sign up</h1>
            <div
              css={css`
                width: 100%;
                display: flex;
                place-content: center;
              `}
            >
              <Form id="#sign-up" css={signWrapper} onSubmit={handleSubmit}>
                <label htmlFor="firstName" css={labelWrapper}>
                  <input
                    css={signWrapperInput}
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                  />
                  {errors.firstName && touched.firstName ? (
                    <span css={warning}>{errors.firstName}</span>
                  ) : null}
                </label>
                <label css={labelWrapper} htmlFor="lastName">
                  <Field
                    css={signWrapperInput}
                    name="lastName"
                    value={lastName}
                    id="lastName"
                    placeholder="Last Name"
                  />
                  {errors.lastName && touched.lastName ? (
                    <span css={warning}>{errors.lastName}</span>
                  ) : null}
                </label>
                <label css={labelWrapper} htmlFor="email">
                  <Field
                    css={signWrapperInput}
                    name="email"
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Email Address"
                  />
                  {errors.email && touched.email ? (
                    <span css={warning}>{errors.email}</span>
                  ) : null}
                </label>

                <label css={labelWrapper} htmlFor="password">
                  <Field
                    css={signWrapperInput}
                    name="password"
                    id="password"
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                  />
                  {errors.password && touched.password ? (
                    <span css={warning}>{errors.password}</span>
                  ) : null}
                </label>
                <label css={labelWrapper} htmlFor="confirmPassword">
                  <Field
                    css={signWrapperInput}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    placeholder="Re-Enter Password"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <span css={warning}>{errors.confirmPassword}</span>
                  ) : null}
                </label>
                {authError ? <div css={warning}>{authError}</div> : null}
                {isSubmitting ? (
                  <div
                    css={css`
                      width: 100%;
                    `}
                  >
                    <div css={spinner}></div>
                  </div>
                ) : (
                  <button type="submit" disabled={isSubmitting} css={btnStyle}>
                    Submit
                  </button>
                )}
              </Form>
            </div>
          </Layout>
        )}
      </Fragment>
    )
  }
}

const SignupSchema = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match")
      .required('Confirm Password is required'),
  }),
  mapPropsToValues: props => ({
    ...props,
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      if (values.firstName === 'admin') {
        bag.setErrors({firstName: 'Nice try!'})
      } else if (values.lastName === 'admin') {
        bag.setErrors({lastName: 'Nice try!'})
      } else {
        values.signUp(values)
        document.getElementById('sign-up').reset()
        bag.resetForm()
      }
      bag.setSubmitting(false)
    }, 2000)
  },
  displayName: 'SignUp',
})

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signUp: values => dispatch(signUp(values)),
  }
}
const SignUp = SignupSchema(FormikSignUp)
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
