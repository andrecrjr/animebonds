import React, { useContext } from "react";
import { AnimeContext, PageContext } from "../contexts/";
import { useNavigate } from "react-router-dom";


export const Cells = ({ data }) => {
  return (
    <>
      {data.media.map((item) => (
        <AnimeCell
          item={item}
          key={item.id}
          index={item.id}
        />
      ))}
    </>
  );
}

export const AnimeEpisodeCell = ({ data }) => {
  
  return ( <>{data.map(item => {
    return (
      <section className="list__episode">
            <a href={ `${item.url}` } target="_blank">
              <img src={ `${item.thumbnail}` } alt="" width="150" />
            </a>
            <div class="list__episode--title">
              {item.title}
            </div>
      </section>)
    }) }</>)
}

function AnimeCell({ item, index }) {
  const { dispatchAnime } = useContext(AnimeContext);
  const { pageState } = useContext(PageContext)
  const navigate = useNavigate();
  return (
    <section
      className="list__cell"
      onClick={(e) => {
        e.preventDefault();
        if (typeof pageState !== "undefined" && pageState.search.search) {
          navigate(`/anime/${item.id}`, {
            animeBack: encodeURIComponent(pageState.search.textSearch),
          });
        } else {
          dispatchAnime({ type: "SELECT_ANIME", payload: item });
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <img
        src={item.coverImage.large}
        className={`list__cell--item ${index}`}
        alt={index}
      />
    </section>
  );
}


