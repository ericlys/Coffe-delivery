import { MapPin, ShoppingCart } from 'phosphor-react'
import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  background: ${(props) => props.theme['background']};
`

export const Content = styled.div`
  width: 100%;
  max-width: 112rem;
  padding: 3.2rem 2rem;
  
  display: flex;
  justify-content: space-between;
  margin: auto;

  a:focus {
   box-shadow: none;
   }
`
export const Locality = styled.div`
  padding: .8rem;
  display: flex;
  align-items: center;
  gap: .4rem;
  border-radius: 6px;
  font-size: 1.4rem;
  
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
`

export const MapPoint = styled(MapPin).attrs({
  weight: "fill",
  size: 22
})`
  color: ${(props) => props.theme['purple']};
`

export const ShoppingInfo = styled.div`
  display: flex;
  gap: 1.2rem;
`

interface CartProps {
  value?: string
}

export const Cart = styled.div<CartProps>`
  padding: .8rem;
  display: flex;
  align-items: center;
  gap: .4rem;
  border-radius: 6px;
  font-size: 1.4rem;
  position: relative;
  background: ${(props) => props.theme['yellow-light']};

  cursor: pointer;

  :hover {
    filter: brightness(1.02);
  }
  :active {
    transform: scale(.9);
  }
  
  
  ::after{
    content: '${(props) => !!props.value ? props.value : ''}';
    font-weight: 700;
    font-size: 1.2rem;
    top: -1rem;
    right: -.9rem;
    padding: .4rem;
    border-radius: 999px;
    background: ${(props) => !!props.value ? props.theme['yellow-dark'] : ''};
    color: ${(props) => props.theme['white']};
    position: absolute;
  }
`

export const CartIcon = styled(ShoppingCart).attrs({
  weight: "fill",
  size: 22
})`
  color: ${(props) => props.theme['yellow-dark']};
`
