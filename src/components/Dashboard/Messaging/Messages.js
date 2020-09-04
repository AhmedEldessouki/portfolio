/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import MessagesSummary from './MessagesSummary'
import { Fragment } from 'react'

function Messages({ messagesData }) {
  const mWrapper = css`
    margin: 0 10px;
    padding: 20px 10px;
    display: grid;
    grid-gap: 25px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1.5fr));
  `
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Messages
