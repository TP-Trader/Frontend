import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";

import Header from "./layout/header/header";
import Footer from "./layout/footer/Footer";
import Landing from "./views/landing/Landing";
import Browse from "./views/browse/Browse";
import About from "./views/about/About";
import Posttrade from "./views/posttrade/PostTrade";
import Profile from "./views/profile/Profile";
import Notfound from "./layout/notfound/Notfound";


function App() {
  return (
    <Fragment className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posttrade" component={Posttrade} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Notfound} />
      </Switch>
      {/* modals go here */}
      <Footer />
    </Fragment>
  );
}

export default App;
