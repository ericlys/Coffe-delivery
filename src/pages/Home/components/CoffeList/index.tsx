import { CoffeItem } from "../CoffeItem";
import { Container, Main } from "./styles";

import { coffeesList } from "../../../../utils/coffeesList";

export function CoffeList(){
  
  return (
    <Container>
      <h2>Nossos Cafés</h2>

      <Main>
        {coffeesList.map( coffe => {
          return (
            <CoffeItem coffe={coffe} key={coffe.id}/>
          )
        })}
      </Main>
    </Container>
  )
}