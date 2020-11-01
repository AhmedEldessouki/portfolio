/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/core'
import {Fragment, useEffect, useState} from 'react'

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

import useAsync from '../../Utils/Custome-hooks/useAsync'

// eslint-disable-next-line no-shadow
function ContactMe() {
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [description, setDescription] = useState('')
  const [errPhoneNumber, setErrPhoneNumber] = useState(false)
  const [descriptionErr, setDescriptionErr] = useState('')
  const [contactNameErr, setContactNameErr] = useState('')
  const [phoneNumberErr, setPhoneNumberErr] = useState('')
  const [emailErr, setEmailErr] = useState('')

  const [, status, , dispatch] = useAsync()

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(phoneNumber)) {
      setErrPhoneNumber(true)
    } else setErrPhoneNumber(false)
    return () => {
      setErrPhoneNumber(false)
    }
  }, [phoneNumber])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: 'pending'})
    // Simulate back-end call
    setTimeout(() => {}, 1000)
    const arr = {contactName, email, phoneNumber, description}
    console.log(arr)
    contactedMe(arr)
    setTimeout(() => {
      setPhoneNumber('')
      setEmail('')
      setDescription('')
      setContactName('')
      setDescriptionErr(colors.aliceLightBlue)
      setContactNameErr(colors.aliceLightBlue)
      setPhoneNumberErr(colors.aliceLightBlue)
      setEmailErr(colors.aliceLightBlue)
      dispatch({type: 'ready'})
    }, 1000)
    return arr
  }
  return (
    <Fragment>
      <h1 css={h1XL}>Contact Me</h1>
      <form id="ContactMe" onSubmit={handleSubmit} css={wrapper}>
        <section>
          <label css={labelWrapper} htmlFor="contactName">
            <input
              css={[
                signWrapperInput,
                css`
                  border-color: ${contactNameErr};
                `,
              ]}
              onChange={e => setContactName(e.target.value)}
              onBlur={e =>
                e.target.validity.valid
                  ? setContactNameErr(colors.lightGreen)
                  : setContactNameErr(colors.burgundyRed)
              }
              name="contactName"
              id="contactName"
              value={contactName}
              pattern="[^\(\)0-9]*"
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
              onBlur={e =>
                e.target.validity.valid
                  ? setEmailErr(colors.lightGreen)
                  : setEmailErr(colors.burgundyRed)
              }
              css={[
                signWrapperInput,
                css`
                  border-color: ${emailErr};
                `,
              ]}
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
              css={[
                signWrapperInput,
                css`
                  border-color: ${phoneNumberErr};
                `,
              ]}
              onChange={e => setPhoneNumber(e.target.value)}
              onBlur={e =>
                e.target.validity.valid
                  ? setPhoneNumberErr(colors.lightGreen)
                  : setPhoneNumberErr(colors.burgundyRed)
              }
              name="phoneNumber"
              id="phoneNumber"
              inputMode="tel"
              value={phoneNumber}
              minLength={11}
              required
              maxLength={13}
              placeholder="Phone Number"
              pattern="^[0-9\b]+$"
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
            onBlur={e =>
              e.target.validity.valid
                ? setDescriptionErr(colors.lightGreen)
                : setDescriptionErr(colors.burgundyRed)
            }
            id="description"
            value={description}
            required
            placeholder="Description"
            minLength={10}
            maxLength={500}
            css={[
              textArea,
              css`
                border-color: ${descriptionErr};
              `,
            ]}
          />
        </label>
        {false ? (
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
            data-testid="submit"
            disabled={status === 'pending' ? true : false}
            css={btnStyle}
          >
            Submit
          </button>
        )}
        {/* {contError ? <span css={warning}>{contError}</span> : null} */}
      </form>
    </Fragment>
  )
}

export default ContactMe
