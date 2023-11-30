import { Routes, Route } from 'react-router'
import PokeCardsList from './List/PokeCardsList'
import PokemonDetail from './Detail/PokemonDetail'


const PageNavigator = () =>{
  return (
    <Routes>
      <Route path='/' element={<PokeCardsList />}></Route>
      <Route path='/pokemon/:name' element={<PokemonDetail />}></Route>
    </Routes>
  )
}

export default PageNavigator