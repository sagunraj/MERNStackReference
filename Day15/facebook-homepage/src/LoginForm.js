import React from "react";
import "./main.css";
const LoginForm = () => {
  return (
      <div className="row login-form">
        <div className="col-md-6 email-phone">
          <label>Email or Phone</label>
          <br />
          <input type="text" />
        </div>
        <div className="col-md-6 password-login">
          <label>Password</label><br/>
          <input type="text" />
          <button id="login-button">Log In</button>
          <br/>
          <a href="#" style={{color: "#83B4D4"}}>Forgotten account?</a>
        </div>
      </div>
  );
};

export default LoginForm;
