import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PokemonHome from "./pages/PokemonHome";
import Header from "./components/Header";
import PokemonIndex from "./pages/PokemonIndex";
import PokemonShow from "./pages/PokemonShow";
import PokemonNew from "./pages/PokemonNew";
import PokemonEdit from "./pages/PokemonEdit.js";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
// import mockPokemons from "./mockPokemons";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    readPokemon()
  }, [])

  const readPokemon = () => {
    fetch("http://localhost:3000/pokemons")
      .then((response) => response.json())
      .then((payload) => {
        setPokemons(payload)
      })
      .catch((error) => console.log(error))
  }

const createPokemon = (createdPokemon) => {
  fetch("http://localhost:3000/pokemons", {
    body: JSON.stringify(createdPokemon),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then((response) => response.json())
    .then((payload) => readPokemon())
    .catch((error) => console.log("Pokemon create errors:", error))
}

const updatePokemon = (selectedpokemon, id) => {
  fetch(`http://localhost:3000/pokemons/${id}`, {
    body: JSON.stringify(selectedpokemon),
    headers: {
      "Content-Type": "application/json"
    },
    method:"PATCH"
  })
    .then((response) => response.json())
    .then((payload) => readPokemon())
    .catch((error) => console.log("Pokemon update errors:", error))
}

const deletePokemon = (id) => {
  fetch(`http://localhost:3000/pokemons/${id}`,{
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then((response) => response.json())
  .then((payload) => readPokemon())
  .catch((error) => console.log("delete errors:", error))
}

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonHome />} />
        <Route path="/pokemonindex" element={<PokemonIndex pokemons={pokemons} />} />
        <Route path="/pokemonshow/:id" element={<PokemonShow pokemons={pokemons} deletePokemon={deletePokemon} />} />
        <Route path="/pokemonnew" element={<PokemonNew createPokemon={createPokemon} />} />
        <Route path="/pokemonedit/:id" element={<PokemonEdit pokemons={pokemons} updatePokemon={updatePokemon}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
