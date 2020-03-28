import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./utils/PrivateRoute"

import Header from "./layout/header/header";
import Footer from "./layout/footer/Footer";
import Landing from "./views/landing/Landing";
import Browse from "./views/browse/Browse";
import Offer from "./views/offer/Offer";
import Posttrade from "./views/posttrade/PostTrade";
import Profile from "./views/profile/Profile";
import Notfound from "./layout/notfound/Notfound";

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/browse" component={Browse} />
        <PrivateRoute exact path="/offer" component={Offer} />
        <PrivateRoute exact path="/posttrade" component={Posttrade} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route component={Notfound} />
      </Switch>
      {/* modals go here */}
      <Footer />
    </Fragment>
  );
}

export default App;
