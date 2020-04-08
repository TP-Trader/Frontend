import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import {
  login,
  closeLoginModal,
  openRegModal,
} from "../../actions/authActions";
import PropTypes from "prop-types";
import Alert from "../../layout/alerts/alert";
import "./login.css";

const LoginModal = ({
  setAlert,
  login,
  auth,
  history,
  closeLoginModal,
  openRegModal,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    console.log(`auth.isAuthorized: ${auth.isAuthenticated}`);
  };

  // auth.isAuthenticated && setTimeout(() => history.push('/'), 400)

  return (
    <div
      className={auth.loginModalOpen === true ? "loginModal" : "loginModal-off"}
    >
      <div className="loginModal-container"></div>
      <div className="modalbox">
        <form className="modal-form" onSubmit={(e) => onSubmit(e)}>
          <p className="ex" onClick={closeLoginModal}>
            <i class="fas fa-window-close"></i>
          </p>
          Login
          <Alert />
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              className="login-input"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="8"
              value={password}
              onChange={(e) => onChange(e)}
              className="login-input"
              id="pw"
              required
            />
          </div>
          <div className="login-modal-btn">
            <input type="submit" value="Login" id="submit" />

            <p id="sign-up" onClick={openRegModal}>
              Sign Up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, {
  setAlert,
  login,
  alert,
  closeLoginModal,
  openRegModal,
})(LoginModal);
