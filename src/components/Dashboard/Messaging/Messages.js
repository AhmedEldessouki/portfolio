/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import React from 'react'

import MessagesSummary from './MessagesSummary'

function Messages({messagesData}) {
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
      <h1>Messages</h1>
      <div css={mWrapper}>
        {messagesData &&
          messagesData.map(contact => {
            return (
              <MessagesSummary
                contact={contact}
                to={`/Messages/${contact.id}`}
                key={contact.id}
              />
            )
          })}
      </div>
    </React.Fragment>
  )
}

export default Messages
