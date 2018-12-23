import React, { Component } from 'react'
import './Projects.scss'
import ProjectsSummary from './ProjectsSummary'

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h1>My Projects</h1>
        <div>
          <ProjectsSummary/>
        </div>
      </div>
    )
  }
}
