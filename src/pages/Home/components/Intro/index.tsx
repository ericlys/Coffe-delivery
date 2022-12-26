import { CartIcon, CoffeIcon, Container, Info, PackageIcon, TimerIcon, WrapperInfo } from "./styles";
import bigCoffe from '../../../../assets/big-coffe.svg'

export function Intro(){
  return (
    <Container>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <WrapperInfo>
          <Info>
            <CartIcon />
            Compra simples e segura
          </Info>
          <Info>
            <PackageIcon/>
            Embalagem mantém o café intacto
          </Info>
          <Info>
            <TimerIcon/>
            Entrega rápida e rastreada
          </Info>
          <Info>
            <CoffeIcon />
            O café chega fresquinho até você
          </Info>
        </WrapperInfo>
      </div>
      
      <img src={bigCoffe} alt="big coffe image"/>
    </Container>
  )
}