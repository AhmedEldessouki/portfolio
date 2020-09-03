import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../Store/Actions/AuthActions";
import "./Navigation.scss";
import my from "../../assets/my.svg";

const AuthNavlinks = ({ signOut }) => {
  return (
    <div className='Navigation'>
      <div>
        <img
          src={my}
          alt={"Ahmed ElDessouki"}
          style={{ width: "150px", padding: "0" }}
        />
      </div>
      <div>
        <a href={"/"}>Home</a>
        <a href={"/#projects"}>Projects</a>
        <a href={"/#contactMe"}>Contact Me</a>
        <a href={"/dashboard"}>DashBoard</a>
        <a href={"/create-project"}>Create Project</a>
        <a href={"/signup"}>SignUp</a>
        <a onClick={signOut} href={"/"}>
          SignOut
        </a>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(AuthNavlinks);
