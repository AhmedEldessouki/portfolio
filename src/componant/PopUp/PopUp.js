import './PopUp.scss'
import React, {Component} from 'react';
import {GoTrashcan} from "react-icons/go";
import {deleteProject} from "../../Store/Actions/ProjectsActions";
import {deleteMessage} from "../../Store/Actions/ContactedMeActions";
import { deleteNotification} from '../../Store/Actions/NotificationActions';
import {connect} from "react-redux";

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
    const HIDE = this.props.project || this.props.contact || this.props.notification ? {display:""}: {display:'none'}
    const content =this.props.title;

    return (
      <div className="PopUp" style={{display: "none"}}>
        <button className="toggle-button primary" onClick={this.handleShow}>
          <GoTrashcan />
        </button>
        <div className="static-modal" >
            <header>
              <h1>Warning</h1>
            </header>
            <h2>Do you want to delete this {content}</h2>
            <footer>
              <button onClick={this.handleClose}>No</button>
              <button className="danger"  style={{HIDE}} onClick={this.handleDelete}>
                Yes
              </button>
            </footer>
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