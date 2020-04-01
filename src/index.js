import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from "./utils/history";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//redux
import {Provider} from 'react-redux'
import store from './store'




ReactDOM.render(
  <Provider store={store}>
  <Router>
     <Route component={App} />
  </Router>
</Provider>,
  document.getElementById("root")
);


