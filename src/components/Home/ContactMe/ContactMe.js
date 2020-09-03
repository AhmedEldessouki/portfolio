/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaAddressCard, FaPhoneSquare } from 'react-icons/fa';
import { GoMention } from 'react-icons/go';
import { contactedMe } from '../../../Store/Actions/ContactedMeActions';
import { BarLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { wrapper, colors, spinner, btnStyle } from '../../../Styles';

const INIT_PROPS = {
  contactName: '',
  email: '',
  phoneNumber: '',
  description: '',
};

class MyContactMe extends Component {
  constructor() {
    super();
    this.state = {
      ...INIT_PROPS,
    };
  }
  forInput = css`
    width: 280px;
    height: 25px;
    padding: 5px;
  `;
  forLabel = css`
    display: block;
    width: 310px;
    padding: 10px;
  `;
  warning = css`
    color: ${colors.red};
    padding-left: 16px;
  `;

  spinner = css`
    @keyframes spinner {
      0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
      }
      100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
      }
    }
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 10px ${colors.aliceLightBlue};
    border-bottom-color: ${colors.kindaBlue};
    border-radius: 50%;
    content: '';
    height: 40px;
    width: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  `;
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
    } = this.props;
    return (
      <div
        css={css`
          max-width: 100%;
          padding: 20px;
          background-color: ${colors.independenceBlue};
        `}
      >
        <h1>Contact Me</h1>
        <Form id={'ContactMe'} css={wrapper}>
          <div>
            <label css={this.forLabel} htmlFor='contactName'>
              <FaAddressCard />
              <Field
                css={this.forInput}
                name='contactName'
                id='contactName'
                value={contactName}
                placeholder='Enter your name'
              />
              {errors.contactName && touched.contactName ? (
                <span css={this.warning}>{errors.contactName}</span>
              ) : null}
            </label>
            <label css={this.forLabel} htmlFor='email'>
              <GoMention />
              <Field
                css={this.forInput}
                name='email'
                id='email'
                value={email}
                type='email'
                placeholder='Email Address'
              />
              {errors.email && touched.email ? (
                <span css={this.warning}>{errors.email}</span>
              ) : null}
            </label>
            <label css={this.forLabel} htmlFor='phoneNumber'>
              <div className='input-svg'>
                <FaPhoneSquare />
                <Field
                  css={this.forInput}
                  name='phoneNumber'
                  id='phoneNumber'
                  type='tel'
                  value={phoneNumber}
                  placeholder='Enter Your Phone Number'
                />
              </div>
              {errors.phoneNumber && touched.phoneNumber ? (
                <span css={this.warning}>{errors.phoneNumber}</span>
              ) : null}
            </label>
          </div>
          <label css={this.forLabel} htmlFor='description'>
            <textarea
              name='description'
              id='description'
              onChange={handleChange}
              value={description}
              className='textArea'
              required
              css={css`
                min-width: 310px;
                min-height: 150px;
              `}
            />
          </label>
          {isSubmitting ? (
            <div
              css={css`
                width: 100%;
              `}
            >
              <div css={this.spinner}></div>
            </div>
          ) : (
            <button type='submit' disabled={isSubmitting} css={btnStyle}>
              Submit
            </button>
          )}
          {contError ? <span css={this.warning}>{contError}</span> : null}
        </Form>
      </div>
    );
  }
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
        setErrors({ contactName: 'Nice try!' });
      } else {
        values.contactedMe(values);
        resetForm({});
        document.getElementById('ContactMe').reset();
      }
      setSubmitting(false);
    }, 2000);
  },
  displayName: 'ContactMe',
});
const mapStateToProps = state => {
  return {
    contError: state.contactedMe.contError,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    contactedMe: contact => dispatch(contactedMe(contact)),
  };
};
const ContactMe = ContactMeSchema(MyContactMe);
export default connect(mapStateToProps, mapDispatchToProps)(ContactMe);
