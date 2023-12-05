import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import PokeNameChip from '../Common/PokeNameChip'
import PokeMarkChip from '../Common/PokeMarkChip'
import { useIntersectionObserver } from 'react-intersection-observer-hook'
import { PokeImageSkeleton } from '../Common/PokeImageSkeleton'
import { fetchPokemonsDetail, pokemonDetailType } from '../Service/pokemonService'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../Store'


interface PokeCardPropsType{
  name: string
}

const PokeCard = (props: PokeCardPropsType) =>{
  const imageType = useSelector((state: RootState) => state.imageType.type)
  const [pokemon, setPokemon] = useState<pokemonDetailType|null>(null)
  const navigate = useNavigate();
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const handleClick = () =>{
    navigate(`/pokemon/${props.name}`)
  }

  useEffect(()=>{
    if(!isVisible) return

    (async()=>{
        const detail = await fetchPokemonsDetail(props.name)
        setPokemon(detail)
      })()
  },[props.name, isVisible])

  if(!pokemon){ // pokemon 값이 null 일때 ( 로딩 )
    return (
      <Item color={'gold'} ref={ref}>
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
    <Item onClick={handleClick} color={pokemon.color} ref={ref}>
      <Header>
        <PokeNameChip name={pokemon.koreanName} id={pokemon.id} color={pokemon.color}/>
      </Header>
      <Body>
        <Image src={pokemon.images[imageType]} alt={pokemon.name}/>
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