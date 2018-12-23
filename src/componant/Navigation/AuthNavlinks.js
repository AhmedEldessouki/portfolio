import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class AuthNavlinks extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to={"/createProject"}>Create Project</NavLink></li>
          <li><NavLink to={"/dashboard"}>SignIn</NavLink></li>
          <li><NavLink to={"/SignUp"}>SignUp</NavLink></li>
          <li><NavLink to={"/"}>SignOut</NavLink></li>
        </ul>
      </div>
    )
  }
}
