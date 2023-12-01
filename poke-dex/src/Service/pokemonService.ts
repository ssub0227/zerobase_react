import axios from 'axios'

const remote = axios.create()
const fetchPokemons = async () =>{
  const defalutUrl = `https://pokeapi.co/api/v2/pokemon`
  
  // post, get, put, delete
  const response = await remote.get(defalutUrl)
  return response
}

export default fetchPokemons