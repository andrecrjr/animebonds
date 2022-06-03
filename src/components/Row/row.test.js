import React from 'react'
import { fireEvent, render, screen, waitFor } from "@testing-library/react"


import { BrowserRouter } from "react-router-dom";
import {AnimeContext} from "../contexts";
import { MockedProvider } from '@apollo/client/testing';
import { ANIME_CATEGORIES } from '../../helper';
import graphqlData from "../../tests/__mocks__/mock_graphql.json"
import { GenreRow } from './GenreRow';
import { AnimeCell } from './cell';
import renderWithWrappers from '../../tests/wrapper'


describe("Genre row component", ()=>{

    it("should get all genre row", async()=>{
        
        const {container} = renderWithWrappers(
            <GenreRow genre={{animeGenre: ["Action"], notGenre: ["Sci-fi"]}}/>
        );
        await waitFor(() => new Promise((res) => setTimeout(res, 1)));
        expect(container.firstChild).toMatchSnapshot()
    })


})

describe("Anime cell component", ()=>{
    it("should show cell anime image from data", ()=>{
        renderWithWrappers(
            <AnimeCell item={graphqlData.data.Page.media[8]} index={8}/>
        );
        const imageAlt = screen.getByAltText("JoJo's Bizarre Adventure (TV)")
        expect(imageAlt.src).toBe("https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14719-XFOPewvDtDdA.jpg")
        
    })

    it("should get one cell of genre row", ()=>{
        const {container} = renderWithWrappers(
                <AnimeCell item={graphqlData.data.Page.media[0]} index={0}/>
        );
        expect(container.firstChild).toMatchSnapshot()
    })
    
    it("should one cell be re-usable", ()=>{
        const {container, rerender} = renderWithWrappers(
             <AnimeCell item={graphqlData.data.Page.media[0]} index={0}/>
        );
        rerender(
                <AnimeCell item={graphqlData.data.Page.media[5]} index={5}/>
           )
        expect(container.firstChild).toMatchSnapshot()
    })
})

