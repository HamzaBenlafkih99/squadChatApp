import React, {Component} from "react";
import HeadingLogo from "../../Components/HeadingLogo/HeadingLogo.js";
import InputsSignIn from "../../Components/InputSignIn/InputsSignIn.js";
import addDepModal from  "../../Components/addDepModal/addDepModal.js";
import "./css/index.css";
export default class SignIn extends Component {
  render() {
    return (
      <div className="Home">
        <div className="HeadingLogo">
          <HeadingLogo />
        </div>
        <div className="Username">
          <InputsSignIn placeholder="Username" />
        </div>
        <div className="Password">
          <InputsSignIn placeholder="Password" />
        </div>
        <div className="SignInDiv">
          <button className="SignInButton">Sign In</button>
        </div>
        <div className="or">OR</div>
        <div className="SignInFacebook">
          <button className="SignInButtonFacebook">
            Sign In with FaceBook
          </button>
        </div>
        <div className="barre">
          <div className="carre"></div>
          <div className="cercle"></div>
        </div>
        <div className="Register">
          <button className="RegisterButton">Create an Account</button>
        </div>
        <div className="forgotPassword">
          <a href="# "> Forgot Password or Username</a>
        </div>
      </div>
    );
  }
}
