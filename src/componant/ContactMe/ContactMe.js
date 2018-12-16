import './ContactMe.scss'
import React, { Component } from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

class MyContactMe extends Component {
  render() {
    const { errors, touched, isSubmitting, handleChange, handleSubmit } = this.props
    return (
      <div className="ContactMe">
        <h1>Contact Me</h1>
        <Form>
          <div className="first-container">
            <div className="field-container">
              <Field name="name" placeholder="Enter Your Name" />
              {errors.name && touched.name ? (
                <p className="error-message">{errors.name}</p>
              ) : null}
            </div>
            <div className="field-container">
              <Field name="email" type="email" placeholder="Email Address" />
              {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
            </div>
            <div className="field-container">
              <Field name="phoneNumber" type="tel" placeholder="Enter Your Phone Number" />
              {errors.phoneNumber && touched.phoneNumber ? <div className="error-message">{errors.phoneNumber}</div> : null}
            </div>
          </div>
          <div className="second-container">
            <textarea name="description" className="textArea" onChange={handleChange} type="textarea" />
          </div>
          <button type="submit" disabled={isSubmitting} >Submit</button>
        </Form>
      </div>
    )
  }
}


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ContactMeSchema = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    phoneNumber: Yup.string()
      .min(11, 'Too Short!')
      .max(13, 'Too Long!')
      .matches(phoneRegExp, 'Phone number is not valid'),
  }),
  enableReinitialize: true,
  mapPropsToValues: props => ({
    name: '',
    email: '',
    phoneNumber: '',
    description: ''
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      const form = axios.post('/api/form', {
        values
      })
      if (values.name === 'admin') {
        bag.setErrors({ name: 'Nice try!' });
      } else {
        console.log(values);
        bag.resetForm()
      }
      bag.setSubmitting(false);
    }, 2000)
  },
  displayName: 'FormikForm',
});
const ContactMe = ContactMeSchema(MyContactMe);
export default ContactMe