import React, {Component} from 'react'
import Notifications from './Notifications'
import Projects from '../Home/Projects/Projects'
import AuthNavlinks from '../Navigation/AuthNavlinks'
import './Styles/Dashboard.scss'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const {projectsData, auth} = this.props;
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
                  <Notifications/>
                </div>
              </div>
            </main>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('projects', state.firestore.ordered.projects);
  return{
    projectsData: state.firestore.ordered.projects,
    auth:state.firebase.auth
  }
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(Dashboard)