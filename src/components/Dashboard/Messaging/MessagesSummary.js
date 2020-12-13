/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {deleteMessage} from './utils'

import {colors, h1XL} from '../../Styles'
import PopUp from '../../Utils/PopUp/PopUp'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorMessage} from '../../Utils/util'

function MessagesSummaryComponent({message, fn}) {
  const messagesSummary = css`
    overflow: auto;
    display: grid;
    background-color: ${colors.independenceBlue};
    grid-gap: 5px;
    height: 220px;
    place-items: center;
    border: 6px solid ${colors.darkBlue};
    border-radius: 10px;
    font-family: 'Merienda One', cursive;
    & > a {
      color: ${colors.aliceLightBlue};
    }
  `

  const childN = css`
    border: 0;
    grid-row: 1;
    grid-column: 1 / span 2;
    place-self: baseline;
    margin: 0;
    place-self: baseline;
  `
  const childP = css`
    grid-row: 2;
    grid-column: 1 / span 3;
    padding: 0 4%;
    height: 98px;
    overflow: hidden;
  `
  const childD = css`
    grid-row: 3;
    grid-column: 1 / span 3;
  `
  const childB = css`
    grid-column: 3;
    padding-right: 11px;
  `
  return (
    <div css={messagesSummary}>
      <button css={childN} onClick={fn}>
        <h2 css={h1XL}>{message.contactName}</h2>
      </button>
      <div css={childB}>
        <PopUp title={message.contactName} fn={() => deleteMessage(message)} />
      </div>
      <p css={childP}>{message.description}</p>
      <span css={childD}>
        {message.sentAt?.toDate().toDateString() ?? 11 - 11 - 1111}
      </span>
    </div>
  )
}

function MessagesSummary({message, ...props}) {
  return (
    <ErrorBoundary
      fallback={<ErrorMessage />}
      onReset={() => (props.message = null)}
      resetKeys={[message]}
    >
      <MessagesSummaryComponent message={message} {...props} />
    </ErrorBoundary>
  )
}

export default MessagesSummary
