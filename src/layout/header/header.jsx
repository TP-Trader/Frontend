import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assetts/tplogotransparent.png";

const Header = () => {

  return (
    <div className="header-container">
      <Link to="/">
        <img src={Logo} alt="TP Logo" className="logo" />
      </Link>

     

      <div>
       
          <p>Log in</p>
       

     
          <div>
            <p>Log out</p>{" "}
            <Link to="/profile">Profile</Link>
          </div>
      </div>
    </div>
  );
};

export default Header;
