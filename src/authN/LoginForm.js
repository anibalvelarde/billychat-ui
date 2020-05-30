import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { useAuth0 } from "../react-auth0-spa";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "25ch"
  }
}));

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (isAuthenticated) {
    return (
      <Button color="inherit" onClick={() => logout()}>
        Log out
      </Button>
    );
  } else {
    return (
      <Button color="inherit" onClick={() => loginWithRedirect({})}>
        Log in
      </Button>
    );
  }
};

const LoginAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Login to BillyChat.com
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12}>
          <LoginAppBar />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default LoginForm;
