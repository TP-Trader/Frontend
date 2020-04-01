import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passwords do not match");
    } else {
      console.log("success!!");
    }
  };

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
            minLength="6"
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

export default Register;
