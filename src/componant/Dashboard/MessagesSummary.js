import React from 'react'
import './Styles/MessagesSummary.scss'
const MessagesSummary = ({contact}) => {
  return (
    <div className="MessagesSummary">
      <h3>{contact.contactName}</h3>
      <p>{contact.description}</p>
      {/*<h4>{contact.sentAt.toDate().toDateString()}</h4>*/}
    </div>
  )
};

export default MessagesSummary
