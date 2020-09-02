import React, { useContext } from "react";
import { AnimeContext } from "../contexts/";

export function Header() {
  const { state } = useContext(AnimeContext);
  console.log(state);
  if (Object.keys(state.selected).length > 0) {
    return (
      <header
        className="header"
        style={{
          background: `url('${state.selected.bannerImage}') no-repeat top center fixed`,
          zIndex: "-1",
        }}
      >
        <h1 className="header--logo">AnimeBonds</h1>
        <HeaderAnime anime={state.selected} />
      </header>
    );
  }
  return null;
}

const HeaderAnime = ({ anime }) => {
  console.log(anime);
  if (anime)
    return (
      <div className="header__anime">
        <h1 className="header__anime--title">{anime?.title?.english}</h1>
        <img
          className="header__anime--image"
          src={anime?.coverImage?.medium}
          alt={anime.title.english}
        />
      </div>
    );
};
