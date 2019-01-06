import React from 'react'
import { connect } from 'react-redux'
import {signOut} from '../../Store/Actions/AuthActions'
import './Navigation.scss'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const AuthNavlinks = (props) => {
  return(
    <div>
      <div>
        <Navbar className="Navigation" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <span>{props.title}</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href={"/"}>
                Home
              </NavItem>
              <NavItem eventKey={2} href={"/#projects"}>
                Projects
              </NavItem>
              <NavItem eventKey={3} href={"/#contactMe"}>
                Contact Me
              </NavItem>
              <NavItem eventKey={4} href={"/dashboard"}>
                DashBoard
              </NavItem>
              <NavItem eventKey={5} href={"/create-project"}>
                Create Project
              </NavItem>
              <NavItem eventKey={5} href={"/signup"}>
                SignUp
              </NavItem>
              <NavItem eventKey={5} onClick={props.signOut} href={"/"}>
                SignOut
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
};


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=> dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(AuthNavlinks)