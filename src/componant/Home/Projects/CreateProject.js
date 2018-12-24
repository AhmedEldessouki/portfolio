import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject } from '../../../Store/Actions/ProjectsActions'

class CreateProject extends Component {
  constructor(){
    super();
    this.state = {
      projectName:'',
      description:'',
      author: '',
      date:null
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
    this.props.createProject(this.state)
  };
  render() {
    return (
      <div>
        <h1>Create New Project</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"   id="projectName" onChange={this.handleChange}/>
            <input type="text"   id="author" onChange={this.handleChange}/>
            <input type="date"   id="date" onChange={this.handleChange}/>
            <textarea   id="description" onChange={this.handleChange}/>
          </div>
          <div>
            <button type="submit">CreateProject</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    createProject: (project) => dispatch(createProject(project))
  }
};
export default connect(null, mapDispatchToProps)(CreateProject);