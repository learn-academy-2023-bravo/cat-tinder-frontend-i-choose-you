
import {render, screen} from "@testing-library/react"
import PokemonIndex from "../pages/PokemonIndex"
import { BrowserRouter } from "react-router-dom"
import mockPokemons from "../mockPokemons"



describe("<PokemonIndex />", () => {
    it("renders pokemon cards", () => {
        render(
        <BrowserRouter>
        <PokemonIndex pokemons={mockPokemons}/>
        </BrowserRouter>
        )
        mockPokemons.forEach(pokemon => {
            const pokemonName = screen.getByText(pokemon.name)
            expect(pokemonName).toBeInTheDocument()
        }) 
    })
})