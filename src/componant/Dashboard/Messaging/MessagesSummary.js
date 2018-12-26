import React from 'react'
import './Styles/MessagesSummary.scss'
import { Scrollbars } from 'react-custom-scrollbars';
const MessagesSummary = ({contact}) => {
  return (
    <div className="MessagesSummary">
      <h3>{contact.contactName}</h3>
      <Scrollbars className="my-scroller">
        <p className="description">
          {contact.description}
        </p>
      </Scrollbars>
        <span>{contact.sentAt.toDate().toDateString()}</span>
    </div>
  )
};

export default MessagesSummary
