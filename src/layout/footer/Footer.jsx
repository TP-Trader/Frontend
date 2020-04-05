import React, { useEffect } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";

const Footer = ({ auth, logout, history }) => {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    !localStorage.token && logout();
  };

  return (
    <div className="footer-container">
      <div class="footer-button-container">
        {localStorage.token ? (
          <div className="logout-btn">
            <p className="button" onClick={logout}>Log out</p>
            <Link to="/profile">
              {" "}
              <p className="button">Profile</p>{" "}
            </Link>
            <Link to="/posttrade">
              {" "}
              <p className="button">Create Post</p>{" "}
            </Link>
          </div>
        ) : (
          <div className="login-btn">
            <Link id="log-in" onClick={checkToken} to="/login">
              <p className="button">Log-in</p>
            </Link>
            <Link  onClick={checkToken} to="/register">
              <p id="register" className="button">Sign-Up</p>
            </Link>
          </div>
        )}
       
        
      </div>
      <p className="copywrite">© 2020 TP Trader</p>
    </div>
  );
};

Footer.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { logout })(Footer);
