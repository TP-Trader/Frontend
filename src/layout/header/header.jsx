import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./header.css";
import Logo from "../../assetts/tplogotransparent.png";

const Header = () => {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
    <div className="header-container">
      <img src={Logo} alt="TP Logo" className="logo" />
      <h1>TP Trader</h1>
      <div>
      {!isAuthenticated && (
        <p onClick={() => loginWithRedirect({})}>Log in</p>
      )}

      {isAuthenticated && <div><p onClick={() => logout()}>Log out</p> <p>Profile</p></div>}
      </div>
    </div>
  );
};

export default Header;
