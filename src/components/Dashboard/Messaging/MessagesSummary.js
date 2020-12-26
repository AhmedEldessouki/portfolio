/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {ErrorBoundary} from 'react-error-boundary'

import {colors, h1XL} from '../../Styles'
import PopUp from '../../Utils/PopUp/PopUp'
import {ErrorMessage} from '../../Utils/util'
import {deleteMessage} from './utils'

function MessagesSummaryComponent({message, fn}) {
  const messagesSummary = css`
    display: flex;
    background-color: ${colors.independenceBlue};
    place-content: space-between;
    border: 6px solid ${colors.darkBlue};
    border-radius: 10px;
    font-family: 'Merienda One', cursive;
    padding: 5px 18px;
    width: 250px;
    place-items: flex-start;
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
      <PopUp title={message.name} onClick={() => deleteMessage(message)} />
    </div>
  )
}

function MessagesSummary({message, fn}) {
  return (
    <ErrorBoundary fallback={<ErrorMessage />} resetKeys={[message]}>
      <MessagesSummaryComponent message={message} fn={fn} />
    </ErrorBoundary>
  )
}

export default MessagesSummary
