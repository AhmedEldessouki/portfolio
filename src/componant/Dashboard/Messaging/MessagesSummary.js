import React from 'react'
import './Styles/MessagesSummary.scss'
import { Scrollbars } from 'react-custom-scrollbars'
import PopUp from '../../PopUp/PopUp'
import { NavLink } from 'react-router-dom'
const MessagesSummary = (props) => {
  const { contact } = props
  return (
    <div className="MessagesSummary">
      <PopUp contact={contact} title={'Message'} />
      <NavLink to={props.to} key={props.id}>
        <h3>{contact.contactName}</h3>
        <Scrollbars className="my-scroller">
          <p className="description">{contact.description}</p>
        </Scrollbars>
        <span>{contact.sentAt.toDate().toDateString()}</span>
      </NavLink>
    </div>
  )
}

export default MessagesSummary
