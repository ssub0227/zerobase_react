import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import PokeNameChip from '../Common/PokeNameChip'
import PokeMarkChip from '../Common/PokeMarkChip'
import { PokeImageSkeleton } from '../Common/PokeImageSkeleton'
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

  if(!pokemon){ // pokemon 값이 null 일때 ( 로딩 )
    return (
      <Item color={'gold'}>
        <Header>
          <PokeNameChip name={'포켓몬'} id={0} color={'gold'}/>
        </Header>
        <Body>
          <PokeImageSkeleton/>
        </Body>
        <Footer>
          <PokeMarkChip/> 
        </Footer>
      </Item>
    )
  }

  return(
    <Item onClick={handleClick} color={pokemon.color}>
      <Header>
        <PokeNameChip name={pokemon.koreanName} id={pokemon.id} color={pokemon.color}/>
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

const Item = styled.li<{ color :string }>`
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
    background-color: ${props => props.color};
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