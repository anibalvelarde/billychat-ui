import React from "react";

const AuthenticationContext = React.createContext();

const useAuthN = () => {
  const context = React.useContext(AuthenticationContext);
  if (!context) {
    throw new Error(`useAuthN must be used within an AuthenticationProvider`);
  }
  return context;
};

const AuthenticationProvider = props => {
  const [AuthN, setAuthN] = React.useState({
    isAuthenticated: true
  });
  const value = React.useMemo(() => [AuthN, setAuthN], [AuthN]);
  return <AuthenticationContext.Provider value={value} {...props} />;
};

const AuthenticationForm = () => {
  return <h1>Autentication goes here.</h1>;
};

export { AuthenticationProvider, useAuthN, AuthenticationForm };
