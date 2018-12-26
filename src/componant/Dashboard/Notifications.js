import React from 'react'
import './Styles/Notifications.scss'

const Notifications = (props) => {
  const {notifications} = props;
  return (
    <div className="Notifications">
      <h1>Notification</h1>
      <div className="notification-card">
        <div>
          <ul className="items">
            {notifications && notifications.map(notification => {
              return (
                <div>
                  <li key={notification.id}>
                    <div className={Array.from(notification.content.split(" ", 3)).join('-')}>
                      <h4>{notification.user}</h4>
                      <h6>{notification.content}</h6>
                      <span>{notification.time.toDate().toDateString()}</span>
                    </div>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Notifications
