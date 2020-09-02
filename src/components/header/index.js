import React, { useContext } from "react";
import { AnimeContext } from "../contexts/";

export function Header() {
  const { state } = useContext(AnimeContext);

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url('${state && state.selected.bannerImage}')`,
      }}
    >
      <h1 className="header--logo">AnimeBonds</h1>
      {Object.keys(state.selected).length > 0 && (
        <HeaderAnime anime={state.selected} />
      )}
    </header>
  );
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
