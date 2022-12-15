import React, { useReducer } from 'react';

import { AnimeContext } from '../components/contexts';
import { AnimeReducer, initialState } from '../components/reducers';
import Header from '../components/Header';

import { AnimatePresence, motion } from 'framer-motion';
import GenreList from '../components/GenreList';
import AnimePage from './AnimeRoutes';

export default function Main() {
	const [state, dispatchAnime] = useReducer(AnimeReducer, initialState);

	return (
		<main>
			<AnimatePresence>
				<AnimeContext.Provider value={{ state, dispatchAnime }}>
					<Header />
					<motion.section
						layout
						className="list__page"
						style={{
							paddingTop: state?.selected?.cont === 0 && '0'
						}}
					>
						<AnimePage />
						<GenreList />
					</motion.section>
				</AnimeContext.Provider>
			</AnimatePresence>
		</main>
	);
}
