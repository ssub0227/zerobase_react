import styled from '@emotion/styled'
import PokeCard from './PokeCard'

const PokeCardsList = () => {
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