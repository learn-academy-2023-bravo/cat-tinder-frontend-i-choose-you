import { useParams,Link } from "react-router-dom"
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const MyPokemon = ({pokemons, deletePokemon}) => {
  const { id } = useParams()
  let selectedPokemon = pokemons?.find(pokemon => pokemon.id === +id)
  if(!selectedPokemon) {
    return <div>Pokemon not found</div>
  }
  return (
    <main className="my_page">
        <h1 className="partnertext">You Have Choosen Partner!!</h1>
      <Card className="show_card"
      >
        <img
          alt="Sample"
          src={selectedPokemon.images}
        />
        <CardBody>
          <CardTitle tag="h5">
            {selectedPokemon.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Evolution stage: {selectedPokemon.evolution_stage}<br/>
            Type: {selectedPokemon.typing}
          </CardSubtitle>
          <CardText>
            {selectedPokemon.pokedex_entry}
          </CardText>
          <Link to={`/pokemonedit/${selectedPokemon.id}`}>
  <Button className="edit_button">Update Pokemon</Button>
</Link>
        </CardBody>
      </Card>
    </main>
  )
}

export default MyPokemon;