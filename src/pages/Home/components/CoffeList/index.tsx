import { CoffeItem } from "../CoffeItem";
import { Container, Main } from "./styles";

export function CoffeList(){

  const coffes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  return (
    <Container>
      <h2>Nossos Cafés</h2>

      <Main>
        {coffes.map( c => {
          return (
            <CoffeItem key={c}/>
          )
        })}
      </Main>
    </Container>
  )
}