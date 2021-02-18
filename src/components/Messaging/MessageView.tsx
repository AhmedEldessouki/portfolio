/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import type {Message} from '../../../types/interfaces'

import {h1XL, colors, mq} from '../../Styles'
import {replaceWhiteSpaceWith} from '../../Utils/replaceWhiteSpaceWith'

function MessageView({message}: {message: Message}) {
  const [description, setDescription] = React.useState(message.description)
  const container = css`
    display: grid;
    place-content: center;
    place-items: center;
    grid-gap: 0px 17px;
    place-content: inherit;
    ${mq.phoneLarge} {
      grid-gap: 15px;
    }
  `
  const forH1 = css`
    grid-column: 1 / span 3;
    grid-row: 1;
    place-self: baseline;
    ${mq.phoneLarge} {
      grid-column: 1;
    }
  `
  const phoneAndEmailWrapper = css`
    grid-column: 1;
    grid-row: 2;
    background-color: ${colors.darkBlue};
    padding: 30px 19px;
    margin-left: 17px;
    border-radius: 5%;

    ${mq.phoneLarge} {
      width: 80%;
      margin-left: 0;
      grid-column: 1;
      grid-row: 2;
      padding: 20px 10px;
      & > h2 {
        font-size: 124%;
      }
    }
  `

  const midWrapper = css`
    grid-column: 2;
    grid-row: 2;
    place-self: center;
    font-size: 175%;
    width: 61vw;
    background-color: ${colors.darkBlue};
    padding: 10px 26px;
    width: 80%;
    ${mq.phoneLarge} {
      grid-column: 1;
      grid-row: 3;
      padding: 10px 13px;
      font-size: 150%;
    }
  `
  const lowerWrapper = css`
    grid-column: 2 / span 2;
    grid-row: 3;
    place-self: end;
    padding-right: 17px;
    ${mq.phoneLarge} {
      grid-column: 1;
      grid-row: 4;
      font-size: 117%;
    }
  `
  React.useEffect(() => {
    if (description !== message.description) setDescription(message.description)
  }, [description, message.description])

  return (
    <section
      aria-current="true"
      css={container}
      id={replaceWhiteSpaceWith(message.name, '-')}
    >
      <h1 css={[h1XL, forH1]}>{message.name.toUpperCase()}</h1>
      <div css={phoneAndEmailWrapper}>
        <h2>
          Phone Number:
          {message.phoneNumber}
        </h2>
        <h2>
          Email: <a href={`mailto:${message.email}`}>{message.email}</a>
        </h2>
      </div>
      <textarea
        disabled
        rows={7}
        wrap="hard"
        maxLength={description.length}
        css={[
          css`
            resize: none;
            place-self: center;
            padding: 10px 1%;
            font-size: 1.45rem;
            letter-spacing: 0.4px;
            background: ${colors.independenceBlue};
            color: ${colors.lightBlue};
            border: 5px solid ${colors.darkBlue};
            margin-bottom: 23.2px;
            min-width: 80%;
            border-radius: 4.2%;
          `,
          midWrapper,
        ]}
        value={description}
        readOnly
      />
      <h3 css={lowerWrapper}>
        Msg Received: {message.date?.toDate().toDateString()}
      </h3>
    </section>
  )
}

export default MessageView
