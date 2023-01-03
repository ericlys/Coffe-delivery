import { Container, Content, CurrencyDollarCircleIcon, Info, InfoDelivery, MapCircleIcon, TimerCircleIcon } from "./styles";
import DeliveryManImage from "../../assets/deliveryman.svg";
import { useLocation } from "react-router-dom";

export function Success() {
  const location = useLocation();

  const {address, moneySupply} = location.state;

  const formatPSupplyMethod = (supply: string) => {
    switch(supply) {
      case 'cash': 
        return 'Dinheiro';
      case 'credit card':
        return 'Cartão de Crédito';
      case 'debit card':
        return 'Cartão de Débito';
      default:
        return ''
    }
  }

  return (
    <Container>
      <Content>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <InfoDelivery>
          <div>
            <MapCircleIcon/>
            <Info>
              <p>Entrega em <span>{address.street}, {address.number}</span></p>
              <p>{address.district} - {address.city}, {address.state}</p>
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
            <span>{formatPSupplyMethod(moneySupply)}</span>
            </Info>
          </div>
        </InfoDelivery>
      </Content>

      <img src={DeliveryManImage} alt=""/>
    </Container>
  )
}