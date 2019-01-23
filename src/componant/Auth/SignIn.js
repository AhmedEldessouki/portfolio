import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../Store/Actions/AuthActions'
import {Redirect} from "react-router-dom";
import AuthNavlinks from "../Navigation/AuthNavlinks";
import UnAuthNavlinks from "../Navigation/UnAuthNavlinks";
import './Styles/SignUp.scss'

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
    const links = auth.uid ? <AuthNavlinks/> : <UnAuthNavlinks/>

    return (
      <div>
        {auth.uid ? <Redirect to='/'/> :
          <div className="SignIn">
              {links}
            <h1>Sign-in</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="field-container">
                <input type="email" placeholder="Enter Email"  id="email" onChange={this.handleChange}/>
                <input type="password" placeholder="Enter Password"  id="password" onChange={this.handleChange}/>
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