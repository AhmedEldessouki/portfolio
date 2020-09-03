import React from 'react'
import './Styles/ProjectSummary.scss'
import { FaPen } from 'react-icons/fa'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteProject } from '../../../Store/Actions/ProjectsActions'
import PopUp from '../../PopUp/PopUp'
import reactL from '../../../assets/react.svg'

const ProjectsSummary = ({ project, auth, ...props }) => {
  return (
    <div>
      <div className="ProjectSummary">
        {auth.uid ? (
          <div className="icons-svg">
            <NavLink to={`/edit/${project.id}`} key={project}>
              <FaPen />
            </NavLink>
            <PopUp project={project} title={'Project'} />
          </div>
        ) : null}
        {project.projectLogo[0] ? (
          <img
            alt="Project's logo"
            src={
              `https://images.weserv.nl/?url=${project.projectLogo[0]}` ||
              reactL
            }
          />
        ) : null}
        <NavLink to={props.to} key={props.key}>
          <h1 style={{ color: 'cornflowerblue' }}>{project.projectName}</h1>
        </NavLink>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (project) => dispatch(deleteProject(project)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsSummary)
