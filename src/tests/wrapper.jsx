import {render, } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { BrowserRouter } from "react-router-dom";
import {AnimeContext, PageContext} from "../components/contexts";
import graphqlData from "./__mocks__/mock_graphql.json"
import { ANIME_CATEGORIES } from '../helper';
import { MockedProvider } from '@apollo/client/testing';
import { initialState as animeState, PageReducer } from '../components/reducers/searchReducer';
import {AnimeReducer, initialState as statePage} from '../components/reducers'
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
    
  ];


function AllTheProviders({children}) {
    
    const [state,] = useReducer(AnimeReducer, animeState)
    
    const [pageState, dispatchPageState] = useReducer(PageReducer, statePage)

    return(
        <MockedProvider mocks={mocks} addTypename={false}>
                <BrowserRouter>
                    <PageContext.Provider value={{pageState, dispatchPageState}}>
                        <AnimeContext.Provider value={{state}}>
                            {children}
                        </AnimeContext.Provider>
                    </PageContext.Provider>
                </BrowserRouter>
            </MockedProvider>
    )
}

const renderWithWrappers = (component, options) =>{
    return (
        render(component, {wrapper:AllTheProviders, ...options})
    )
}

export default renderWithWrappers;