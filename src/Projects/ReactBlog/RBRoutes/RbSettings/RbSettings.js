import React from "react";
import NavBar from "../../Rbcomponents/RbNav/RbNavBar";
import Sidebar from "../../Rbcomponents/RbSidebar/RbSidebar";
import SettingsPage from "../../Rbcomponents/RbSettingsPage/RbSettingsPage";
import "./RbSettings.css";

const RbSettings = () => {
  return (
    <div>
      <NavBar />
      <div className="settingsContainer">
        <SettingsPage />
        <Sidebar />
      </div>
    </div>
  );
};

export default RbSettings;
