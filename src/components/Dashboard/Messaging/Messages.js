/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {h1XL} from '../../Styles'
import OnToggle from '../../Utils/OnToggle'
import {ErrorMessageFallback} from '../../Utils/util'

import MessageView from './MessageView'
import MessagesSummary from './MessageCard'

function MessagesComponent({messagesData}) {
  const [messageSel, setMessageSel] = React.useState(null)
  const selectedRef = React.useRef()
  const moveFocus = () => selectedRef.current?.moveFocus()

  React.useEffect(() => {
    moveFocus()
  }, [messageSel])

  const mWrapper = css`
    margin: 0 10px;
    padding: 20px 10px;
    display: grid;
    grid-gap: 25px;
    place-items: center;
    place-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1.5fr));
  `

  return (
    <React.Fragment>
      <h1 css={h1XL}>Messages</h1>
      {messageSel ? (
        <OnToggle
          items={messagesData}
          selected={messageSel}
          setSelected={setMessageSel}
          ref={selectedRef}
        >
          <MessageView message={messageSel} />
        </OnToggle>
      ) : (
        <div css={mWrapper}>
          {messagesData?.map(message => {
            return (
              <MessagesSummary
                key={message.id}
                setMessageFunc={() => setMessageSel(message)}
                message={message}
              />
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

function Messages({messagesData}) {
  return (
    <ErrorBoundary
      resetKeys={[messagesData]}
      fallbackComponent={ErrorMessageFallback}
    >
      <MessagesComponent messagesData={messagesData} />
    </ErrorBoundary>
  )
}

export default Messages
