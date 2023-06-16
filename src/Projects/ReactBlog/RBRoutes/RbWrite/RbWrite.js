import React from "react";
import NavBar from "../../Rbcomponents/RbNav/RbNavBar";
import Sidebar from "../../Rbcomponents/RbSidebar/RbSidebar";
import WriteForm from "../../Rbcomponents/RbWriteForm/RbWriteForm";
import "./RbWrite.css";

const RbWrite = () => {
  return (
    <div>
      <NavBar />
      <div className="writeLayout">
        <WriteForm />
        <Sidebar />
      </div>
    </div>
  );
};

export default RbWrite;
