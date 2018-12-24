import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
   
      
const ProjectDetails = (props) => {
  const { project } = props;
  console.log(project)
  if (project) {
    return(
    <div className="ProjectsDetails">
      <div className="cards-wrapper">
      <div>
        <span>{project.projectName}</span>  
        <p>{project.description}</p>
      </div>
      <div>
        <div>Author: {project.authorFirstName} {project.authorLastName}</div>
      </div>
      </div>
    </div>
    )
  } else {
    return (
      <div>
        <p>project loading...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id]: null
  console.log('projects',projects)
  console.log('project',project)
  return { project }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)
