import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import { register } from "../../actions/authActions";
import { cities } from "../../data";
import PropTypes from "prop-types";
import Alert from "../../layout/alerts/alert";
import "./login.css";

const RegModal = ({ setAlert, register, auth, history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    city: "",
  });

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(cities);
  }, []);

  const { city, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("passwords do not match", "danger");
    } else if (auth.isAuthenticated === false) {
      register({ city, email, password });
    }
  };

  console.log(formData)

  // console.log(`auth.redir: ${auth.redir}`)
  //auth.redir && setTimeout(() => history.push('/login'), 400)

  return (
    <div className="loginModal-off">
      <div className="loginModal-container"></div>
      <div className="modalbox">
        <form className="modal-form" onSubmit={(e) => onSubmit(e)}>
          <Alert />
          Sign-Up
          
          <div className="form-group">
            <select name="city" onChange={onChange} class="form-control">
              <option value="">Choose a City</option>
              {places.map((city, i) => (
                <option value={city} key={i}>
                  {city}
                </option>
              ))}
            </select>
            {/* Item/Service drop menu */}
          </div>
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
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="8"
              value={password2}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="login-modal-btn">
            <input type="submit" value="register" id="submit"/>
             
            <p id="sign-up">Cancel</p>
          </div>
        </form>
      </div>
    </div>
  );
};

RegModal.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { setAlert, register, alert })(
  RegModal
);
