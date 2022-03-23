import React, {useReducer} from "react";
import {Routes, Route} from "react-router-dom";
import AnimePage from "../components/AnimePage";
import {OverviewPage} from "../components/AnimePage/AnimeBio";
import {AnimeEpisodes} from "../components/AnimePage/AnimeEpisodes";
import AnimeBrowser from "../components/AnimeBrowser";
import {PageContext} from "../components/contexts";
import {PageReducer, initialState} from "../components/reducers/searchReducer";

function AnimeRoutes() {
	const [pageState, dispatchPageState] = useReducer(PageReducer, initialState);

	return (
		<PageContext.Provider value={{pageState, dispatchPageState}}>
			<Routes>
				<Route path='/anime/:id' element={<AnimePage />}>
					<Route path='overview' element={<OverviewPage />} />
					<Route path='episodes' element={<AnimeEpisodes />} />
				</Route>
				<Route path='/browser' element={<AnimeBrowser />} />
			</Routes>
		</PageContext.Provider>
	);
}

export default AnimeRoutes;
