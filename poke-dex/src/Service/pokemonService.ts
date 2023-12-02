import axios from 'axios'

const remote = axios.create()

export interface PokemonListResponceType {
  count: number,
  next: string
  results:{
    name: string,
    url: string,
  }[]
}

export const fetchPokemons = async () =>{
  const defalutUrl = `https://pokeapi.co/api/v2/pokemon`
  
  // post, get, put, delete
  const response = await remote.get<PokemonListResponceType>(defalutUrl)
  return response.data
}