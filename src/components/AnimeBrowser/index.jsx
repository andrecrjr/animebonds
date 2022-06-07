import React, { useState, useContext } from "react";
import { PageContext } from "../contexts";
import Layout from "../Layout";
import { useLazyQuery } from "@apollo/client";
import { CarouselRow } from "../Row/CarouselRow";
import { useLocation } from "react-router-dom";
import { ANIME_SEARCH } from "../../helper";

function AnimeBrowser() {
  const { dispatchPageState } = useContext(PageContext);
  
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
  React.useEffect(() => {
    if (queryAnime !== "") {
      dispatchPageState({
        type: "SEARCH_ANIME",
        payload: { search: true, textSearch: queryAnime },
      });
      getAnimeName();
    }
  }, [queryAnime, getAnimeName, dispatchPageState]);
  return (
    <Layout>
      <section className="anime__page--search">
        <input
          type="text"
          className="search__input"
          placeholder={`Search your favorite animes`}
          value={animeSearch}
          onChange={(e) => {
            e.preventDefault();
            setAnimeFind(e.target.value);
            dispatchPageState({
              type: "SEARCH_ANIME",
              payload: { search: true, textSearch: e.target.value },
            });
            getAnimeName();
          }}
        />
        {loading && <h2 style={{ paddingTop: 25 }}>Searching</h2>}
        {error && <h2>Whoops there was a problem into your search!</h2>}

        {data && <SearchRow data={data.Page} />}
      </section>
    </Layout>
  );
}

const SearchRow = ({ data }) => {
  if (data.media.length > 0)
    return (
      <section className="list__row">
        <CarouselRow data={data} search={true} />
      </section>
    );

  return null;
};

export default AnimeBrowser;
