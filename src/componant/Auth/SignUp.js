import React, { Component } from 'react'

 class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password:''
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
  } 
  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
        <div>
          <input type="email"   id="email" onChange={this.handleChange}/>
          <input type="password"   id="password" onChange={this.handleChange}/>
        </div>
        <div>
          <button type="submit">SignUp</button>
        </div>
        </form>
      </div>
    )
  }
}

export default SignUp;