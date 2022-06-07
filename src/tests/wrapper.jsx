import {render, } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { Router } from "react-router-dom";
import {AnimeContext, PageContext} from "../components/contexts";
import graphqlData from "./__mocks__/mock_graphql.json"
import dragonballPage from './__mocks__/mock_animepage.json'
import { ANIME_CATEGORIES, ANIME_PAGE } from '../helper';
import { MockedProvider } from '@apollo/client/testing';
import { initialState as animeState, PageReducer } from '../components/reducers/searchReducer';
import {AnimeReducer, initialState as statePage} from '../components/reducers'
import { createMemoryHistory } from "history";

const mocks = [
    {
      request: {
        query: ANIME_CATEGORIES,
        variables: {
            genre: ["Action"],
            notGenre: ["Sci-fi"]
        },
      },
      result: graphqlData,
      },
      {
        request: {
          query: ANIME_PAGE,
          variables: {
             animeId: 223
          },
        },
        result: dragonballPage,
        },
  ];


function AllTheProviders({children}) {
    global.scrollTo = jest.fn()
    global.scroll = jest.fn()
    const history = createMemoryHistory();
    const [state,] = useReducer(AnimeReducer, animeState)
    
    const [pageState, dispatchPageState] = useReducer(PageReducer, statePage)
    
    return(
        <MockedProvider mocks={mocks} addTypename={false}>
                <Router location={history.location} navigator={history}>
                    <PageContext.Provider value={{pageState, dispatchPageState}}>
                        <AnimeContext.Provider value={{state}}>
                            {children}
                        </AnimeContext.Provider>
                    </PageContext.Provider>
                </Router>
            </MockedProvider>
    )
}

const renderWithWrappers = (component, options) =>{
    return (
        render(component, {wrapper:AllTheProviders, ...options})
    )
}

export default renderWithWrappers;