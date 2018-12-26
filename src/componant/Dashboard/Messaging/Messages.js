import React from 'react'
import './Styles/Messages.scss'
import MessagesSummary from './MessagesSummary'
import {NavLink} from 'react-router-dom'

const Messages= ({messagesData}) => {
  // console.log('contact data', messagesData);
  return (
    <div className="Messages">
      <h1>My Messages</h1>
      <div className="cards-wrapper">
        {messagesData && messagesData.map(contact => {
          return(
            <NavLink to={`/Messages/${contact.id}`} key={contact.id}>
              <MessagesSummary contact={contact} />
            </NavLink>
          )
        })}
      </div>
    </div>
  )

};

export default  Messages