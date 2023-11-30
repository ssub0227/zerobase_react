import styled from '@emotion/styled'
import PokeMarkChip from '../Common/PokeMarkChip'

const PokemonDetail = () =>{
  const imgScr = `https://m.media-amazon.com/images/I/5124J8JXn-L._AC_UF894,1000_QL80_.jpg`

  return(
    <Container>
      <ImageContainer>
        <Image src={imgScr} alt={'psyduck'}/>
      </ImageContainer>
      <Divider />      
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>1</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>고라파덕</td>
            </TableRow>
          </tbody>
        </Table>

        <h2>능력치</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>HP</TableHeader>
              <td>1</td>
            </TableRow>
            <TableRow>
              <TableHeader>ATTACK</TableHeader>
              <td>400</td>
            </TableRow>
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