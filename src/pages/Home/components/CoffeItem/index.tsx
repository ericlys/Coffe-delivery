import { BuyActionsWrapper, BuyCartIcon, BuyWrapper, Container, InfoWrapper, Tags } from "./styles";
import { InputNumber } from "../../../../components/InputNumber";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../../../context/ShoppingCartContext";

interface Coffe {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
  isAvaliable?: boolean
}

interface CoffeItemProps {
  coffe: Coffe;
}

export function CoffeItem({coffe}: CoffeItemProps){
  const { addProductToShoppingCart } = useContext(ShoppingCartContext);

  const [value, setValue] = useState(0);

  const handleAddCoffe = () => {
    addProductToShoppingCart(coffe, value);
    setValue(0);
  }

  return(
    <Container>
      <img src={coffe.image} alt="traditional coffe"/>

      <Tags>
      {coffe.tags.map(tag => (
        <span key={tag}>{tag}</span>
        )
      )}
      </Tags>

      <InfoWrapper>
        <h3>{coffe.name}</h3>
        <span>{coffe.description}</span>
      </InfoWrapper>

      <BuyWrapper>
        <p>R$<span>{coffe.price}</span></p>

        <BuyActionsWrapper>
          <InputNumber value={value} setValue={setValue}/>
          <BuyCartIcon onClick={handleAddCoffe} />
        </BuyActionsWrapper>
      </BuyWrapper>
    </Container>
  )
}