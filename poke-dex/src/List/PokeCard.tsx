import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import PokeNameChip from '../Common/PokeNameChip'
import PokeMarkChip from '../Common/PokeMarkChip'
import { fetchPokemonsDetail, pokemonDetailType } from '../Service/pokemonService'
import { useEffect, useState } from 'react'

interface PokeCardPropsType{
  name: string
}

const PokeCard = (props: PokeCardPropsType) =>{
  const [pokemon, setPokemon] = useState<pokemonDetailType|null>(null)
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/pokemon/${props.name}`)
  }

  useEffect(()=>{
    (async()=>{
        const detail = await fetchPokemonsDetail(props.name)
        setPokemon(detail)
      })()
  },[props.name])

  if(!pokemon){
    return null //포켓몬이 null 일때
  }

  return(
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip name={pokemon.name} id={pokemon.id}/>
      </Header>
      <Body>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name}/>
      </Body>
      <Footer>
        <PokeMarkChip/> 
      </Footer>
    </Item>
  )
}

const Item = styled.li`
  display: flex;
  flex-direction:column;
  justify-content:space-evenly;
  padding:8px;
  width:250px;
  height:300px;
  box-shadow:1px 1px 3px 1px #c0c0c0;
  border: 1px solid #c0c0c0;
  cursor:pointer;
  transition: 0.3s;

  &:hover{
    transform:scale(1.1)
  }

  &:active{
    background-color:#c0c0c0;
  }
`

const Header = styled.section`
  display:flex;
`
const Body = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
`
const Image = styled.img`
  width:50%;
`

const Footer =styled.section`
  display:flex;
  flex-direction:row;
  
`

export default PokeCard