import React, { useContext } from "react";
import { AnimeContext } from "../contexts/";

export function Header() {
  const { state } = useContext(AnimeContext);
  console.log(state);
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url('${state && state.selected.bannerImage}')`,
      }}
    >
      <h1
        className="header--logo"
        style={{
          textShadowColor: `1px 2px 0px ${
            Object.keys(state.selected).length > 0
              ? state.selected.coverImage.color
              : "white"
          }`,
        }}
      >
        AnimeBonds
      </h1>
      {Object.keys(state.selected).length > 0 && (
        <HeaderAnime anime={state.selected} />
      )}
    </header>
  );
}

const HeaderAnime = ({ anime }) => {
  if (anime)
    return (
      <div className="header__anime">
        <img
          className="header__anime--image"
          src={anime?.coverImage?.large}
          alt={anime.title.english}
        />
        <div className="header__anime--title-area">
          <h1 className="header__anime--title">
            {anime?.title?.userPreferred}
          </h1>
          <button
            className="header__anime--more"
            style={{ background: anime.coverImage.color }}
          >
            More About!
          </button>
        </div>
      </div>
    );
};
