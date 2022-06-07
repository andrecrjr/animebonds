import { screen, waitFor } from "@testing-library/react";
import Main from "../routes";
import renderWithWrappers from "./wrapper";


describe("Main component test", ()=>{
    it("should take main page", async()=>{
        const {container} = renderWithWrappers(<Main/>)
        await waitFor(() => new Promise((res) => setTimeout(res, 1)));        
        expect(container.firstChild).toMatchSnapshot()
    })
    it("should click in one anime and redirect", async ()=>{
        const {container} = renderWithWrappers(<Main/>)
  
        
        const anime = "Dragon Ball"
        await waitFor(() => new Promise((res) => setTimeout(res, 1)));        
        const image = await screen.findByAltText(anime)
        image.click();
        await waitFor(() => new Promise((res) => setTimeout(res, 1)));
        const button = container.querySelector(".header__anime--more")
        button.click()
           
        expect(container.querySelector).toBeInTheDocument()
    })
})