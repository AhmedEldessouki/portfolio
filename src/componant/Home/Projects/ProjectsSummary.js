import React from 'react'
import './Styles/ProjectSummary.scss'
import { FaPen } from "react-icons/fa";
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom'
import {deleteProject} from '../../../Store/Actions/ProjectsActions'
import PopUp from "../../PopUp/PopUp";

const ProjectsSummary = (props) => {
  const {project,auth} = props
  return (
    <div>
      <div className="ProjectSummary">
        {auth.uid ?
          <div className="icons-svg">
            <NavLink to={`/edit/${project.id}`} key={project} >
              <FaPen/>
            </NavLink>
            <PopUp project={project} title={'Project'}/>
          </div>
          :
          null
        }
        <NavLink to={props.to} key={props.key}>
          {project.projectLogo[0] ?
            <img alt="Project's logo" src={project.projectLogo[0]}/>
            :
            null
          }
          {/*<img alt="Project's logo" src={project.projectLogo[0]}/>*/}
          <h3>{project.projectName}</h3>
          <p>{project.description}</p>
          {/*<h4>{project.createdAt.toDate ().toDateString ()}</h4>*/}
        </NavLink>
      </div>
    </div>
  )
};
const mapStateToProps = (state) =>{
  return {
    auth:state.firebase.auth
  }
};
const mapDispatchToProps = (dispatch) =>{
  return {
    deleteProject: (project) => dispatch(deleteProject(project)),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(ProjectsSummary)
