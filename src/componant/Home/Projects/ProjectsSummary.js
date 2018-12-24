import React from 'react'
import './Styles/ProjectSummary.scss'
const ProjectsSummary = ({project}) => {
  return (
    <div className="ProjectSummary">
      <img alt="Project's Picture" url=""/>
      <h3>{project.projectName}</h3>
      <p>{project.description}</p>
    </div>
  )
};

export default ProjectsSummary
