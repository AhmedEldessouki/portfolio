import React from 'react'

const ProjectDetails = (props) => {
  const ID= props.match.params.id
  return (
    <div className="ProjectsDetails">
      <div className="cards-wrapper">
      <div>
        {ID}-<span>Project Title</span>  
        <p>jasfjka hkasjhf akgkacbcaf</p>
      </div>
      <div>
        <div>auther</div>
      </div>
      </div>
    </div>
  )
}

export default ProjectDetails
