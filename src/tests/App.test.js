import { queryByTestId, screen, waitFor } from "@testing-library/react";
import Main from "../routes";
import renderWithWrappers from "./wrapper";


describe("Main component test", ()=>{
    it("should take main page", async()=>{
        const {container} = renderWithWrappers(<Main/>)
        await waitFor(() => new Promise((res) => setTimeout(res, 1)));        
        expect(container.firstChild).toMatchSnapshot()
    })

    it("should open an anime page when i click", async ()=>{
        const {container} = renderWithWrappers(<Main/>)
        const anime = "JoJo's Bizarre Adventure: Stardust Crusaders"
        await waitFor(() => new Promise((res) => setTimeout(res, 1)));        
        const image = await screen.findByAltText(anime)
        image.click();
        const button = container.querySelector(".header__anime--more")
        button.click()
        await waitFor(() => new Promise((res) => setTimeout(res, 1)));   
        expect(await screen.findByTestId(`${anime} - Page`)).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
    
})