import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { MainRoutes } from "./AppRoutes";
import { useHistory } from "react-router-dom";
import { SEARCH_ANIME_QUERY } from "../helper/gqlqueries";
import { getColorImage, colorReduce } from "../helper/";

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
          backgroundImage: `url(${imgBg})`,
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

          <form onSubmit={findAnime}>
            <input
              type="text"
              value={anime}
              onChange={e => {
                setAnime(e.target.value);
              }}
              onClick={e => {
                if (e.target.value.length > 0) {
                  console.log("bateu aqui");
                  setAnime("");
                }
                backToIndex(his);
              }}
            />
          </form>
        </div>
        {anime === "" ? (
          <p className="char__waiting">Esperando nome do anime...</p>
        ) : (
          ``
        )}
        <NameAnime data={data} anime={anime} />
        {loading ? (
          <>Carregando</>
        ) : (
          <>
            <MainRoutes data={data} setImg={setImg} />;
          </>
        )}

        {error ? <p>Quebrou</p> : ``}
      </section>
    </>
  );
};

const NameAnime = ({ data, anime }) =>
  data !== undefined && anime !== "" ? (
    <h1 className="container--chars__title">{`${data.Media.title.english}`}</h1>
  ) : (
    ``
  );

export default FindChar;
