/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {useQueryErrorResetBoundary, useQuery} from 'react-query'
import {h1XL, warning} from '../../Styles'
import OnToggle from '../../Utils/OnToggle'

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

  const {data: messagesData} = useQuery({
    queryKey: 'contactedMe',
    queryFn: async () =>
      await db
        .collection('contactedMe')
        .get()
        .then(
          querySnapshot => {
            const data = querySnapshot.docs.map(doc => {
              return {...doc.data(), id: doc.id}
            })
            return data
          },
          err => {
            throw err
          },
        ),
    config: {
      onError: err => {
        throw err
      },
      suspense: true,
      placeholderData: [
        {
          email: 'XXXXX@XXXX.com',
          id: 'xXXXXXXXXXXXXXx',
          phoneNumber: 'XXXXXXXXX',
          description: 'XXXXXXXXXXXXXXXXXXXX',
          name: 'XXXXX XXXX',
          // date: {seconds: 1595062202, nanoseconds: 704000000},
        },
      ],
    },
  })

  return (
    <React.Fragment>
      <h1 css={h1XL}>Messages</h1>
      {messageSel ? (
        <OnToggle
          items={messagesData}
          state={messageSel}
          setState={setMessageSel}
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

function Messages(props) {
  const {reset} = useQueryErrorResetBoundary()
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
