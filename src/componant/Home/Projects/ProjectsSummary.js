import React from 'react'

const ProjectsSummary = ({project}) => {
  return (
    <div className="ProjectsSummary">
      <h3>{project.projectName}</h3>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectsSummary
