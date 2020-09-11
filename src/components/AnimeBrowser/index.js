import React, { useState } from "react";
import Layout from "../Layout";
import { useLazyQuery } from "@apollo/client";
import Row from "../Row";
import { useLocation } from "react-router-dom";

import { ANIME_SEARCH } from "../../helper";

function AnimeBrowser() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryAnime =
    decodeURIComponent(queryParams.get("anime")) === "null"
      ? ""
      : decodeURIComponent(queryParams.get("anime"));

  const [animeSearch, setAnimeFind] = useState(null || queryAnime);
  const [getAnimeName, { loading, data, error }] = useLazyQuery(ANIME_SEARCH, {
    variables: { animeFind: animeSearch },
  });
  console.log(queryAnime);
  React.useEffect(() => {
    if (queryAnime !== "") {
      getAnimeName();
    }
  }, [queryAnime, getAnimeName]);
  return (
    <Layout search={true} animeSearch={animeSearch}>
      <section className="anime__page--search">
        <input
          type="text"
          className="search__input"
          placeholder={`Search your favorite animes`}
          value={animeSearch}
          onChange={(e) => {
            e.preventDefault();
            setAnimeFind(e.target.value);
            getAnimeName();
          }}
        />
        {loading && <h2 style={{ paddingTop: 25 }}>Searching</h2>}
        {error && <h2>Whoops there was a problem into your search!</h2>}

        {data && <SearchRow data={data.Page} animeSearch={animeSearch} />}
      </section>
    </Layout>
  );
}

const SearchRow = ({ animeSearch, data }) => {
  if (data.media.length > 0)
    return (
      <section className="list__row">
        <Row title={animeSearch} data={data} search={true} />
      </section>
    );

  return null;
};

export default AnimeBrowser;
