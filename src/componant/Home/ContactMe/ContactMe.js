import './ContactMe.scss'
import React, { Component } from 'react'
// import { withFormik, Form, Field } from 'formik'
// import * as Yup from 'yup';
// import axios from 'axios';
import { FaAddressCard, FaPhoneSquare } from "react-icons/fa"
import { GoMention } from "react-icons/go"
import {contactedMe} from "../../../Store/Actions/ContactedMeActions";
import connect from "react-redux/es/connect/connect";

class ContactMe extends Component {
  constructor() {
    super ();
    this.state = {
      contactName: '',
      email: '',
      phoneNumber: '',
      description: '',
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  };

  handleSubmit = (e) =>{
    e.preventDefault();
    {/*<Redirect to="/dashboard"/>*/}
    this.props.contactedMe(this.state)
    document.getElementById("ContactMe").reset();
    // this.props.history.push('/');
  };
  render() {
    // const { errors, touched, isSubmitting, handleChange, contError } = this.props;
    const {contError} = this.props
    return (
      <div className="ContactMe">
        <h1>Contact Me</h1>
        <form onSubmit={this.handleSubmit} id="ContactMe" method="form">
          <div className="first-container">
            <div className="field-container">
              <div className="input-svg">
                <FaAddressCard />
                <input type="text"  placeholder="Project Name" id="contactName" onChange={this.handleChange}/>

              </div>
              {/*{errors.name && touched.name ? (*/}
                {/*<p className="error-message">{errors.name}</p>*/}
              {/*) : null}*/}
            </div>
            <div className="field-container">
              <div className="input-svg">
                <GoMention />
                <input id="email" onChange={this.handleChange} type="email" placeholder="Email Address" />
              </div>
              {/*{errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}*/}
            </div>
            <div className="field-container">
              <div className="input-svg">
                <FaPhoneSquare />
                <input id="phoneNumber" onChange={this.handleChange} type="tel" placeholder="Enter Your Phone Number" />
              </div>
              {/*{errors.phoneNumber && touched.phoneNumber ? <div className="error-message">{errors.phoneNumber}</div> : null}*/}
            </div>
          </div>
          <div className="second-container">
            <textarea id="description" onChange={this.handleChange} className="textArea" required />
          </div>
          <button type="submit"  >Submit</button>
          {contError? <div className="error-message">{contError}</div> : null }
        </form>
      </div>
    )
  }
}


// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//
// const ContactMeSchema = withFormik({
//   validationSchema: Yup.object().shape({
//     name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//     email: Yup.string()
//     .email('Invalid email')
//     .required('Required'),
//     phoneNumber: Yup.string()
//     .min(11, 'Too Short!')
//     .max(13, 'Too Long!')
//     .matches(phoneRegExp, 'Phone number is not valid'),
//     description: Yup.string()
//   }),
//   enableReinitialize: true,
//   mapPropsToValues: props => ({
//     ...props
//   }),
//   mapValuesToPayload: x => x,
//   handleSubmit: (values, bag) => {
//     // const {
//     //   name,
//     //   email,
//     //   phoneNumber,
//     //   description } = values;
//     // const form = axios.post('/api/form', {
//     //   name,
//     //   email,
//     //   phoneNumber,
//     //   description
//     // });
//     setTimeout(() => {
//       if (values.name === 'admin') {
//         bag.setErrors({ name: 'Nice try!' });
//       } else {
//         console.log('contact me values:',values);
//         // values.contactedMe(values)
//         values.history.push('/');
//         bag.resetForm()
//       }
//       bag.setSubmitting(false);
//     }, 2000)
//   },
//   displayName: 'ContactMe',
// });
const mapStateToProps = (state) =>{
  return{
    auth:state.firebase.auth,
    contError: state.contactedMe.contError
  }}
const mapDispatchToProps = (dispatch) =>{
  return{
    contactedMe: (contact) => dispatch(contactedMe(contact))
  }
};
// const ContactMe = ContactMeSchema(MyContactMe);
// export default connect(mapStateToProps, mapDispatchToProps)(ContactMe);
export default connect(mapStateToProps, mapDispatchToProps)(ContactMe);
