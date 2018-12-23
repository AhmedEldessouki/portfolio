import React, { Component } from 'react'
import Notifications from './Notifications'
import Projects from '../Home/Projects/Projects'
import './Dashboard.scss'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="Dashboard">
        <div className="first-container">
        <Projects/>
        </div>
        <div className="second-container">
        <Notifications/>
        </div>
        </div>
      </div>
    )
  }
}
