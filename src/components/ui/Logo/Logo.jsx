import React from "react";
import logoImg from "../../../imgs/favicon-32x32.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="logo" className="logo-img" />
      <h1 className="logo-txt">Somon</h1>
    </div>
  );
}

export default Logo;
