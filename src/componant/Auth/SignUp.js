import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Styles/SignUp.scss'
import connect from "react-redux/es/connect/connect";
import {Redirect} from "react-router-dom";
import {signUp} from "../../Store/Actions/AuthActions";
import {BarLoader} from "react-spinners";


class FormikSignUp extends Component {
  render() {
    const { errors, touched, isSubmitting, authError, auth, handleSubmit } = this.props;

    return (
      <div>
        {!auth.uid ? <Redirect to='/signin'/> :
          <div className="SignUp">
            <h1>Sign up</h1>
            <Form onSubmit={handleSubmit}>
              <div className="double-container">
                <div className="field-container">
                  <Field name="firstName" placeholder="First Name" />
                  {errors.firstName && touched.firstName ? (
                    <p className="error-message">{errors.firstName}</p>
                  ) : null}
                </div>
                <div className="field-container">
                  <Field name="lastName" placeholder="Last Name" />
                  {errors.lastName && touched.lastName ? (
                    <div className="error-message">{errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div className="field-container">
                <Field name="email" type="email" placeholder="Email Address" />
                {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
              </div>
              <div className="double-container">
                <div className="field-container">
                  <Field name="password" type="password" placeholder="Enter Password" />
                  {errors.password && touched.password ? <div className="error-message">{errors.password}</div> : null}
                </div>
                <div className="field-container">
                  <Field name="confirmPassword" type="password" placeholder="Re-Enter Password" />
                  {errors.confirmPassword && touched.confirmPassword ? <div className="error-message">{errors.confirmPassword}</div> : null}
                </div>
                {authError ? <div className="error-message">{authError}</div>  : null}
              </div>
              <button type="submit" disabled={isSubmitting} >Submit</button>
            </Form>
            {isSubmitting ?  <div className="my-spinner-container">
              <BarLoader
                className="my-spinner"
                sizeUnit={"px"}
                size={150}
                color={'#d4dff6'}
                loading={isSubmitting}
              />Loading...</div> : null}
          </div>
        }
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
    password: Yup.string()
    .min(6, 'Too Short!')
    .required('Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords don't match")
    .required('Confirm Password is required')
  }),
  mapPropsToValues: props => ({
...props
  }),
  mapValuesToPayload: x => x,
  handleSubmit: (values, bag) => {
    setTimeout(() => {
      if (values.firstName === 'admin') {
        bag.setErrors({ firstName: 'Nice try!' });
      } else if (values.lastName === 'admin') {
        bag.setErrors({ lastName: 'Nice try!' });
      } else {
        values.signUp(values)
        bag.resetForm()
      }
      bag.setSubmitting(false);
    }, 2000)
  },
  displayName: 'SignUp',
});

const mapStateToProps = (state) =>{
  return{
    auth:state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps= (dispatch) => {
  return{
    signUp: (values) => dispatch(signUp(values))
  }
}
const SignUp = SignupSchema(FormikSignUp);
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)