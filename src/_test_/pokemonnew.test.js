import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import PokemonNew from "../pages/PokemonNew"

describe("<PokemonNew />", () => {
    it("renders the new pokemon form", () => {
        render(
            <BrowserRouter>
            <PokemonNew />
          </BrowserRouter>
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

        const evolveInput = screen.getByRole("textbox", {name: /evolve/i })
        expect(evolveInput).toBeInTheDocument()
    })
})