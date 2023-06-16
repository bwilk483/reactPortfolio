import React from "react";
import LoginPage from "../../Rbcomponents/RbLoginPage/RbLoginPage";
import NavBar from "../../Rbcomponents/RbNav/RbNavBar";
import Sidebar from "../../Rbcomponents/RbSidebar/RbSidebar";

import "./RbLogin.css";

const Login = () => {
  return (
    <div className="login">
      <NavBar />
      <div className="loginContainer">
        <LoginPage />
        <Sidebar />
      </div>
    </div>
  );
};

export default Login;
