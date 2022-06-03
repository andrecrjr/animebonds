import { Header } from "."
import React from 'react'
import {  render, screen } from "@testing-library/react"
import renderWithWrappers from "../../tests/wrapper"




describe("when my header appears", ()=>{
    it("show my logo's name",()=>{
        renderWithWrappers(<Header/>);
        expect(screen.getByText("AnimeBonds")).toBeInTheDocument()
    })

})