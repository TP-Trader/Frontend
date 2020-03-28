import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assetts/tplogotransparent.png";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading, user } = useAuth0();

  return (
    <div className="header-container">
      <Link to="/">
        <img src={Logo} alt="TP Logo" className="logo" />
      </Link>

      <div className="title">
        <h1>TP Trader</h1>
        {isAuthenticated ?  (
          <p> Welcome, {user.given_name} </p>
        ) : ''}
        
      </div>

      <div>
        {!isAuthenticated && (
          <p onClick={() => loginWithRedirect({})}>Log in</p>
        )}

        {isAuthenticated && (
          <div>
            <p onClick={() => logout()}>Log out</p>{" "}
            <Link to="/profile">Profile</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
