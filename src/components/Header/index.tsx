import { Cart, CartIcon, Content, HeaderContainer, Locality, MapPoint, ShoppingInfo } from "./styles";
import logoCoffe from "../../assets/logo-coffe.svg"
import { NavLink } from "react-router-dom";

export function Header(){
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
            <Cart>
              <CartIcon />
            </Cart>
          </NavLink>
        </ShoppingInfo>
      </Content>
    </HeaderContainer>
  )
}