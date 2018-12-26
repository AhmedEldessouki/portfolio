import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.scss'

export default class Navlinks extends Component {
  render() {
    return (
      <div>
        <ul className="Navigation">
          {/*<li><NavLink to={"/createProject"}>Create Project</NavLink></li>*/}
          <li><NavLink to={"/"}>Home</NavLink></li>
        </ul>
      </div>
    )
  }
}
