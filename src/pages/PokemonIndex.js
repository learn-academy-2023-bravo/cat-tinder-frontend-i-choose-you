import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

const PokemonIndex = ({pokemons}) => {
  return (
    <main>
      {pokemons.map((pokemon, index) => {
        return(
          <Card
            color="light"
            style={{width: '18rem'}}
          >
            <img
            alt="Sample"
            src={pokemon.images}
            />
            <CardBody>
              <ul>
              <CardTitle tag='h4'>
                {pokemon.name}
              </CardTitle>
              <li>
              <CardSubtitle>
                evolution stage: {pokemon.evolution_stage}
              </CardSubtitle>
              </li>
              <li>
              <CardSubtitle>
                type: {pokemon.typing}
              </CardSubtitle>
              </li>
              <li>
              <CardSubtitle>
                About: {pokemon.pokedex_entry}
              </CardSubtitle>
              </li>
              <NavLink to={`/pokemonshow/${pokemon.id}`}>
                Choose your Pokemon!
              </NavLink>
              </ul>
            </CardBody>
            
          </Card>
        )
      })}
    </main>
  )
}

export default PokemonIndex;
