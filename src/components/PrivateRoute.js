// src/components/PrivateRoute.js

import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../authn-authr/react-auth0-spa";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: window.location.pathname }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} component={render} {...rest} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string
};
