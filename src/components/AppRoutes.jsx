import React, { useState } from "react";
import { EachCharacter } from "./Characters";
import { CharPage } from "./CharPage";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const MainRoutes = ({ data, setImg }) => {
  const loc = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={loc.key}
        classNames="char"
        timeout={{ enter: 3000, exit: 300 }}
        unmountOnExit
      >
        <Switch location={loc}>
          <Route exact path="/">
            <EachCharacter data={data} setimg={setImg} />
          </Route>
          <Route path="/char/:id" component={CharPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
