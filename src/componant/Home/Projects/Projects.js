import React from 'react'
import './Styles/Projects.scss'
import ProjectsSummary from './ProjectsSummary'

const Projects = ({ projectsData }) => {
  return (
    <div className="Projects" style={{ height: window.innerHeight }}>
      <h1>My Projects</h1>
      <div className="cards-wrapper">
        {projectsData &&
          projectsData.map((project) => {
            return (
              <ProjectsSummary
                project={project}
                to={`/projects/${project.id}`}
                key={project.id}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Projects
