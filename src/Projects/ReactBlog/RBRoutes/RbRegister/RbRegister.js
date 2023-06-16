import React from "react";
import NavBar from "../../Rbcomponents/RbNav/RbNavBar";
import RegisterPage from "../../Rbcomponents/RbRegisterPage/RbRegisterPage";
import SideBar from "../../Rbcomponents/RbSidebar/RbSidebar";

import "./RbRegister.css";

const RbRegister = () => {
  return (
    <div className="register">
      <NavBar />
      <div className="registerLayout">
        <RegisterPage />
        <SideBar />
      </div>
    </div>
  );
};

export default RbRegister;
