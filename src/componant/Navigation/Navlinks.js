import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.scss'

export default class Navlinks extends Component {
  render() {
    return (
      <div  className="Navigation">
        <ul className="not-auth-nav">
          <li><NavLink to={"/"}>Home</NavLink></li>
          {/*<li><NavLink to={"/signup"}>SignUp</NavLink></li>*/}
        </ul>
      </div>
    )
  }
}
