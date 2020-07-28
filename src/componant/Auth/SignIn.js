import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../Store/Actions/AuthActions";
import { Redirect } from "react-router-dom";
import AuthNavlinks from "../Navigation/AuthNavlinks";
import UnAuthNavlinks from "../Navigation/UnAuthNavlinks";
import "./Styles/SignUp.scss";

const SignIn = ({ signIn, auth, authError }) => {
  const email = useFormInput("Enter Your Email");
  const password = useFormInput("Enter Your Password");

  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return { value, onChange: handleChange };
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const signInValues = {
      email: email.value,
      password: password.value,
    };
    signIn(signInValues);
  };
  const links = auth.uid ? <AuthNavlinks /> : <UnAuthNavlinks />;
  return (
    <div>
      {auth.uid ? (
        <Redirect to="/" />
      ) : (
        <div className="SignIn">
          {links}
          <h1>Sign-in</h1>
          <form onSubmit={handleSubmit}>
            <div className="field-container">
              <input {...email} />
              <input {...password} type="password" />
            </div>
            <div>
              <button type="submit">SignIn</button>
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
