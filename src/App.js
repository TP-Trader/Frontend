import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Header from "./layout/header/header";
// import Login from './views/login-reg/Login'
import Register from "./views/login-reg/Register";
import Landing from "./views/landing/Landing";
import Browse from "./views/browse/Browse";

import Profile from "./views/profile/Profile";
import Notfound from "./layout/notfound/Notfound";
import About from "./views/about/About";
import Footer from "./layout/footer/Footer";
import Alert from "./layout/alerts/alert";
import LoginModal from "./views/login-reg/LoginModal";
import RegModal from "./views/login-reg/regModal";

const App = () => {
  return (
    <div className="App">
      {/*       
      <LoginModal/> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route component={Notfound} />
      </Switch>

      {/* modals go here */}
      <LoginModal />
      <RegModal />
      <Footer />
    </div>
  );
};

export default App;
