/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Component } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { contactedMe } from '../../../Store/Actions/ContactedMeActions'
import {
  wrapper,
  colors,
  spinner,
  btnStyle,
  warning,
  labelWrapper,
  signWrapperInput,
  textArea,
  h1XL,
} from '../../../Styles'

const INIT_PROPS = {
  contactName: '',
  email: '',
  phoneNumber: '',
  description: '',
}

class MyContactMe extends Component {
  constructor() {
    super()
    this.state = {
      ...INIT_PROPS,
    }
  }

  render() {
    const {
      errors,
      touched,
      isSubmitting,
      handleChange,
      contError,
      contactName,
      email,
      phoneNumber,
      description,
    } = this.props
    return (
      <div
        css={css`
          max-width: 100%;
          background-color: ${colors.independenceBlue};
        `}
      >
        <h1 css={h1XL}>Contact Me</h1>
        <Form id={'ContactMe'} css={wrapper}>
          <div>
            <label css={labelWrapper} htmlFor='contactName'>
              <Field
                css={signWrapperInput}
                name='contactName'
                id='contactName'
                value={contactName}
                placeholder='Enter your name'
              />
              {errors.contactName && touched.contactName ? (
                <span css={warning}>{errors.contactName}</span>
              ) : null}
            </label>
            <label css={labelWrapper} htmlFor='email'>
              <Field
                css={signWrapperInput}
                name='email'
                id='email'
                value={email}
                type='email'
                placeholder='Email Address'
              />
              {errors.email && touched.email ? (
                <span css={warning}>{errors.email}</span>
              ) : null}
            </label>
            <label css={labelWrapper} htmlFor='phoneNumber'>
              <Field
                css={signWrapperInput}
                name='phoneNumber'
                id='phoneNumber'
                type='tel'
                value={phoneNumber}
                placeholder='Enter Your Phone Number'
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <span css={warning}>{errors.phoneNumber}</span>
              ) : null}
            </label>
          </div>
          <label css={labelWrapper} htmlFor='description'>
            <textarea
              name='description'
              id='description'
              onChange={handleChange}
              value={description}
              required
              placeholder='Please Enter Your Message Here...'
              css={textArea}
            />
          </label>
          {isSubmitting ? (
            <div
              css={css`
                width: 100%;
              `}
            >
              <div css={spinner}></div>
            </div>
          ) : (
            <button type='submit' disabled={isSubmitting} css={btnStyle}>
              Submit
            </button>
          )}
          {contError ? <span css={warning}>{contError}</span> : null}
        </Form>
      </div>
    )
  }
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ContactMeSchema = withFormik({
  validationSchema: Yup.object().shape({
    contactName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string()
      .min(11, 'Too Short!')
      .max(13, 'Too Long!')
      .matches(phoneRegExp, 'Phone number is invalid'),
    description: Yup.string(),
  }),
  enableReinitialize: true,
  mapPropsToValues: props => ({
    ...props,
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, { setErrors, resetForm, setSubmitting }) => {
    setTimeout(() => {
      if (values.name === 'admin') {
        setErrors({ contactName: 'Nice try!' })
      } else {
        values.contactedMe(values)
        resetForm({})
        document.getElementById('ContactMe').reset()
      }
      setSubmitting(false)
    }, 2000)
  },
  displayName: 'ContactMe',
})
const mapStateToProps = state => {
  return {
    contError: state.contactedMe.contError,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    contactedMe: contact => dispatch(contactedMe(contact)),
  }
}
const ContactMe = ContactMeSchema(MyContactMe)
export default connect(mapStateToProps, mapDispatchToProps)(ContactMe)
