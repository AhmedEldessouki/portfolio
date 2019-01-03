import React from 'react'
import './Styles/ProjectSummary.scss'

const ProjectsSummary = ({project}) => {
  return (
    <div>
      <div className="ProjectSummary">
        {project.projectLogo[0].url ?
          <img alt="Project's logo" src={project.projectLogo[0].url}/>
          :
          null
        }
        {/*<img alt="Project's logo" src={project.projectLogo[0]}/>*/}
        <h3>{project.projectName}</h3>
        <p>{project.description}</p>
        {/*<h4>{project.createdAt.toDate ().toDateString ()}</h4>*/}
      </div>
    </div>
  )
};

export default ProjectsSummary
