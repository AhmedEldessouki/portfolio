/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useErrorResetBoundary, useQuery} from 'react-query'
import {warning} from '../../Styles'

import {db} from '../../Utils/firebase'
import MessageDetails from './MessageDetails'

import MessagesSummary from './MessagesSummary'

function MessagesComponent() {
  const [messageSel, setMessageSel] = React.useReducer(
    (previousData, newData) => newData,
    null,
  )
  const mWrapper = css`
    margin: 0 10px;
    padding: 20px 10px;
    display: grid;
    grid-gap: 25px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1.5fr));
  `
  const childN = css`
    border: 0;
    grid-row: 1;
    grid-column: 1 / span 2;
    place-self: baseline;
    margin: 0;
    place-self: baseline;
  `
  const {data: messagesData} = useQuery({
    queryKey: 'contactedMe',
    queryFn: async () =>
      await db
        .collection('contactedMe')
        .get()
        .then(
          querySnapshot => {
            const res = querySnapshot.docs.map(doc => {
              return {...doc.data(), id: doc.id}
            })
            return res
          },
          err => {
            throw err
          },
        ),
    config: {
      onError: err => {
        throw err
      },
      placeholderData: [
        {
          email: 'XXXXX@XXXX.com',
          id: 'xXXXXXXXXXXXXXx',
          phoneNumber: 'XXXXXXXXX',
          description: 'XXXXXXXXXXXXXXXXXXXX',
          contactName: 'XXXXX XXXX',
          // sentAt: {seconds: 1595062202, nanoseconds: 704000000},
        },
      ],
    },
  })

  return (
    <React.Fragment>
      <h1>Messages</h1>
      {messageSel ? (
        <React.Fragment>
          <button css={childN} onClick={() => setMessageSel(null)}>
            Back
          </button>
          <MessageDetails message={messageSel} />
        </React.Fragment>
      ) : (
        <div css={mWrapper}>
          {messagesData.map(message => {
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

function Messages(props) {
  const {reset} = useErrorResetBoundary()
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({resetErrorBoundary}) => (
        <div type="alert" css={warning}>
          There was an error!
          <button onClick={() => resetErrorBoundary()}>Try again</button>
        </div>
      )}
    >
      <React.Suspense fallback={'loading'} id={1}>
        <MessagesComponent {...props} />
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default Messages
