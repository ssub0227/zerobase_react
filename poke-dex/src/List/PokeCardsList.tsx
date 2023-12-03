import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import PokeCard from './PokeCard'
import { fetchPokemons, PokemonListResponseType } from '../Service/pokemonService'

const PokeCardsList = () => {
  const [pokemons, setPokemons] = useState<PokemonListResponseType>({
    count: 0,
    next:'',
    results:[]
  })  

  useEffect(()=>{
    (async()=>{ // async await 을 위해 즉시실행함수로 한 번 감싸줌 
      const result = await fetchPokemons()
      setPokemons(result)
    })()
  },[] ) // 마운트 됐을 때 한 번만 실행

  return(
    <List>
      {
        pokemons.results.map((pokemon, index)=>{
          return (
            <PokeCard key={`${pokemon.name}_${index}`} name={`${pokemon.name}`}/>
          )
        })
      }
    </List>
  )
}

const List = styled.ul`
  list-style:none;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  gap: 20px;
  margin:0 0 32px 0;
  padding:0;
`

export default PokeCardsList