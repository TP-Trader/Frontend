import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assetts/tplogotransparent.png";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";

const Header = ({ auth, logout, history }) => {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    !localStorage.token && logout();
  };

  const currentDateAndTime = new Date().toLocaleString();

  return (
    <div className="header-container">
      <div className="title-container">
      {currentDateAndTime}
        <div className="logo-box">
        <Link to="/">
          <img src={Logo} alt="TP Logo" className="logo" />
        </Link>
        <h1>Tp Trader</h1>
        </div>
        
        
        {localStorage.token && <h6>Welcome, {localStorage.email}</h6>}
      </div>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { logout })(Header);
