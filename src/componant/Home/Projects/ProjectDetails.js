import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import './Styles/ProjectDetails.scss'
import ContactMe from '../ContactMe/ContactMe'
import AuthNavlinks from '../../Navigation/AuthNavlinks'

const ProjectDetails = (props) => {
  const { project,auth } = props;
  const links = auth.uid ? <AuthNavlinks profile={profile}/> : null //<Navlinks/>
  // console.log(project);
  if (project) {
    return(
      <div className="ProjectDetails">
        <header>
          {links}
        </header>

        <div className="details">
          <div className="first-container">
            <h2>{project.projectName}</h2>
            <p>{project.description}</p>
          </div>
          <div className="double-container">
            <div>Author: {project.authorFirtsName} {project.authorLastName}</div>
            <div>Created At: {project.createdAt.toDate().toDateString()}</div>
          </div>
        </div>

        <footer>
          <ContactMe/>
        </footer>
      </div>
    )
  } else {
    return (
      <div>
        <p>project loading...</p>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id]: null;
  return {
    project,
    profile: state.firebase.profile
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)
