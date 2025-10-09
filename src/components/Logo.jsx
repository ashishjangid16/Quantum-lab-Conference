import React from "react";
import "./Logo.css";
import logo from "../assets/logo.png";
import inrimLogo from "../assets/INRIM logo.jpg";

export default function Logo() {
  return (
    <>
      <div className="logo-container logo-left">
        <img src={logo} alt="IIT BHU logo" className="logo-img" />
      </div>
      <div className="logo-container logo-right">
        <img src={inrimLogo} alt="INRIM logo" className="logo-img" />
      </div>
    </>
  );
}
