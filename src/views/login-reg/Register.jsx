import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertActions";
import { register } from "../../actions/authActions";
import PropTypes from 'prop-types'


const Register = ({setAlert, register, auth, history}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { city, email, password, password2 } = formData;
  
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("passwords do not match", "danger");
    } else if (auth.isAuthenticated === false ){
      register({city, email, password});
    }
  };

  console.log(auth.isAuthenticated)
  auth.isAuthenticated && setTimeout(() => history.push('/login'), 400)

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
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="8"
            value={password2}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </Fragment>
  );
};


Register.propTypes ={
  setAlert:PropTypes.func.isRequired,
  register:PropTypes.func.isRequired,
  auth: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps, { setAlert, register })(Register);
