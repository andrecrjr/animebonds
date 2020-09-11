import React from "react";
import { Switch, Route } from "react-router";
import AnimePage from "../components/AnimePage";
import AnimeBrowser from "../components/AnimeBrowser";

function AnimeRoutes() {
  return (
    <Switch>
      <Route exact path="/anime/:id">
        <AnimePage />
      </Route>
      <Route path="/browser">
        <AnimeBrowser />
      </Route>
    </Switch>
  );
}

export default AnimeRoutes;
