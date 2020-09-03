import React from 'react'
import './Styles/Notifications.scss'
import PopUp from '../PopUp/PopUp'

const Notifications = ({ notifications }) => {
  return (
    <div className="Notifications">
      <h1>Notification</h1>
      <div className="notification-card">
        <div>
          <ul className="items">
            {notifications &&
              notifications.map((notification) => {
                return (
                  <li key={notification.id}>
                    <div
                      className={Array.from(
                        notification.content.split(' ', 3)
                      ).join('-')}
                    >
                      <PopUp
                        notification={notification}
                        title={'Notification'}
                      />
                      <h4>{notification.user}</h4>
                      <h6>{notification.content}</h6>
                      <span>{notification.time.toDate().toDateString()}</span>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
