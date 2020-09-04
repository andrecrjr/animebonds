import React, { useReducer } from "react";

import { AnimeContext } from "../components/contexts";
import { AnimeReducer, initialState } from "../components/reducers/";
import { Header } from "../components/header";

import ListRows from "../components/ListRows";
import AnimePage from "./AnimeRoutes";

export default function Main() {
  const [state, dispatchAnime] = useReducer(AnimeReducer, initialState);

  return (
    <main>
      <AnimeContext.Provider value={{ state, dispatchAnime }}>
        <Header />
        <section
          className="list__page"
          style={{
            paddingTop: state.selected.cont === 0 && "0",
          }}
        >
          <AnimePage />
          <ListRows />
        </section>
      </AnimeContext.Provider>
    </main>
  );
}
