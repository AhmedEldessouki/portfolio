import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../Store/Actions/AuthActions'
import MyNav from '../Home/MyNav/MyNav'
import {Redirect} from "react-router-dom";
import AuthNavlinks from "../Navigation/AuthNavlinks";
import Navlinks from "../Navigation/Navlinks";

class SignIn extends Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password:''
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
    this.props.signIn(this.state)
  };
  render() {
    const { authError,auth } = this.props;
    const links = auth.uid ? <AuthNavlinks/> : <Navlinks/>

    return (
      <div>
        {auth.uid ? <Redirect to='/'/> :
          <div>
            {links}
            <h1>Signin</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input type="email"   id="email" onChange={this.handleChange}/>
                <input type="password"   id="password" onChange={this.handleChange}/>
              </div>
              <div>
                <button type="submit">SignIn</button>
                {authError? <p>{authError}</p> : null}
              </div>
            </form>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
};
const mapDispatchToProps = (dispatch) => {
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);