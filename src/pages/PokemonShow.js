import { useParams, useNavigate, Link } from "react-router-dom"
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const Pokemonshow = ({pokemons, deletePokemon}) => {
  const navigate = useNavigate()
  const handleDelete = () => {
    deletePokemon(id)
    navigate("/pokemonindex")
  }
  const { id } = useParams()
  let selectedPokemon = pokemons?.find(pokemon => pokemon.id === +id)
  if(!selectedPokemon) {
    return <div>Pokemon not found</div>
  }
  return (
    <main className="show_page">
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
          <Button onClick={() => {window.location.href=`/mypokemon/${selectedPokemon.id}`}} className="selectbutton">
            I Choose You!
          </Button>
          <Button onClick={handleDelete}> Delete Pokemon</Button>
          <Link to={`/pokemonedit/${selectedPokemon.id}`}>
  <Button className="edit_button">Update Pokemon</Button>
</Link>
        </CardBody>
      </Card>
    </main>
  )
}

export default Pokemonshow;

