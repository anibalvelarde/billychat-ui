// src/App.js

import React from "react";
// import NavBar from "./components/NavBar";
import NewNavBar from "./components/NewNavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/home-view/authed/Profile";
import Join from "./components/home-view/not-authed/Join";
import history from "./utils/history";
import { useAuth0 } from "./authn-authr/react-auth0-spa";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NewNavBar />
        </header>
        <Switch>
          <Route path="/" exact component={RenderHomePage()} />
        </Switch>
      </Router>
    </div>
  );
}

const RenderHomePage = () => {
  const { isAuthenticated, user, loading } = useAuth0();
  console.log({
    from: "app.js",
    isAuthenticated,
    user,
    loading
  });

  if (isAuthenticated) return Profile;
  if (!loading && !isAuthenticated) return Join;
  return;
};

export default App;
