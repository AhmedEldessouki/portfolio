/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import type {Message} from '../../../types/interfaces'

import {colors, h1XL} from '../../Styles'
import PopUp from '../PopUp/PopUp'
import {deleteMessage} from '../../Utils/apis'
import {replaceWhiteSpaceWith} from '../../Utils/replaceWhiteSpaceWith'

function MessagesSummary({
  message,
  setMessageFunc,
}: {
  message: Message
  setMessageFunc(): void
}) {
  const messagesSummary = css`
    display: flex;
    background-color: ${colors.independenceBlue};
    place-content: space-between;
    border: 6px solid ${colors.darkBlue};
    border-radius: 10px;
    font-family: 'Merienda One', cursive;
    padding: 5px 18px;
    min-width: 250px;
  `

  const btn = css`
    border: 0;
    margin: 0;
    background: none;
    color: ${colors.darkBlue};
    :hover {
      color: ${colors.kindaBlue};
    }
  `
  const idByName = replaceWhiteSpaceWith(message.name, '-')
  return (
    <div css={messagesSummary}>
      <button css={btn} onClick={setMessageFunc} aria-pressed="false">
        <h2
          css={[
            h1XL,
            css`
              padding: 0;
              margin: 0;
            `,
          ]}
          id={idByName}
        >
          {message.name}
        </h2>
      </button>
      <PopUp
        info={`this message from ${message.name}`}
        onClickYes={() => deleteMessage(message)}
        controls={idByName}
      />
    </div>
  )
}

export default MessagesSummary
