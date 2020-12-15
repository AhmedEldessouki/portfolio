/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import {contactedMe} from './utils'
import {
  wrapper,
  colors,
  spinner,
  btnStyle,
  warning,
  labelWrapper,
  textArea,
  h1XL,
} from '../../Styles'
import Input from '../../Utils/Input'
import {useAsync} from '../../Utils/util'

function ContactMe() {
  const [errPhoneNumber, setErrPhoneNumber] = React.useState(false)
  const [descriptionErr, setDescriptionErr] = React.useState('')
  const [contError, setContError] = React.useState('')

  const {status, dispatch} = useAsync()

  async function handleSubmit(e) {
    e.preventDefault()
    dispatch({type: 'pending'})

    const {name, email, phoneNumber, description} = e.target.elements
    const formData = {
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      description: description.value,
    }
    e.currentTarget.reset()
    const {error} = await contactedMe(formData)

    if (error) {
      setContError(error)
    }
    setDescriptionErr(colors.aliceLightBlue)
    dispatch({type: 'idle'})
  }
  return (
    <React.Fragment>
      <h1 css={h1XL}>Contact Me</h1>
      <form id="ContactMe" onSubmit={handleSubmit} css={wrapper}>
        <section>
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
                setErrPhoneNumber(true)
              } else setErrPhoneNumber(false)
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
          {errPhoneNumber ? (
            <span css={warning}>Invalid Phone Number</span>
          ) : null}
        </section>
        <label css={labelWrapper} htmlFor="description">
          <textarea
            name="description"
            onBlur={e =>
              e.target.validity.valid
                ? setDescriptionErr(colors.lightGreen)
                : setDescriptionErr(colors.burgundyRed)
            }
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
        {contError ? (
          <span css={warning} type="alert">
            {contError}
          </span>
        ) : null}
      </form>
    </React.Fragment>
  )
}

export default ContactMe
