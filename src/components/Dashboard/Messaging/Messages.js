/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

import {h1XL} from '../../Styles'
import OnToggle from '../../Utils/OnToggle'
import {ErrorMessage} from '../../Utils/util'

import MessageDetails from './MessageDetails'
import MessagesSummary from './MessagesSummary'

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
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1.5fr));
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
          <MessageDetails message={messageSel} />
        </OnToggle>
      ) : (
        <div css={mWrapper}>
          {messagesData?.map(message => {
            return (
              <MessagesSummary
                key={message.id}
                fn={() => setMessageSel(message)}
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
    <ErrorBoundary resetKeys={[messagesData]} fallback={<ErrorMessage />}>
      <MessagesComponent messagesData={messagesData} />
    </ErrorBoundary>
  )
}

export default Messages
