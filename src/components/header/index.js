import React, { useContext } from "./node_modules/react";
import { AnimeContext } from "../contexts";
import { useHistory } from "./node_modules/react-router-dom";

export function HeaderTopo() {
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
            state.selected.cont > 0 ? state.selected.coverImage.color : "white"
          }`,
        }}
      >
        AnimeBonds
      </h1>
      {state.selected.cont > 0 && (
        <>
          <HeaderAnime anime={state.selected} />
          <div className="shadows"></div>
        </>
      )}
    </header>
  );
}

const HeaderAnime = ({ anime }) => {
  const history = useHistory();
  const redirectPage = (e, animeId) => {
    e.preventDefault();
    window.scroll(0, 500);
    history.push(`/anime/${animeId}`);
  };
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
            onClick={(e) => redirectPage(e, anime.id)}
          >
            Read about!
          </button>
        </div>
      </div>
    );
};
