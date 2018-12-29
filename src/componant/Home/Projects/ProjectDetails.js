import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import './Styles/ProjectDetails.scss'
import ContactMe from '../ContactMe/ContactMe'
import AuthNavlinks from '../../Navigation/AuthNavlinks'
import Navlinks from '../../Navigation/Navlinks'
import {BarLoader} from "react-spinners";

const ProjectDetails = (props) => {
  const { project,auth, profile } = props;
  const links = auth.uid ? <AuthNavlinks profile={profile}/> : <Navlinks/>
  window.scrollTo(0, 0)

  if (project) {
    return(
      <div className="bg-img" style={{backgroundImage: `url(${project.projectLogo})`}}>
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
              <div>Author: {project.authorFirstName} {project.authorLastName}</div>
              <div>Created At: {project.createdAt.toDate().toDateString()}</div>
            </div>
          </div>
          <footer>
            <ContactMe/>
          </footer>
        </div>
      </div>
    )
  } else {
    return (
      <div className="my-spinner-container">
        <BarLoader
          className="my-spinner"
          sizeUnit={"px"}
          size={150}
          color={'#d4dff6'}
          loading={true}
        />
        Loading...
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
    profile: state.firebase.profile,
    auth:state.firebase.auth,
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)
