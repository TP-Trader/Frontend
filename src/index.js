import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import history from './utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {ProductProvider } from './context'
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import * as serviceWorker from './serviceWorker';


const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
  domain={config.domain}
  client_id={config.clientId}
  redirect_uri={window.location.origin}
  onRedirectCallback={onRedirectCallback}
>
  <ProductProvider>
    <Router history={history}>
      <App />
    </Router>
  </ProductProvider>
  </Auth0Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
