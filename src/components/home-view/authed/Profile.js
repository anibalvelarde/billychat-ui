// src/components/Profile.js
import { makeStyles } from "@material-ui/core/styles";
import React, { Fragment } from "react";
import { useAuth0 } from "../../../authn-authr/react-auth0-spa";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Container } from "@material-ui/core";

const RenderCardConent = (cardId, user) => {
  const cardHeaders = ["User", "Main Info", "Details"];

  return (
    <Container>
      <Fragment>
        <h4>{cardHeaders[cardId]}</h4>
        {cardId === 0 && <img src={user.picture} alt="Profile" />}

        {cardId === 1 && <h5>{user.name}</h5>}
        {cardId === 1 && <p>{user.email}</p>}

        {cardId === 2 && <code>{JSON.stringify(user, null, 2)}</code>}
      </Fragment>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    height: 350
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const Profile = () => {
  const classes = useStyles();
  const { loading, user } = useAuth0();
  const spacing = 5;

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Card
                className={Object.assign(
                  { width: 200 + 100 * value },
                  classes.card
                )}
              >
                {RenderCardConent(value, user)}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
