/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {useEffect, useState} from 'react'
import {connect} from 'react-redux'

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
import {contactedMe} from '../../../Store/Actions/ContactedMeActions'

// eslint-disable-next-line no-shadow
function ContactMe({contError, contactedMe}) {
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [description, setDescription] = useState('')
  const [errPhoneNumber, setErrPhoneNumber] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (phoneNumber.length <= 11 || phoneNumber.length >= 13)
      setErrPhoneNumber(true)
    // eslint-disable-next-line no-restricted-globals
    else if (isNaN(phoneNumber)) setErrPhoneNumber(true)

    return () => {
      setErrPhoneNumber(false)
    }
  }, [phoneNumber])

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    const arr = {contactName, email, phoneNumber, description}
    await contactedMe(arr)

    setTimeout(() => {
      setPhoneNumber('')
      setEmail('')
      setDescription('')
      setContactName('')
    }, 1000)
    setIsSubmitting(false)
  }
  return (
    <div
      css={css`
        max-width: 100%;
        background-color: ${colors.independenceBlue};
      `}
    >
      <h1 css={h1XL}>Contact Me</h1>
      <form id="ContactMe" onSubmit={handleSubmit} css={wrapper}>
        <section>
          <label css={labelWrapper} htmlFor="contactName">
            <input
              css={signWrapperInput}
              onChange={e => setContactName(e.target.value)}
              name="contactName"
              id="contactName"
              value={contactName}
              placeholder="Name"
              required
              minLength={3}
              maxLength={30}
              inputMode="text"
            />
          </label>
          <label css={labelWrapper} htmlFor="email">
            <input
              onChange={e => setEmail(e.target.value)}
              css={signWrapperInput}
              name="email"
              id="email"
              value={email}
              type="email"
              inputMode="email"
              placeholder="Email Address"
              required
            />
          </label>
          <label css={labelWrapper} htmlFor="phoneNumber">
            <input
              css={signWrapperInput}
              onChange={e => setPhoneNumber(e.target.value)}
              name="phoneNumber"
              id="phoneNumber"
              inputMode="tel"
              value={phoneNumber}
              minLength={11}
              required
              maxLength={13}
              placeholder="Phone Number"
            />
            {errPhoneNumber ? (
              <span css={warning}>Invalid Phone Number</span>
            ) : null}
          </label>
        </section>
        <label css={labelWrapper} htmlFor="description">
          <textarea
            name="description"
            onChange={e => setDescription(e.target.value)}
            id="description"
            value={description}
            required
            placeholder="Description"
            css={textArea}
          />
        </label>
        {isSubmitting ? (
          <div
            css={css`
              width: 100%;
            `}
          >
            <div css={spinner} />
          </div>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting || errPhoneNumber}
            css={btnStyle}
          >
            Submit
          </button>
        )}
        {contError ? <span css={warning}>{contError}</span> : null}
      </form>
    </div>
  )
}

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
export default connect(mapStateToProps, mapDispatchToProps)(ContactMe)
