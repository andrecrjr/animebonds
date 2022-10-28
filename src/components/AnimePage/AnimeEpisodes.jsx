import {useOutletContext} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {ANIME_EPISODES_PAGE} from '../../helper/';
export const AnimeEpisodes = () => {
	const {id} = useOutletContext();
	const {loading, data, error} = useQuery(ANIME_EPISODES_PAGE, {
		variables: {animeId: id || 0},
	});
	if (data) {
		return (
			<section className='anime__episodes'>
				<h1>Episodes</h1>
				{data.Media.streamingEpisodes.length > 0 ? (
					<AnimeEpisodeCell data={data.Media.streamingEpisodes} />
				) : (
					<p>No episodes in streaming from this anime, sorry :(</p>
				)}
			</section>
		);
	}
	if (error) {
		return <h2>Oops! found some problem try again later!</h2>;
	}
	return <></>;
};

export const AnimeEpisodeCell = ({data}) => {
	return (
		<>
			{data.map((item) => {
				return (
					<a href={`${item.url}`} rel="noreferrer" key={item.url} target='_blank' className='episode'>
						<section className='list__episode'>
							<img
								src={`${item.thumbnail}`}
								alt={item.title}
								width='150'
								title={item.title}
							/>
							<div className='list__episode--title'>{item.title}</div>
						</section>
					</a>
				);
			})}
		</>
	);
};
