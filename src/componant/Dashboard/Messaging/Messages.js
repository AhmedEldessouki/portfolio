import React from 'react'
import './Styles/Messages.scss'
import MessagesSummary from './MessagesSummary'

const Messages= ({messagesData}) => {
  console.log(messagesData)
  return (
    <div className="Messages">
      <h1>My Messages</h1>
      <div className="cards-wrapper">
        {messagesData && messagesData.map(contact => {
          return(
            <MessagesSummary contact={contact} to={`/Messages/${contact.id}`} key={contact.id}/>
          )
        })}
      </div>
    </div>
  )

};

export default  Messages