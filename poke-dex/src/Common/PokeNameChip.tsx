
import styled from '@emotion/styled'

const PokeNameChip = () =>{
  return(
    <Chip> 
      <NumberChip><Number>001</Number></NumberChip>
      <ChipText>고라파덕</ChipText>
    </Chip>
  )
}


const Chip = styled.div`
  border:1px solid #c0c0c0;
  border-radius:16px;

  display:flex;
  align-items:center;

  font-weight:bold;
  font-size:14px;
  box-shadow:0.5px 0.5px 0 0 #c0c0c0;
`

const NumberChip = styled.div`
  padding:4px 6px;
  background-color:gold;
  border-radius:16px;
  opacity:0.8;
`

const Number = styled.label`
  opacity:1;
`

const ChipText = styled.label`
  margin:0 8px 0 5px;
`

export default PokeNameChip