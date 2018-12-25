import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut} from '../../Store/Actions/AuthActions'
import './Navigation.scss'

 const AuthNavlinks = (props) => {
   return <div>
     <ul className="Navigation">
       <li><NavLink to={"/"}>Home</NavLink></li>
       <li><NavLink to={"/dashboard"}>DashBoard</NavLink></li>
       <li><NavLink to={"/createProject"}>Create Project</NavLink></li>
       <li><NavLink to={"/signup"}>SignUp</NavLink></li>
       <li><a onClick={props.signOut} href={"/"}>Sign Out</a></li>
     </ul>
   </div>
 };


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=> dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(AuthNavlinks)