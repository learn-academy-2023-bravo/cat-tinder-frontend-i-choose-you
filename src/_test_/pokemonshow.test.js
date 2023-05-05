import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route, NavLink } from "react-router-dom"
import PokemonShow from "../pages/PokemonShow"
import mockPokemons from "../mockPokemons"

const renderShow = () => {
render(
  <>
  <MemoryRouter initialEntries={["/pokemonshow/1"]}>
    <Routes>
      <Route path="/pokemonshow/:id" element={<PokemonShow pokemons={mockPokemons} />} />
    </Routes>
  </MemoryRouter>

  </>
)
}

describe("<PokemonsShow/>", () => {
  it("renders pokemon card with pokedex", () => {
    renderShow()
    expect(screen.getByText(mockPokemons[0].pokedex_entry , {exact: false})).toBeInTheDocument()
    })
  })