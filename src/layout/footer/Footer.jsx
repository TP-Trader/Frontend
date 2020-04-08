import React, { useEffect } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, openLoginModal, closeRegModal, openRegModal  } from "../../actions/authActions";


const Footer = ({ auth, logout, history, openLoginModal, openRegModal }) => {
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
            <p className="button" id="log-out" onClick={logout}>Log out</p>
            <Link to="/profile">
              {" "}
              <p className="button" id='profile-btn'>Profile</p>{" "}
            </Link>
            <Link to="/posttrade">
              {" "}
              <p className="button" id='create-profile-btn'>Create Post</p>{" "}
            </Link>
          </div>
        ) : (
          <div className="login-btn">
            
              <p id="log-in" onClick={openLoginModal} className="button">Log-in</p>
           
           
              <p id="register" className="button" onClick={openRegModal}>Sign-Up</p>
           
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

export default connect(mapStateToProps, { logout, openLoginModal, openRegModal  })(Footer);
