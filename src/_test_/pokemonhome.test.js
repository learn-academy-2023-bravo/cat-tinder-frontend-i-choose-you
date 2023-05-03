import {render, screen} from "@testing-library/react"
import PokemonHome from "../pages/PokemonHome"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"



describe("<PokemonHome />", () => {
    it("renders without crashing", () => {
        render(
        <BrowserRouter>
        <PokemonHome />
        </BrowserRouter>
        )
        const indexLink = screen.getByText(/Home/i)
        expect(indexLink).toBeInTheDocument()
    })
})