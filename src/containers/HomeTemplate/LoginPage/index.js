import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import "./login.css";

class LoginPage extends Component {
  render() {
    const { loginFormStatus } = this.props;
    return (
      <div
        className={`loginPage__container ${
          loginFormStatus ? "" : "sign-up-mode"
        } `}
      >
        {loginFormStatus ? (
          <LoginForm history={this.props.history} />
        ) : (
          <SignUpForm history={this.props.history} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginFormStatus: state.loginUserReducer.loginFormStatus,
  };
};

export default connect(mapStateToProps)(LoginPage);
