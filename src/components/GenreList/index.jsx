import React from 'react';
import {GenreRow} from '../Row/GenreRow';

function GenreList() {
	return (
		<section className='list__row'>
			<GenreRow genre={{animeGenre: ['Action'], notGenre: ['Sci-fi']}} />
			<GenreRow genre={{animeGenre: ['Drama'], notGenre: ['Action']}} />
			<GenreRow
				genre={{animeGenre: ['Adventure'], notGenre: ['romance', 'sci-fi']}}
			/>
			<GenreRow genre={{animeGenre: ['Mystery']}} />
			<GenreRow genre={{animeGenre: ['Romance'], notGenre: ['action']}} />
			<GenreRow
				genre={{animeGenre: ['Sci-fi'], notGenre: ['romance', 'adventure']}}
			/>
			<GenreRow
				genre={{animeGenre: ['Fantasy'], notGenre: ['Romance', 'action']}}
			/>
			<GenreRow genre={{animeGenre: ['Ecchi']}} />
			<GenreRow genre={{animeGenre: ['Mecha']}} />
		</section>
	);
}

export default GenreList;
