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

  // const currentDateAndTime = new Date().toLocaleString();
  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  // " " +
  // today.getHours() +
  // ":" +
  // today.getMinutes() +
  // ":" +
  // today.getSeconds();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className="header-container">
      <div className="title-container">
        <div className='clock'>
        <p>{date} <br/>{time}</p>
       </div>
        

        <div className="logo-box">
          <Link to="/">
            <img src={Logo} alt="TP Logo" className="logo" />
          </Link>
          <h1>Tp Trader</h1>
        </div>

        {localStorage.token ? <p className='welcome'>Welcome,<br/> {localStorage.email}</p> : <div></div>}
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
