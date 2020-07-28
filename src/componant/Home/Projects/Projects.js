import React, { useState, useEffect } from 'react'
import './Styles/Projects.scss'
import ProjectsSummary from './ProjectsSummary'

const Projects = ({ projectsData }) => {
  const [visibleHieght, setVisibleHieght] = useState(window.innerHeight)

  useEffect(() => {
    setVisibleHieght(window.innerHeight)
  }, [setVisibleHieght])

  return (
    <div className="Projects" style={{ maxHeight: visibleHieght }}>
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
