import { Form, FormGroup, Input, Label, Button, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const PokemonNew = ({createPokemon}) => {

const navigate = useNavigate()
const [newPokemon, setNewPokemon] = useState({
  name:"",
  evolve: "",
  evolution_stage: "",
  typing: "",
  pokedex_entry: "",
  images: ""
})

const handleChange = (e) => {
  setNewPokemon({...newPokemon, [e.target.name]: e.target.value})
}

const handleClick = ()=>{
  createPokemon(newPokemon)
  navigate("/pokemonindex")
}

  return (
    <Form>
      <FormGroup>
        <Label for="Pokemon-name">Name</Label>
        <Input
          id="Pokemon-name"
          name="name"
          placeholder="Enter Pokemon Name"
          type="text"
          onChange={handleChange}
          value={newPokemon.name}
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
          value={newPokemon.evolution_stage}
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
          value={newPokemon.typing}
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
          value={newPokemon.pokedex_entry}
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
          value={newPokemon.images}
        />
      </FormGroup>
       <legend>Evolve?</legend>
      <FormGroup check>
        <Input name="radio1" type="radio" /> <Label check>YES</Label>
      </FormGroup>
      <FormGroup check>
        <Input name="radio1" type="radio" /> <Label check>No</Label>
      </FormGroup>
      <Button onClick={handleClick}>Submit</Button>
    </Form>
  )
}

export default PokemonNew
