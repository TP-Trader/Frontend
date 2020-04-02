import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import { login } from "../../actions/authActions";
import PropTypes from 'prop-types'


const Login = ({setAlert, login, auth, history}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    authenticated: false
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login({email, password})
    // checkAuth()
  };

  // console.log(auth.isAuthenticated)
  // const checkAuth=()=>{
  //   setTimeout(() => auth.isAuthenticated ? history.push('/') : setAlert("Email or Password is incorrect", "danger"), 50)
  // }


  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
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
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes ={
  auth: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps, {login, setAlert})(Login);
