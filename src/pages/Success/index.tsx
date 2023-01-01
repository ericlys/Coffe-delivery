import { Container, Content, CurrencyDollarCircleIcon, Info, InfoDelivery, MapCircleIcon, TimerCircleIcon } from "./styles";
import DeliveryManImage from "../../assets/deliveryman.svg";

export function Success() {
  return (
    <Container>
      <Content>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <InfoDelivery>
          <div>
            <MapCircleIcon/>
            <Info>
              <p>Entrega em <span>Rua Jão Daniel Martinelli,102</span></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </Info>
          </div>

          <div>
            <TimerCircleIcon/>
            <Info>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </Info>
          </div>

          <div>
            <CurrencyDollarCircleIcon/>
            <Info>
            <p>Pagamento na entrega</p>
            <span>Cartão de Crédito</span>
            </Info>
          </div>
        </InfoDelivery>
      </Content>

      <img src={DeliveryManImage} alt=""/>
    </Container>
  )
}