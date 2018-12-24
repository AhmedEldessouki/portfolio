import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut} from '../../Store/Actions/AuthActions'

 const AuthNavlinks = (props) => {
    return (
      <div>
        <ul>
          <li><NavLink to={"/createProject"}>Create Project</NavLink></li>
          <li><NavLink to={"/dashboard"}>SignIn</NavLink></li>
          <li><a onChange={props.signOut} >SignUp</a></li>
          <li><NavLink to={"/"}>SignOut</NavLink></li>
        </ul>
      </div>
    )
  };


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=> dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(AuthNavlinks)