import { useParams } from "react-router-dom"
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

const Pokemonshow = ({pokemons, deletePokemon}) => {
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
          <Button onClick={() => {window.location.href=`/pokemonshow/${selectedPokemon.id}`}} className="btn btn-primary">
            I Choose You!
          </Button>
        </CardBody>
      </Card>
    </main>
  )
}

export default Pokemonshow;




// <Card
//   body
//   outline
//   style={{
//     width: '18rem'
//   }}
// >
//   <img
//     alt="Sample"
//     src={pokemon.images}
//   />
//   <CardBody>
//     <CardTitle tag="h5">
//       {pokemon.name}
//     </CardTitle>
//     <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//       Card subtitle
//     </CardSubtitle>
//     <CardText>
//       Some quick example text to build on the card title and make up the bulk of the card‘s content.
//     </CardText>
//     <Button>
//       Button
//     </Button>
//   </CardBody>
// </Card>