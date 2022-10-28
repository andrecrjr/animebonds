import {AnimeProfileChar} from './AnimeProfileChar';
import {useOutletContext} from 'react-router-dom';
export const OverviewPage = (props) => {
	const {Media, characters} = useOutletContext();
	return (
		<section className='anime__bio'>
			<section className='anime__bio--text'>
				<h1>Anime Bio:</h1>
				<p
					className='description'
					dangerouslySetInnerHTML={{__html: `${Media.description}`}}
				></p>
			</section>
			<AnimeProfileChar characters={characters} />
		</section>
	);
};
