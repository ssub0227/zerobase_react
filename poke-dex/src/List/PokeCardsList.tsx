import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import PokeCard from './PokeCard'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { fetchPokemons, PokemonListResponseType } from '../Service/pokemonService'

const PokeCardsList = () => {
  const [pokemons, setPokemons] = useState<PokemonListResponseType>({
    count: 0,
    next:'',
    results:[]
  })  


  const [infiniteSCroll] = useInfiniteScroll({
    loading : false,
    hasNextPage:pokemons.next !== '', // next가 비어있지 않다면 true
    onLoadMore: async () =>{ // 스크롤이 바닥에 닿았을 때 
      const morePokemons = await fetchPokemons(pokemons.next)
      setPokemons({
        ...morePokemons,
        results:[...pokemons.results, ...morePokemons.results]
      })
    },
    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(()=>{
    (async()=>{ // async await 을 위해 즉시실행함수로 한 번 감싸줌 
      const pokemons = await fetchPokemons()
      setPokemons(pokemons)
    })()
  },[] ) // 마운트 됐을 때 한 번만 실행

  return(
   <>
       <List>
        {
          pokemons.results.map((pokemon, index)=>{
            return (
              <PokeCard key={`${pokemon.name}_${index}`} name={`${pokemon.name}`}/>
            )
          })
        }
      </List>
      <div ref={infiniteSCroll}>Loading...</div>
   </>
  )
}

const Loading =styled.div`
  display:flex;
  justify-content:center;
`

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