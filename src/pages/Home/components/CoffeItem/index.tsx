import { BuyActionsWrapper, BuyCartIcon, BuyWrapper, Container, InfoWrapper, Tags } from "./styles";
import TraditionalCoffe from "../../../../assets/cup.svg"
import { InputNumber } from "../../../../components/InputNumber";

export function CoffeItem(){
  return(
    <Container>
      <img src={TraditionalCoffe} alt="traditional coffe"/>

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <InfoWrapper>
        <h3>Expresso Tradicional</h3>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </InfoWrapper>

      <BuyWrapper>
        <p>R$ <span>9,90</span></p>

        <BuyActionsWrapper>
          <InputNumber />
          <BuyCartIcon />
        </BuyActionsWrapper>
      </BuyWrapper>
    </Container>
  )
}