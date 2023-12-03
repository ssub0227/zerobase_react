import axios from 'axios'

const remote = axios.create()

export interface PokemonListResponseType {
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
  const response = await remote.get<PokemonListResponseType>(defalutUrl)
  return response.data
}

interface pokemonDetailResponseType{
  id: number,
  weight:number,
  height:number,
  name:string,
  types:{
    type:{
      name:string
    }
  }[],
  sprites:{
    front_default: string,
    other:{
      dream_world:{
        front_default:string
      },
      'official-artwork':{
        front_default:string
      }
    }
  },
  stats:{
    base_stat:number,
    stat:{
      name:string
    } 
  }[]
}

export interface pokemonDetailType{
  id: number,
  weight:number,
  height:number,
  name:string,
  types: string[],
  images:{
    frontDefault: string,
    dreamWorldFront: string,
    officialArtworkFront: string
  },
  baseStats:{
    name:string,
    value: number
  }[]
}

export const fetchPokemonsDetail = async (name:string):Promise<pokemonDetailType> =>{
  const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
  
  // post, get, put, delete
  const response = await remote.get<pokemonDetailResponseType>(pokemonDetailUrl)
  const detail = response.data

  return {
    id: detail.id,
    name:detail.name,
    height:detail.height / 10, //미터단위
    weight:detail.weight / 10, //kg 단위
    types:detail.types.map(item=>item.type.name),
    images:{
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtworkFront: detail.sprites.other['official-artwork'].front_default
    },
    baseStats: detail.stats.map(item => {
      return {
        name: item.stat.name,
        value: item.base_stat
      }
    })
  }
}