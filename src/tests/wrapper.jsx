import {render, } from '@testing-library/react'
import { useReducer } from 'react';
import { BrowserRouter } from "react-router-dom";
import {AnimeContext, PageContext} from "../components/contexts";
import graphqlData from "./__mocks__/mock_graphql.json"
import dragonballPage from './__mocks__/mock_animepage.json'
import jojoMock from './__mocks__/mock_jojoanimepage.json'
import onepiecePage from './__mocks__/mock_onePieceSearchPage.json'
import { ANIME_CATEGORIES, ANIME_PAGE, ANIME_SEARCH } from '../helper';
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
             animeId: "223"
          },
        },
        result: dragonballPage,
    },
    {
        request: {
            query: ANIME_PAGE,
            variables: {
                animeId: "20474"
            },
        },
        result: jojoMock,
    },
    {
        request: {
            query: ANIME_SEARCH,
            variables: { animeFind: "One Piece" },
        },
        result: onepiecePage,
    },
    
  ];
  
  
function AllTheProviders({children}) {
    global.scroll = jest.fn()
    global.scrollTo = jest.fn()
    const history = createMemoryHistory();
    const [state,] = useReducer(AnimeReducer, animeState)
    
    const [pageState, dispatchPageState] = useReducer(PageReducer, statePage)
    
    return(
        <MockedProvider mocks={mocks} resultCaching={true}>
                <BrowserRouter history={history} >
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