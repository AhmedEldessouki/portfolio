/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {h1XL} from '../../Styles'
import OnToggle from '../OnToggle'
import ErrorMessageFallback from '../ErrorMessageFallback'

import type {
  Message as MessageInterface,
  ProjectInterface,
} from '../../../types/interfaces'
import MessageView from './MessageView'
import MessagesSummary from './MessageCard'

const mWrapper = css`
  margin: 0 10px;
  padding: 20px 10px;
  display: grid;
  grid-gap: 25px;
  place-items: center;
  place-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1.5fr));
`

function MessagesComponent({
  messagesData,
}: {
  messagesData: Array<MessageInterface>
}) {
  const [displayMessage, setDisplayMessage] = React.useState<
    MessageInterface | undefined | ProjectInterface
  >()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedRef = React.useRef<any>()
  const moveFocus = () => selectedRef.current?.moveFocus()

  React.useEffect(() => {
    moveFocus()
  }, [displayMessage])

  if (!messagesData || messagesData.length < 0) {
    return (
      <p role="alert">
        Ooops Something is not right{' '}
        <span role="img" aria-label="Exploding head">
          🤯🤯
        </span>
      </p>
    )
  }
  return (
    <React.Fragment>
      <h1 css={h1XL}>Messages</h1>
      {displayMessage ? (
        <OnToggle
          items={messagesData}
          displayedData={displayMessage}
          setDisplayData={setDisplayMessage}
          ref={selectedRef}
        >
          <MessageView message={displayMessage as MessageInterface} />
        </OnToggle>
      ) : (
        <div css={mWrapper}>
          {messagesData?.map(message => (
            <MessagesSummary
              key={message.id}
              setMessageFunc={() => setDisplayMessage(message)}
              message={message}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

const Messages = React.memo(
  ({messagesData}: {messagesData: Array<MessageInterface>}) => (
    <ErrorBoundary
      resetKeys={[messagesData]}
      FallbackComponent={ErrorMessageFallback}
    >
      <MessagesComponent messagesData={messagesData} />
    </ErrorBoundary>
  ),
  (prevProps, nextProps) =>
    JSON.stringify(prevProps) === JSON.stringify(nextProps),
)

export default Messages
