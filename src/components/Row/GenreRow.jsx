import React from 'react';
import { CarouselRow } from './CarouselRow';
import { useQuery } from '@apollo/client';
import { ANIME_CATEGORIES } from '../../helper/';

export function GenreRow({ genre }) {
	const { loading, data, error } = useQuery(ANIME_CATEGORIES, {
		variables: { genre: genre.animeGenre, notGenre: genre.notGenre }
	});

	if (error) {
		return <h1>Some problem with {genre.animeGenre} data from anilist!</h1>;
	}
	return (
		<CarouselRow
			loading={loading}
			title={genre.animeGenre}
			data={data?.Page}
			search={false}
		/>
	);
}
