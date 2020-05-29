import React from "react";
import LoginForm from "./LoginForm";

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
    isAuthenticated: false
  });
  const value = React.useMemo(() => [AuthN, setAuthN], [AuthN]);
  return <AuthenticationContext.Provider value={value} {...props} />;
};

const AuthenticationForm = props => {
  return <LoginForm props={props} />;
};

export { AuthenticationProvider, useAuthN, AuthenticationForm };
