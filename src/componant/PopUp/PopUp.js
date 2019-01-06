import './PopUp.scss'
import React, {Component} from 'react';
import Modal from "react-bootstrap/es/Modal";
import {Button} from "react-bootstrap";
import {GoTrashcan} from "react-icons/go";
import {deleteProject} from "../../Store/Actions/ProjectsActions";
import connect from "react-redux/es/connect/connect";

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete= this.handleDelete.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleDelete() {
    this.props.deleteProject(this.props.project)
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render () {
    const HIDE = this.props.project? null: {display:'none'}
    return (
      <div className="PopUp">
        <Button bsStyle="primary" className={"toggle-button"} bsSize="large" onClick={this.handleShow}>
          <GoTrashcan />
        </Button>
        <div className="static-modal" >
          <Modal show={this.state.show} onHide={this.handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete this project?</Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>No</Button>
              <Button bsStyle="danger"  style={HIDE} onClick={this.handleDelete}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deleteProject: (project) => dispatch(deleteProject(project)),
  }
};
export default connect(null,mapDispatchToProps)(PopUp)