/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {sendMessage} from './utils'
import {
  wrapper,
  colors,
  spinner,
  btnStyle,
  warning,
  labelWrapper,
  textArea,
  h1XL,
  mq,
} from '../../Styles'
import Input from '../../Utils/Input'
import {ErrorMessageFallback, useAsync} from '../../Utils/util'
import {GrMail} from 'react-icons/gr'

function ContactForm() {
  const [phoneNumberFieldError, setPhoneNumberFieldError] = React.useState(
    false,
  )
  const [descriptionFieldError, setDescriptionFieldError] = React.useState('')
  const [sendMessageError, setSendMessageError] = React.useState('')
  const {status, dispatch} = useAsync()

  async function handleMessage(e) {
    e.preventDefault()
    dispatch({type: 'pending'})

    const {name, email, phoneNumber, description} = e.target.elements
    const newMessageData = {
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      description: description.value,
    }
    e.currentTarget.reset()

    const {error} = await sendMessage(newMessageData)

    if (error) {
      setSendMessageError(error)
    }
    setDescriptionFieldError(colors.darkBlue)
    dispatch({type: 'idle'})
  }
  return (
    <div
      css={{
        background: colors.backgroundShade,
      }}
    >
      <div css={{display: 'flex', placeItems: 'center', gap: '27px'}}>
        <h1 css={h1XL}>Contact Me</h1>
        <a href="mailto:nemoahmed534@gmail.com">
          <GrMail
            color={colors.whiteFaded}
            css={{
              width: 30,
              height: 30,
            }}
          />
        </a>
      </div>
      <ErrorBoundary
        FallbackComponent={ErrorMessageFallback}
        resetKeys={[status]}
      >
        <form
          id="ContactForm"
          onSubmit={handleMessage}
          css={[wrapper, {marginBottom: 0}]}
        >
          <div
            css={css`
              width: 48%;
              ${mq.phoneLarge} {
                width: 71%;
              }
              ${mq.s} {
                width: 89%;
              }
            `}
          >
            <Input
              name="name"
              pattern="[^\(\)0-9]*"
              placeholder="Name"
              required
              minLength={3}
              maxLength={30}
              inputMode="text"
              cleanColor={status === 'pending' ? true : false}
            />
            <Input
              name="email"
              type="email"
              inputMode="email"
              placeholder="Email Address"
              required
              cleanColor={status === 'pending' ? true : false}
            />
            <Input
              onBlur={e => {
                if (e.target.value.search(/^[0-9\b]+$/g)) {
                  setPhoneNumberFieldError(true)
                } else setPhoneNumberFieldError(false)
              }}
              name="phoneNumber"
              inputMode="tel"
              minLength={11}
              required
              maxLength={13}
              placeholder="Phone Number"
              pattern="^[0-9\b]+$"
              cleanColor={status === 'pending' ? true : false}
            />
            {phoneNumberFieldError ? (
              <span css={warning} role="alert">
                Invalid Phone Number
              </span>
            ) : null}
          </div>
          <div
            css={css`
              width: 48%;
              ${mq.phoneLarge} {
                width: 71%;
              }
              ${mq.s} {
                width: 89%;
              }
            `}
          >
            <label css={labelWrapper} htmlFor="description">
              <textarea
                name="description"
                id="description"
                aria-label="description"
                onBlur={e =>
                  e.target.validity.valid
                    ? setDescriptionFieldError(colors.lightGreen)
                    : setDescriptionFieldError(colors.burgundyRed)
                }
                required
                placeholder="Description"
                minLength={10}
                maxLength={500}
                css={[
                  textArea,
                  css`
                    border-color: ${descriptionFieldError};
                  `,
                ]}
              />
            </label>
          </div>
          {status === 'pending' ? (
            <div
              css={css`
                margin-top: 38px;
                margin-left: 42px;
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
          {sendMessageError ? (
            <span css={warning} role="alert">
              {sendMessageError}
            </span>
          ) : null}
        </form>
      </ErrorBoundary>
    </div>
  )
}

export default ContactForm
