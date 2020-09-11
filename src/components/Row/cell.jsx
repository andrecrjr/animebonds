import React, { useContext } from "react";
import { AnimeContext } from "../contexts/";
import { useHistory } from "react-router-dom";

function Cells({ data, search, searchTitle }) {
  return (
    <>
      {data.media.map((item, index) => (
        <AnimeCell
          item={item}
          key={item.id}
          index={item.id}
          search={search}
          title={searchTitle}
        />
      ))}
    </>
  );
}

function AnimeCell({ item, index, search, title }) {
  const { dispatchAnime } = useContext(AnimeContext);
  const history = useHistory();
  return (
    <section
      className="list__cell"
      onClick={(e) => {
        e.preventDefault();
        if (!search) {
          dispatchAnime({ type: "SELECT_ANIME", payload: item });
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          history.push(`/anime/${item.id}`, {
            animeBack: encodeURIComponent(title),
          });
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

export default Cells;
