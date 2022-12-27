import { CoffeList } from "./components/CoffeList"
import { Intro } from "./components/Intro"
import { Container } from "./styles"

export function Home(){
  return(
    <Container>
      <Intro />
      <CoffeList/>
    </Container>
  )
}