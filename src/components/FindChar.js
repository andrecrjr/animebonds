import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { MainRoutes } from "./AppRoutes";
import { useHistory } from "react-router-dom";
import { SEARCH_ANIME_QUERY } from "../helper/gqlqueries";
import { getColorImage, colorReduce } from "../helper/";
import wallpaper_anime from '../img/anime-wall.jpg';

const FindChar = props => {
  const [anime, setAnime] = useState("naruto");
  const [imgBg, setImg] = useState("");
  const { loading, error, data } = useQuery(SEARCH_ANIME_QUERY, {
    variables: { name: anime || anime !== null }
  });
  const his = useHistory();
  const [colors, dispatchColor] = React.useReducer(colorReduce);


  const findAnime = e => {
    e.preventDefault();
  };

  const backToIndex = history => history.push("/");

  React.useEffect(() => {
    var paramsBusca = new URLSearchParams(his.location.search);
    if (paramsBusca.get("from") === "index") {
      backToIndex(his);
    }
    if(imgBg){
      getColorImage(imgBg, dispatchColor)
    }
  }, [imgBg]);

  return (
    <>
      <section
        className="container--general"
        style={{
          backgroundImage: `url(${imgBg ? imgBg : wallpaper_anime})`,
          minHeight: "100vh"
        }}
      >
        
        <div className="block--search">
          <h1
            style={{
              color: `${colors ? colors[0] : `#000`}`
            }}
          >
            Anime List Search
          </h1>
          <AnimeForm findAnime={findAnime} anime={anime} setAnime={setAnime} backToIndex={backToIndex} his={his}/>
        </div>
        {anime === "" ? (
          <h2 className="char__waiting">Waiting for your anime, senpai!</h2>
        ) : (
          ``
        )}
        <NameAnime data={data} anime={anime} color={colors}/>
        {loading ? (
          <h2 className="container--loading">Loading</h2>
        ) : (
          <>
            <MainRoutes data={data} setImg={setImg} />
          </>
        )}

        {error ? <h2>Error 404</h2> : ``}
      </section>
    </>
  );
};

const NameAnime = ({ data, anime, color }) =>
  data !== undefined && anime !== "" ? (
    <h1 className="container--chars__title" style={{color:`${color ? color[0] : `#000`}`}}>{`${data.Media.title.english}`}</h1>
  ) : (
    ``
  );

const AnimeForm = ({findAnime,  setAnime, backToIndex, anime, his}) =>{
  return (
    <form onSubmit={findAnime}>
            <input
              type="text"
              value={anime}
              onChange={e => {
                setAnime(e.target.value);
              }}
              onClick={e => {
                if (e.target.value.length > 0) {
                  setAnime("");
                }
                backToIndex(his);
              }}
            />
          </form>
  )
}

export default FindChar;
