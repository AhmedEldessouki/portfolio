import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Styles/SignUp.scss'
import { red } from 'ansi-colors';


class SignUp extends Component {
  render() {
    const { errors, touched, isSubmitting } = this.props;
    return (
      <div className="SignUp">
        <h1>Signup</h1>
        <Form>
          <Field name="firstName" placeholder="First Name" />
          {errors.firstName && touched.firstName ? (
            <div className="testtest">{errors.firstName}</div>
          ) : null}
          <Field name="lastName" placeholder="Last Name"/>
          {errors.lastName && touched.lastName ? (
            <div className="testtest">{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" placeholder="Email Name"/>
          {errors.email && touched.email ? <div className="testtest" style={{ color: red, fontSize: 10 }}>{errors.email}</div> : null}
          <button type="submit" disabled={isSubmitting} >Submit</button>
        </Form>
      </div>
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
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  }),
  mapPropsToValues: props => ({
    firstName: '',
    lastName: '',
    email: '',
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      if (values.firstName === 'admin') {
        bag.setErrors({ firstName: 'Nice try!' });
      } else if (values.lastName === 'admin') {
        bag.setErrors({ lastName: 'Nice try!' });
      } else {
        console.log(values);
        bag.resetForm()
      }
      bag.setSubmitting(false);
    }, 2000)
  },
  displayName: 'FormikForm',
});
const FormikForm = SignupSchema(SignUp);
export default FormikForm