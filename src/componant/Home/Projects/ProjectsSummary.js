import React from 'react'
import './Styles/ProjectSummary.scss'
import { FaPen } from "react-icons/fa";
import { GoTrashcan } from "react-icons/go";
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom'

const ProjectsSummary = ({project,auth}) => {
  return (
    <div>
      <div className="ProjectSummary">
        {auth.uid ?
          <div className="icons-svg">
            <NavLink to={`/edit/${project.id}`} key={project} >
              <FaPen/>
            </NavLink>
            <GoTrashcan/>
          </div>
          :
          null
        }
        {project.projectLogo[0] ?
          <img alt="Project's logo" src={project.projectLogo[0]}/>
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
const mapStateToProps = (state) =>{
  return {
    auth:state.firebase.auth,
  }
};
export default connect(mapStateToProps)(ProjectsSummary)
