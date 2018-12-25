import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject } from '../../../Store/Actions/ProjectsActions'
import {Redirect} from "react-router-dom";
import './Styles/CreateProject.scss'
import AuthNavlinks from '../../Navigation/AuthNavlinks'

class CreateProject extends Component {
  constructor(){
    super();
    this.state = {
      projectName:'',
      description:'',

    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  };

  handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(this.state)
    {/*<Redirect to="/dashboard"/>*/}
    this.props.createProject(this.state)
    this.props.history.push('/');
  };
  render() {
    const {auth} = this.props
    return (
      <div>
        {!auth.uid ? <Redirect to='/signin'/> :
          <div className="CreateProject">
            <header>
              <AuthNavlinks/>
            </header>

            <h1>Create New Project</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text"  placeholder="Project Name" id="projectName" onChange={this.handleChange}/>
                <textarea  placeholder="Project Description" id="description" onChange={this.handleChange}/>
              <div>
                <button type="submit">CreateProject</button>
              </div>
            </form>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    auth:state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    createProject: (project) => dispatch(createProject(project))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);