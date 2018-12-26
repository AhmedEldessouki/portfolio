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
        {/*<h4>{contact.sentAt.toDate().toDateString()}</h4>*/}
      </Scrollbars>
    </div>
  )
};

export default MessagesSummary
