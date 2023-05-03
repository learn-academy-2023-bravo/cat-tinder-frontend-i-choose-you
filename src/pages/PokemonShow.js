import { useParams } from "react-router-dom"


const Pokemonshow = ({pokemons}) => {
  const { id } = useParams()
  let selectedPokemon = pokemons.find(pokemons => pokemons.id === +id)
  return (
    <main>
      {selectedPokemon && (
        <>
        <img alt='pokemon picture' src= {selectedPokemon.images} />

        <h3>
          {selectedPokemon.pokedex_entry}
        </h3>
        </>
      )}
    </main>
  )
}

export default Pokemonshow
