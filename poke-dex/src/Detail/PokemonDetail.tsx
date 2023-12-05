import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import { fetchPokemonsDetail, pokemonDetailType } from '../Service/pokemonService'
import { useEffect, useState } from 'react'
import PokeMarkChip from '../Common/PokeMarkChip'
import { PokeImageSkeleton } from '../Common/PokeImageSkeleton'



const PokemonDetail = () =>{
  const { name } = useParams() // props 로 받아오는 것이 아닌 url 파라미터로 체크
  const [pokemon, setPokemon] = useState<pokemonDetailType|null>(null)

  useEffect(()=>{
    if(!name) return
    (async()=>{
        const detail = await fetchPokemonsDetail(name)
        setPokemon(detail)
      })()
  },[name])

  if (!name || !pokemon) {
    return(
      <Container>
        <ImageContainer>
          <PokeImageSkeleton/>
        </ImageContainer>
        <Divider />      
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Container>
    )
  }

  return(
    <Container>
      <ImageContainer>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name}/>
      </ImageContainer>
      <Divider />      
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>{pokemon.id}</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>{pokemon.koreanName} ({pokemon.name})</td>
            </TableRow>
            <TableRow>
              <TableHeader>타입</TableHeader>
              <td>{pokemon.types.toString()}</td> 
            </TableRow>
            <TableRow>
              <TableHeader>키</TableHeader>
              <td>{pokemon.height} m</td>
            </TableRow>
            <TableRow>
              <TableHeader>몸무게</TableHeader>
              <td>{pokemon.weight} kg</td>
            </TableRow>
          </tbody>
        </Table>

        <h2>능력치</h2>
        <Table>
          <tbody>
            {
              pokemon.baseStats.map(stat => {
                return (
                  <TableRow key={stat.name}>
                    <TableHeader>{stat.name}</TableHeader>
                    <td>{stat.value}</td>
                  </TableRow>
                )
              })
            }
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  )
}

const Container = styled.section`
  border:1px solid #c0c0c0;  
  margin:16px 32px;
  border-radius:16px;
  box-shadow:1px 1px 4px 1px #c0c0c0;
`

const ImageContainer = styled.section`
  display:flex;
  flex:1 1 auto;
  align-item:center;
  justify-content:center;
  margin:8px 0;
  min-height:350px;
`
const Image = styled.img`
  width:30%;
`

const Divider = styled.hr`
  margin:32px;
  border-style:none;
  border-bottom:1px dashed #d3d3d3;
`

const Body = styled.section`
  margin: 32px;
`

const Table = styled.table`
  width:100%;
  border-collapse:collapse;
  border-spacing:0;

  td, th{
    padding: 6px 12px;
  }
`
const TableRow = styled.tr`
  border: 1px solid #c0c0c0;
`

const TableHeader = styled.th`
  width:1px;
  white-space:nowrap;
  text-align:left;
  font-weight:normal;
  font-size:14px;
  color:#c0c0c0;
`

const Footer = styled.section`
  display:flex;
  flex-direction: row;
  margin: 32px 16px;
`

export default PokemonDetail