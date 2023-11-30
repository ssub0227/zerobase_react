import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import PokeNameChip from '../Common/PokeNameChip'
import PokeMarkChip from '../Common/PokeMarkChip'

const PokeCard = () =>{
  const imgScr = `https://m.media-amazon.com/images/I/5124J8JXn-L._AC_UF894,1000_QL80_.jpg`

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/pokemon/고라파덕`)
  }

  return(
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip/>
      </Header>
      <Body>
        <Image src={imgScr} alt={'psyduck'}/>
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