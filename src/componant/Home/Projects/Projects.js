import React from 'react'
import './Styles/Projects.scss'
import ProjectsSummary from './ProjectsSummary'
import {NavLink} from 'react-router-dom'

const Projects= ({projectsData}) => {
 console.log('project data', projectsData)
    return (
      <div className="Projects">
        <h1>My Projects</h1>
        <div>
          {projectsData && projectsData.map(project => {
            return(
              <NavLink to={`/projects/${project.id}`}> 
                <ProjectsSummary project={project} key={project.id}/>
              </NavLink>   
            )
          })}
        </div>
      </div>
    )
  
}

export default  Projects