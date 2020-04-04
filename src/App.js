import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Header from "./layout/header/header";
import Login from './views/login-reg/Login'
import Register from './views/login-reg/Register'
import Landing from "./views/landing/Landing";
import Browse from "./views/browse/Browse";
import Posttrade from "./views/posttrade/PostTrade";
import Profile from "./views/profile/Profile";
import Notfound from "./layout/notfound/Notfound";
import About from "./views/about/About";
import Footer from "./layout/footer/Footer";
import Alert from './layout/alerts/alert'


const App = () => {
  return (
    <Fragment className="App">
      <Header />
      <Alert/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/posttrade" component={Posttrade} />
        <Route exact path="/about" component={About} />
        <Route component={Notfound} />
      </Switch>
      {/* modals go here */}
      <Footer />
    </Fragment>
  );
}

export default App;
