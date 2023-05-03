import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PokemonHome from './pages/PokemonHome'
import Header from './components/Header'
import PokemonIndex from './pages/PokemonIndex'
import PokemonShow from './pages/PokemonShow'
import PokemonNew from './pages/PokemonNew'
import PokemonEdit from './pages/PokemonEdit.js'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import mockPokemons from './mockPokemons'
import './App.css'


const App = () => {


 const [pokemons, setPokemons] = useState(mockPokemons)



 return(
 <>
  <Header />
 <Routes>
   <Route path="/" element={<PokemonHome />} />
   <Route path="/pokemonindex" element={<PokemonIndex />} />
   <Route path="/pokemonshow" element={<PokemonShow />} />
   <Route path="/pokemonnew" element={<PokemonNew />} />
   <Route path="/pokemonedit" element ={<PokemonEdit />} />
   <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
 </>
)
 }




export default App;
