import { Cart, CartIcon, Content, HeaderContainer, Locality, MapPoint, ShoppingInfo } from "./styles";
import logoCoffe from "../../assets/logo-coffe.svg"
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header(){

  const { amountItems } = useCart();

  let amountFormated = '';

  if(amountItems > 0) {
    amountFormated = (amountItems < 10 ? '0'+amountItems : amountItems).toString();
  } 

  return(
    <HeaderContainer>
      <Content>
        <NavLink to="/" title="home">
          <img src={logoCoffe} alt="" />
        </NavLink>
        
        <ShoppingInfo>
          <Locality>
            <MapPoint />
            <span>Porto Alegre, RS</span>
          </Locality>
          <NavLink to="/checkout" title="checkout">
            <Cart value={amountFormated}>
              <CartIcon />
            </Cart>
          </NavLink>
        </ShoppingInfo>
      </Content>
    </HeaderContainer>
  )
}