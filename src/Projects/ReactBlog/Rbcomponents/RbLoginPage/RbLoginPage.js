import React from "react";

import "./RbLoginPage.css";

import { Link } from "react-router-dom";

const RbLoginPage = () => {
  return (
    <div className="loginPageContainer">
      <div className="loginPage">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="Email"
            placeholder="Enter your email"
          ></input>
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password"
          ></input>
          <button className="loginBtn">Login</button>
        </form>
        <Link to="/register">
          <button className="loginRegBtn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default RbLoginPage;
