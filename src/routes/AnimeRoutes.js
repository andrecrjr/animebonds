import React, {useReducer} from "react";
import { Switch, Route } from "react-router";
import AnimePage from "../components/AnimePage";
import AnimeBrowser from "../components/AnimeBrowser";
import { PageContext } from '../components/contexts/';
import { PageReducer, initialState } from '../components/reducers/searchReducer'

function AnimeRoutes() {
  const [pageState, dispatchPageState] = useReducer(PageReducer, initialState)
  
  return (
    <PageContext.Provider value={{ pageState, dispatchPageState }}>
        <Switch>
          <Route exact path="/anime/:id">
            <AnimePage />
          </Route>
          <Route path="/browser">
            <AnimeBrowser />
          </Route>
        </Switch>
    </PageContext.Provider>
  );
}

export default AnimeRoutes;
