import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Navlinks extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to={"/createProject"}>Create Project</NavLink></li>
          <li><NavLink to={"/SignIn"}>SignIn</NavLink></li>  
        </ul>
      </div>
    )
  }
}
