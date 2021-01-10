/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {ErrorBoundary} from 'react-error-boundary'

import {colors, h1XL} from '../../Styles'
import PopUp from '../../Utils/PopUp/PopUp'
import {ErrorMessageFallback} from '../../Utils/util'
import {deleteMessage} from './utils'

function MessageCard({message, fn}) {
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

  return (
    <div css={messagesSummary}>
      <button css={btn} onClick={fn}>
        <h2
          css={[
            h1XL,
            css`
              padding: 0;
              margin: 0;
            `,
          ]}
        >
          {message.name}
        </h2>
      </button>
      <PopUp
        info={`this message from ${message.name}`}
        onClickYes={() => deleteMessage(message)}
      />
    </div>
  )
}

function MessagesSummary({message, fn}) {
  return (
    <ErrorBoundary
      fallbackComponent={ErrorMessageFallback}
      resetKeys={[message]}
    >
      <MessageCard message={message} fn={fn} />
    </ErrorBoundary>
  )
}

export default MessagesSummary
