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
    display: flex;
    background-color: ${colors.independenceBlue};
    place-content: space-between;
    border: 6px solid ${colors.darkBlue};
    border-radius: 10px;
    font-family: 'Merienda One', cursive;
    padding: 20px 18px;
    width: 300px;
    & > a {
      color: ${colors.aliceLightBlue};
    }
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
      <PopUp title={message.name} fn={() => deleteMessage(message)} />
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
