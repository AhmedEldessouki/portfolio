/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import { Fragment } from 'react'

import PopUp from '../../PopUp/PopUp'
import { NavLink } from 'react-router-dom'
import { colors } from '../../../Styles'

function MessagesSummary({ contact, to, id }) {
  const messagesSummary = css`
    overflow: auto;
    display: grid;
    background-color: ${colors.aliceLightBlue};
    grid-gap: 5px;
    height: 220px;
    place-items: center;
    border: 6px solid ${colors.independenceBlue};
    border-radius: 10px;
    font-family: 'Merienda One', cursive;
    & > a {
      color: ${colors.independenceBlue};
      padding: 20px;
      text-decoration: none;
    }
  `
  return (
    <Fragment>
      <PopUp contact={contact} title={'Message'} />
      <div css={messagesSummary}>
        <NavLink to={to} key={id}>
          <h3>{contact.contactName}</h3>
          <p>{contact.description}</p>
          <span>{contact.sentAt.toDate().toDateString()}</span>
        </NavLink>
      </div>
    </Fragment>
  )
}

export default MessagesSummary
