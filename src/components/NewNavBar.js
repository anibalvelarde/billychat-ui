import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useAuth0 } from "../authn-authr/react-auth0-spa";
import CustomizedMenus from "./MainMenu";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const CallToAction = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout } = useAuth0();
  console.log({
    from: "CallToAction",
    isAuthenticated
  });

  if (isAuthenticated) {
    return <button onClick={() => logout()}>Log out</button>;
  }
  return <button onClick={() => loginWithRedirect({})}>Log in</button>;
};

const MainMenu = ({ isAuthenticated }) => {
  if (!isAuthenticated) return null;

  return <CustomizedMenus />;
};

export default function ButtonAppBar() {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MainMenu isAuthenticated={isAuthenticated} />
          <Typography variant="h6" className={classes.title}>
            www.billychat.com
          </Typography>
          <CallToAction isAuthenticated={isAuthenticated} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

MainMenu.propTypes = {
  isAuthenticated: PropTypes.bool
};
CallToAction.propTypes = {
  isAuthenticated: PropTypes.bool
};
