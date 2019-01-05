import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import './Styles/ProjectDetails.scss'
import ContactMe from '../ContactMe/ContactMe'
import AuthNavlinks from '../../Navigation/AuthNavlinks'
import Navlinks from '../../Navigation/Navlinks'
import {BarLoader} from "react-spinners";
import MyFooter from "../MyFooter/MyFooter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ProjectDetails = (props) => {
  const { project,auth, profile } = props;
  const links = auth.uid ? <AuthNavlinks auth={auth} profile={profile}/> : <Navlinks/>
  window.scrollTo(0, 0)
  if (project) {
    return(
      <div className="bg-img">
        <div className="ProjectDetails">
          {links}
          <div className="details-container">
            <div className="logos-container">
              {project.projectLogo !== null?
                <Carousel>
                  {project.projectLogo.map((link,ky) => {
                    return  <div key={ky}>
                      <img className="img-display" src={link} />
                    </div>
                  })}
                </Carousel>
                : null }
            </div>
            <div className="details">
              <div className="first-container">
                <h2><a href={project.projectLink}>{project.projectName}</a></h2>
                <p>{project.description}</p>
              </div>
              <div className="double-container">
                <div>Author: {project.authorFirstName} {project.authorLastName}</div>
                <div>Created At: {project.createdAt.toDate().toDateString()}</div>
              </div>
            </div>
          </div>
          <footer>
            <ContactMe/>
            <MyFooter/>
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
