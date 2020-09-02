import React, { useContext } from "react";
import { AnimeContext } from "../contexts/";

function Cells({ data }) {
  return (
    <>
      {data.media.map((item, index) => (
        <AnimeCell item={item} index={index} />
      ))}
    </>
  );
}

function AnimeCell({ item, index }) {
  const { dispatchAnime } = useContext(AnimeContext);

  return (
    <section
      className="list__cell"
      key={index}
      onClick={(e) => {
        e.preventDefault();
        dispatchAnime({ type: "SELECT_ANIME", payload: item });
        window.scrollTo({ top: 0, behavior: "smooth" });
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
