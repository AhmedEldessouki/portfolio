import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap';
import './MyNav.scss'
import {connect} from 'react-redux'

class MyNav extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedKey) {

    // alert(`selected ${selectedKey}`);
  }
  render() {
    return (
      <div className="MyNav">
        <div >
          <Nav bsStyle="pills" onSelect={this.handleSelect()}>
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
}

const mapStateToProps = (state) => {
  console.log(state);
  return{

  }
};
export default connect(mapStateToProps)(MyNav)