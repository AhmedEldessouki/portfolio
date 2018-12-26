import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap';
import './MyNav.scss'
import {connect} from 'react-redux'

const MyNav =(props) => {
  const {auth} = props
  return (
    <div className="MyNav">
      <div >
        <Nav bsStyle="pills" >
          <NavItem eventKey={1} href="header">
            ABOUT
          </NavItem>
          <NavItem eventKey={2} title="main">
            PROJECTS
          </NavItem>
          <NavItem eventKey={3} title="footer">
            CONTACT ME
          </NavItem>

        </Nav>
      </div>
    </div>
  )

}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth:state.firebase.auth
  }
};
export default connect(mapStateToProps)(MyNav)