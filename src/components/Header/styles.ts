import { MapPin, ShoppingCart } from 'phosphor-react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 84rem;
  padding: 3.2rem 2rem;
  
  display: flex;
  justify-content: space-between;
  margin: auto;
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
  weight: "fill"
})`
  size: 22rem;
  color: ${(props) => props.theme['purple']};
`

export const ShoppingInfo = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const Cart = styled.div`
  padding: .8rem;
  display: flex;
  align-items: center;
  gap: .4rem;
  border-radius: 6px;
  font-size: 1.4rem;
  
  background: ${(props) => props.theme['yellow-light']};
`

export const CartIcon = styled(ShoppingCart).attrs({
  weight: "fill"
})`
  size: 22rem;
  color: ${(props) => props.theme['yellow-dark']};
`
