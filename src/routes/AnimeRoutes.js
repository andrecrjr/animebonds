import React from "react";
import { Switch, Route } from "react-router";
import AnimePage from "../components/AnimePage";

function AnimeRoutes() {
  return (
    <Switch>
      <Route exact path="/anime/:id">
        <AnimePage />
      </Route>
    </Switch>
  );
}

export default AnimeRoutes;
