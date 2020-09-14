import React from "react";
import { GenreRow } from "../Row/GenreRow";

function GenreList() {
  return (
    <section className="list__row">
      <GenreRow genre={{ animeGenre: ["Action"], notGenre: ["Sci-fi"] }} />
      <GenreRow genre={{ animeGenre: ["Fantasy"], notGenre: ["Romance"] }} />
      <GenreRow genre={{ animeGenre: ["Drama"], notGenre: ["Action"] }} />
      <GenreRow
        genre={{ animeGenre: ["Adventure"], notGenre: ["romance", "sci-fi"] }}
      />
      <GenreRow genre={{ animeGenre: ["Romance"], notGenre: ["action"] }} />
      <GenreRow
        genre={{ animeGenre: ["Sci-fi"], notGenre: ["romance", "adventure"] }}
      />
    </section>
  );
}

export default GenreList;
