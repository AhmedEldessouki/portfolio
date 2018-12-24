import React, { Component } from 'react'
import Notifications from './Notifications'
import Projects from '../Home/Projects/Projects'
import AuthNavlinks from '../Navigation/AuthNavlinks'
import './Styles/Dashboard.scss'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
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
    console.log('projects', state.firestore.ordered.projects)
    return{
        projectsData: state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
    )(Dashboard)