import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockPokemon from '../mockPokemons'
import PokemonEdit from "../pages/PokemonEdit"

describe("<PokemonEdit />", () => {
    it("renders the new pokemon form to update existing pokemon", () => {
        render(
        <MemoryRouter initialEntries={['/pokemonedit/1']}>
            <Routes>
                <Route path='/pokemonedit/:id'
                element={<PokemonEdit pokemons={mockPokemon} />} />
            </Routes>
        </MemoryRouter>
        )
        const nameInput = screen.getByRole("textbox", {name: /name/i })
        expect(nameInput).toBeInTheDocument()

        const evolutionInput = screen.getByRole("textbox", {name: /evolution/i 
    })
        expect(evolutionInput).toBeInTheDocument()

        const typeInput = screen.getByRole("textbox", {name: /type/i })
        expect(typeInput).toBeInTheDocument()

        const pokedexInput = screen.getByRole("textbox", {name: /pokedex/i 
    })
        expect(pokedexInput).toBeInTheDocument()
        
        const imageInput = screen.getByRole("textbox", {name: /pic/i })
        expect(imageInput).toBeInTheDocument()
    })
})