/**@jsx jsx */
import {jsx, css} from '@emotion/core'
import {Fragment} from 'react'

import PopUp from '../../PopUp/PopUp'
import {NavLink} from 'react-router-dom'
import {colors, h1XL} from '../../../Styles'

function MessagesSummary({contact, to, id}) {
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
    <Fragment>
      <div css={messagesSummary}>
        <NavLink css={childN} to={to} key={id}>
          <h2 css={h1XL}>{contact.contactName}</h2>
        </NavLink>
        <div css={childB}>
          <PopUp contact={contact} title={'Message'} />
        </div>
        <p css={childP}>{contact.description}</p>
        <span css={childD}>{contact.sentAt.toDate().toDateString()}</span>
      </div>
    </Fragment>
  )
}

export default MessagesSummary
