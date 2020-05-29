import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import {
  AuthenticationProvider,
  useAuthN,
  AuthenticationForm
} from "./authN/AuthenticationContext";
import Admin from "layouts/Admin.js";
import Provider from "layouts/Provider.js";
import Client from "layouts/Client.js";
// import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

const DisplayApp = () => {
  const [AuthN] = useAuthN();

  return (
    <Router history={hist}>
      {AuthN.isAuthenticated && (
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/provider" component={Provider} />
          <Route path="/client" component={Client} />
          {/* <Route path="/rtl" component={RTL} /> */}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      )}
      {!AuthN.isAuthenticated && (
        <Switch>
          <Route path="/login" component={AuthenticationForm} />
          <Redirect from="/" to="/login" />
        </Switch>
      )}
    </Router>
  );
};

export const App = () => {
  return (
    <AuthenticationProvider>
      <DisplayApp />
    </AuthenticationProvider>
  );
};
