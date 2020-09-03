import React, { useReducer } from "react";
import ListRows from "../components/ListRows";
import { AnimeContext } from "../components/contexts";
import { Header } from "../components/header";
import { AnimeReducer, initialState } from "../components/reducers/";
import { BrowserRouter as Router, Switch } from "react-router-dom";

export default function Main() {
  const [state, dispatchAnime] = useReducer(AnimeReducer, initialState);

  return (
    <main>
      <AnimeContext.Provider value={{ state, dispatchAnime }}>
        <Header />
        <ListRows />
      </AnimeContext.Provider>
    </main>
  );
}
