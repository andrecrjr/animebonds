import React from "react";
import { CarouselRow } from "./CarouselRow";
import { useQuery } from "@apollo/client";
import { ANIME_CATEGORIES } from "../../helper/";

export function GenreRow({ genre }) {
  const { loading, data, error } = useQuery(ANIME_CATEGORIES, {
    variables: { genre: genre.animeGenre, notGenre: genre.notGenre },
  });

  if (loading) {
    return <h1>Loading {genre.animeGenre} data from AniList...</h1>;
  }

  if (data)
    return (
      <CarouselRow title={genre.animeGenre} data={data.Page} search={false} />
    );

  if (error) {
    return <h1>Some problem with {genre.animeGenre} data from anilist!</h1>;
  }
}
