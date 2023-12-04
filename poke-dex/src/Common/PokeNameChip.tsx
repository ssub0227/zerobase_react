
import styled from '@emotion/styled'

interface PokeNameChipPropsType{
  name: string
  id: number
  color: string
}

const PokeNameChip = (props:PokeNameChipPropsType) =>{
  const renderNumber = (id:number) => {
    const digits = 3
    const numberString = id.toString()
    if(numberString.length >= digits){
      return numberString
    }

    let result =''

    for (let i = 0; i < digits - numberString.length; i++){
      result+='0'
    }

    return `${result}${numberString}`
  }
  return(
    <Chip> 
      <NumberChip color={props.color}><Number>{renderNumber(props.id)}</Number></NumberChip>
      <ChipText>{props.name}</ChipText>
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
  background: #fff;
`

const NumberChip = styled.div<{ color : string }>`
  padding:4px 6px;
  border-radius: 16px;
  opacity:0.8;
  background-color:${props => props.color}};
`

const Number = styled.label`
  opacity:1;
`

const ChipText = styled.label`
  margin:0 8px 0 5px;
`

export default PokeNameChip