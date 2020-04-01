// REACT
import React from "react";
import { Route, Redirect, withRouter } from "react-router";
// REDUX
import { connect } from "react-redux";
// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //
const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};
// MAP STATE TO PROPS
const mapStateToProps = state => {
  return {
    token: localStorage.getItem("Authorization")
  };
};
// CONNECT
export default withRouter(connect(mapStateToProps, {})(PrivateRoute));
