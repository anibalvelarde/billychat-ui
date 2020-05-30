import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Provider from "layouts/Provider.js";
import Client from "layouts/Client.js";
import PrivateRoute from "./components/PrivateRoute";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import LoginForm from "authN/LoginForm";

const hist = createBrowserHistory();

const App = () => {
  console.log({
    from: "app.js",
    path: hist.location.pathname
  });
  return (
    <Router history={hist}>
      <header>
        <LoginForm />
      </header>
      <Switch>
        <Route path="/" exact />
        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="/provider" component={Provider} />
        <PrivateRoute path="/client" component={Client} />
      </Switch>
    </Router>
  );
};

export default App;
