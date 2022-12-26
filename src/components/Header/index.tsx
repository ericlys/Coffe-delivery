import { Cart, CartIcon, HeaderContainer, Locality, MapPoint, ShoppingInfo } from "./styles";
import logoCoffe from '../../assets/logo-coffe.svg'

export function Header(){
  return(
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      
      <ShoppingInfo>
        <Locality>
          <MapPoint />
          <span>Porto Alegre, RS</span>
        </Locality>
        <Cart>
          <CartIcon />
        </Cart>
      </ShoppingInfo>
    </HeaderContainer>
  )
}