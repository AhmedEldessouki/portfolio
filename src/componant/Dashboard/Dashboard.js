import React from 'react'
import Notifications from './Notifications'
import Projects from '../Home/Projects/Projects'
import AuthNavlinks from '../Navigation/AuthNavlinks'
import './Styles/Dashboard.scss'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Messages from './Messaging/Messages'
import { BarLoader } from 'react-spinners'

const Dashboard = ({
  isLoaded,
  isSubmitting,
  auth,
  projectsData,
  notifications,
  messagesData,
}) => {
  return (
    <div>
      {!auth.uid ? (
        <Redirect to="/signin" />
      ) : (
        <div>
          {!isSubmitting ? (
            <div className="my-spinner-container">
              <BarLoader
                className="my-spinner"
                sizeUnit={'px'}
                size={150}
                color={'#d4dff6'}
                loading={!isSubmitting}
              />
              Loading...
            </div>
          ) : (
            <div className="Dashboard">
              <AuthNavlinks />
              <main>
                <div className="Dashboard-items">
                  <div className="first-container">
                    <Projects projectsData={projectsData} />
                  </div>
                  <div className="second-container">
                    <Notifications notifications={notifications} />
                  </div>
                </div>
              </main>
              <div>
                <Messages messagesData={messagesData} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projectsData: state.firestore.ordered.projects,
    isSubmitting: state.firebase.profile.isLoaded,
    messagesData: state.firestore.ordered.contactedMe,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'contactedMe', orderBy: ['sentAt', 'desc'] },
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc'] },
  ])
)(Dashboard)
