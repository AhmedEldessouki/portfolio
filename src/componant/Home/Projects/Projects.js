import React from 'react'
import './Projects.scss'
import ProjectsSummary from './ProjectsSummary'

const Projects= ({projectsData}) => {
 
    return (
      <div className="Projects">
        <h1>My Projects</h1>
        <div>
          {projectsData && projectsData.map(project => {
            return(
              <ProjectsSummary project={project} key={project.id}/>
            )
          })}
        </div>
      </div>
    )
  
}

export default  Projects