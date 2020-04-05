import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import { login } from "../../actions/authActions";
import PropTypes from "prop-types";
import Alert from "../../layout/alerts/alert";
import "./login.css";

const LoginModal = ({ setAlert, login, auth, history }) => {
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
    <div className="loginModal-off">
      <div className="loginModal-container"></div>
      <div className="modalbox">
        <form className="modal-form" onSubmit={(e) => onSubmit(e)}>
          Login
          <Alert />
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
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
              required
            />
          </div>
          <div className="login-modal-btn">
            <input type="submit" value="Login" id="submit" />
            <Link to="/register" >
              <p id="sign-up">
                Sign Up
              </p>
              
            </Link>
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

export default connect(mapStateToProps, { setAlert, login, alert })(LoginModal);
