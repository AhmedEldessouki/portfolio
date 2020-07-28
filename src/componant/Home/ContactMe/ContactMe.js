import './ContactMe.scss'
import React, { Component } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { FaAddressCard, FaPhoneSquare } from 'react-icons/fa'
import { GoMention } from 'react-icons/go'
import { contactedMe } from '../../../Store/Actions/ContactedMeActions'
import { BarLoader } from 'react-spinners'
import { connect } from 'react-redux'

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
      <div className="ContactMe">
        <h1>Contact Me</h1>
        <Form id={'ContactMe'}>
          <div className="first-container">
            <label className="field-container" htmlFor="contactName">
              <div className="input-svg">
                <FaAddressCard />
                <Field
                  name="contactName"
                  id="contactName"
                  value={contactName}
                  placeholder="Enter your name"
                />
              </div>
              {errors.contactName && touched.contactName ? (
                <p className="error-message">{errors.contactName}</p>
              ) : null}
            </label>
            <div className="field-container">
              <label className="input-svg" htmlFor="email">
                <GoMention />
                <Field
                  name="email"
                  id="email"
                  value={email}
                  type="email"
                  placeholder="Email Address"
                />
              </label>
              {errors.email && touched.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </div>
            <label className="field-container" htmlFor="phoneNumber">
              <div className="input-svg">
                <FaPhoneSquare />
                <Field
                  name="phoneNumber"
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              {errors.phoneNumber && touched.phoneNumber ? (
                <label className="error-message">{errors.phoneNumber}</label>
              ) : null}
            </label>
          </div>
          <label className="second-container" htmlFor="description">
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={description}
              className="textArea"
              required
            />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {contError ? <div className="error-message">{contError}</div> : null}
        </Form>
        {isSubmitting ? (
          <div className="my-spinner-container">
            <span>Thank you for contacting me</span>
            <BarLoader
              className="my-spinner"
              sizeUnit={'px'}
              size={150}
              color={'#d4dff6'}
              loading={isSubmitting}
            />
            <span>I will get back to you soon</span>
          </div>
        ) : null}
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
      .matches(phoneRegExp, 'Phone number is not valid'),
    description: Yup.string(),
  }),
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    ...props,
  }),
  mapValuesToPayload: (x) => x,
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
const mapStateToProps = (state) => {
  return {
    contError: state.contactedMe.contError,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    contactedMe: (contact) => dispatch(contactedMe(contact)),
  }
}
const ContactMe = ContactMeSchema(MyContactMe)
export default connect(mapStateToProps, mapDispatchToProps)(ContactMe)
