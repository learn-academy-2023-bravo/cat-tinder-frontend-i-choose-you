import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button, FormText } from "reactstrap"
import { useState } from "react"

const PokemonEdit = ({ pokemons, updatePokemon }) => {
  const { id } = useParams()
  let currentPokemon = pokemons?.find((pokemon) => pokemon.id === +id)

  const [editPokemon, setEditPokemon] = useState({
    name: currentPokemon.name,
    evolve: currentPokemon.evolve,
    evolution_stage: currentPokemon.evolution_stage,
    typing: currentPokemon.typing,
    pokedex_entry: currentPokemon.pokedex_entry,
    images: currentPokemon.images
  })

  const handleChange = (e) => {
    setEditPokemon({ ...editPokemon, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  
  const handleSubmit = () => {
    updatePokemon(editPokemon, currentPokemon.id)
    navigate("/pokemonindex")
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="Pokemon-name">Name</Label>
          <Input
            id="Pokemon-name"
            name="name"
            placeholder="Enter Pokemon Name"
            type="text"
            onChange={handleChange}
            value={editPokemon.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Pokemon-evolution-stage">Evolution Stage</Label>
          <Input
            id="Pokemon-evolution-stage"
            name="evolution_stage"
            placeholder="which step in evolution is this pokemon?"
            type="text"
            onChange={handleChange}
            value={editPokemon.evolution_stage}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Pokemon-type">Type</Label>
          <Input
            id="Pokemon-type"
            name="typing"
            placeholder="Enter the pokemons type"
            type="text"
            onChange={handleChange}
            value={editPokemon.typing}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Pokemon-pokedex-entry">Pokedex Entry</Label>
          <Input
            id="Pokemon-pokedex-entry"
            name="pokedex_entry"
            placeholder="Enter the pokemons data"
            type="text"
            onChange={handleChange}
            value={editPokemon.pokedex_entry}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Pokemon-images">Poke Pic</Label>
          <Input
            id="Pokemon-images"
            name="images"
            placeholder="Attach a picture of the pokemon"
            type="text"
            onChange={handleChange}
            value={editPokemon.images}
          />
        </FormGroup>
        <legend>Evolve?</legend>
        <FormGroup check>
          <Input
            name="evolve"
            type="radio"
            value="yes"
            onChange={handleChange}
            checked={editPokemon.evolve === "yes"}
          />
          <Label check>YES</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="evolve"
            type="radio"
            value="no"
            onChange={handleChange}
            checked={editPokemon.evolve === "no"}
          />
          <Label check>No</Label>
        </FormGroup>
        {/* <FormGroup check>
        <Input name="radio1" type="radio" /> <Label check>YES</Label>
      </FormGroup>
      <FormGroup check>
        <Input name="radio1" type="radio" /> <Label check>No</Label>
      </FormGroup> */}
        <Button onClick={handleSubmit}>Submit New Pokemon </Button>
      </Form>
    </>
  )
}

export default PokemonEdit
