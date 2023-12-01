import styled from '@emotion/styled'
import { useEffect } from 'react'
import PokeCard from './PokeCard'
import fetchPokemons from '../Service/pokemonService'

const PokeCardsList = () => {


  useEffect(()=>{
    (async()=>{ // async await 을 위해 즉시실행함수로 한 번 감싸줌 
      const result = await fetchPokemons()
      console.log(result)
    })()
  },[] ) // 마운트 됐을 때 한 번만 실행

  return(
    <List>
      {
        Array.from({length: 10}).map((_, index)=>{
          return (
            <PokeCard key={index}/>
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