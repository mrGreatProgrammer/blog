import React from "react";
import DarkModeContainer from "../../components/DarkMode/DarkModeContainer";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings">
      <h4>Настройки</h4>
      <h6>Темный режим: </h6>
      <DarkModeContainer />
    </div>
  );
}

export default Settings;
