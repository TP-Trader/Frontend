import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assetts/tplogotransparent.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";

const Header = ({ auth, logout, history }) => {

  

  return (
    <div className="header-container">
      <Link to="/">
        <img src={Logo} alt="TP Logo" className="logo" />
      </Link>

      {localStorage.token && <h6>Welcome, {localStorage.email}</h6>}

      {localStorage.token ? (
        <div>
          <p onClick={logout}>Log out</p> 
          <Link to="/profile">Profile</Link>
        </div>
      ) : (
        <div>
          <Link to="/login"><p>Log in</p></Link>
        </div>
      )}
    </div>
  );
};



Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps, { logout })(Header);
