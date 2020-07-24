import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import './Navigation.scss'
import my from '../../assets/my.svg'

export default class UnAuthNavlinks extends Component {
  render() {
    return (
      <div className="myNav-container">
        <div className="my-name">
          <img
            src={my}
            alt={'Ahmed Eldessouki'}
            style={{ width: '267px', padding: '0px 0px 15px 20px' }}
          />
        </div>
        <div className="myNav">
          <a className="myNav-item" href="/">
            Home
          </a>
          <a className="myNav-item" href={'/#projects'}>
            Projects
          </a>
          <a className="myNav-item" href="/#contactMe">
            Contact Me
          </a>
        </div>
      </div>
    )
  }
}
