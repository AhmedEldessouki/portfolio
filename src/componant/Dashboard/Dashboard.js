import React, { Component } from 'react'
import Notifications from './Notifications'
import Projects from '../Home/Projects/Projects'
import AuthNavlinks from '../Navigation/AuthNavlinks'
import './Styles/Dashboard.scss'
import {connect} from 'react-redux'



 class Dashboard extends Component {
  render() {
    console.log(this.props)
    const {projectsData} = this.props
    return (
      <div>
        <header>
          <AuthNavlinks/>
        </header>
        <main>
        <div className="Dashboard">
        <div className="first-container">
        <Projects projectsData={projectsData}/>
        </div>
        <div className="second-container">
        <Notifications/>
        </div>
        </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    projectsData: state.project.projects
  }
}
export default connect(mapStateToProps)(Dashboard)