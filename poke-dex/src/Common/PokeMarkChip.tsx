import styled from '@emotion/styled'

const PokeMarkChip = () =>{
  return(
    <Chip>
      <Text>Pokémon</Text>
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

const Text = styled.label`
  padding: 2px 6px;
  font-size:13px;
`

export default PokeMarkChip