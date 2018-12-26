import React, {Component} from 'react'
import Notifications from './Notifications'
import Projects from '../Home/Projects/Projects'
import AuthNavlinks from '../Navigation/AuthNavlinks'
import './Styles/Dashboard.scss'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Messages from './Messages'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const {projectsData, auth, notifications, messagesData} = this.props;
    return (
      <div>
        {!auth.uid ? <Redirect to='/signin'/> :
          <div className="Dashboard">
            <header>
              <h1>Dashboard</h1>
              <AuthNavlinks/>
            </header>
            <main>
              <div className="Dashboard-items">
                <div className="first-container">
                  <Projects projectsData={projectsData}/>
                </div>
                <div className="second-container">
                  <Notifications notifications={notifications}/>
                </div>
              </div>
            </main>
                <div>
                  <Messages messagesData={messagesData} />
                </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('projects', state.firestore.ordered.projects);
  // console.log('dashboard', state);
  return{
    projectsData: state.firestore.ordered.projects,
    messagesData: state.firestore.ordered.contactedMe,
    auth:state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  }
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects', orderBy: ['createdAt', 'desc']},
    {collection: 'contactedMe', orderBy: ['sentAt', 'desc']},
    {collection: 'notifications', limit: 10, orderBy: ['time', 'desc']}
  ])
)(Dashboard)