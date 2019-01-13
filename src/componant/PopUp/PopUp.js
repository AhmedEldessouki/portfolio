import './PopUp.scss'
import React, {Component} from 'react';
import {Modal }from "react-bootstrap";
import {Button} from "react-bootstrap";
import {GoTrashcan} from "react-icons/go";
import {deleteProject} from "../../Store/Actions/ProjectsActions";
import {deleteMessage} from "../../Store/Actions/ContactedMeActions";
import { deleteNotification} from '../../Store/Actions/NotificationActions';
import connect from "react-redux/es/connect/connect";

class PopUp extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleDelete() {
    if (this.props.project){
      this.props.deleteProject(this.props.project)
    } else if (this.props.contact){
      this.props.deleteMessage(this.props.contact)
    }else if (this.props.notification){
      this.props.deleteNotification(this.props.notification)
    }
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render () {
    const HIDE = this.props.project || this.props.contact || this.props.notification ? null: {display:'none'}
    const content =this.props.title;

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
            <Modal.Body>Do you want to delete this {content}</Modal.Body>
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
    deleteMessage: (contact) => dispatch(deleteMessage(contact)),
    deleteNotification: (notification) => dispatch(deleteNotification(notification)),
  }
};
export default connect(null,mapDispatchToProps)(PopUp)