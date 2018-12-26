import React from 'react'
import './Styles/ProjectSummary.scss'
const ProjectsSummary = ({project}) => {
  return (
    <div className="ProjectSummary">
      <img alt="Project's logo" url="/"/>
      <h3>{project.projectName}</h3>
      <p>{project.description}</p>
      <h4>{project.createdAt.toDate().toDateString()}</h4>
    </div>
  )
};

export default ProjectsSummary
