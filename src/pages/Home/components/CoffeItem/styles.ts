import { ShoppingCart } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 256px;
  background: ${(props) => props.theme['card']};
  border-radius: 6px 36px;
  padding: 0 20px 20px 20px;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -2rem;
    width: 12rem;
    height: 12rem;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: .4rem;
  margin: 12px 10px 10px 16px;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 999px;
    padding: 4px 8px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 2rem;
  }

  span {
    font-size: 1.4rem;
    color: ${(props)=> props.theme['label']};
    text-align: center;
  }
`

export const BuyWrapper = styled.div`
  display: flex;
  margin-top: 3.3rem;
  font-size: 1.4rem;

  align-items: center;
  gap: 2.3rem;

  p{
    display: flex;
    align-items: center;
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.4rem;
  }
`

export const BuyActionsWrapper = styled.div`
  display: flex;
  gap: .8rem;
`

export const BuyCartIcon = styled(ShoppingCart).attrs({
  weight: "fill",
  size: 36
})`
  color: ${(props) => props.theme['card']};
  background: ${(props) => props.theme['purple-dark']};  
  padding: .8rem;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    filter: brightness(1.5)  
  }

  :active {
    transform: scale(.94)  
  }
`
