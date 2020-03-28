import React, { Component } from "react";
import "./header.css";
import Logo from "../../assetts/tplogotransparent.png";

export default class header extends Component {
  render() {
    return (
      <div className="header-container">
        <img src={Logo} alt="TP Logo" className="logo" /> 
        <h1>TP Trader</h1>
        <div>
        <div>login/logout</div>
        <div>Profile</div>
        </div>
        
      </div>
    );
  }
}
