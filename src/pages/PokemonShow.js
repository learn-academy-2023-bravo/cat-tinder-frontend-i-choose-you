import { useParams } from "react-router-dom"
import { MemoryRouter, Routes, Route, NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const Pokemonshow = ({pokemons, deletePokemon}) => {
  const { id } = useParams()
  let selectedPokemon = pokemons?.find(pokemons => pokemons.id === +id)
  return (
    <main>
      {selectedPokemon && (
        <>
        <img alt='pokemon picture' src= {selectedPokemon.images} />

        <h3>
          {selectedPokemon.pokedex_entry}
        </h3>
        <NavLink to={`/pokemonedit/${selectedPokemon.id}`}> Edit Pokemon Profile</NavLink>
        <NavLink to="/pokemonindex">
          <Button onSubmit={{deletePokemon}}>Delete Pokemon Profile</Button>
        </NavLink>
        </>
      )}
    </main>
  )
}

export default Pokemonshow
