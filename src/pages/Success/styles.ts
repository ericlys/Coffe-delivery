import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 114rem;
  margin: 8rem auto;
  padding: 2rem;

  img {
    margin-top: 9%;
  }
`

export const Content = styled.div`
 
 h3 {
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3.2rem;
  color: ${(props) => props.theme['yellow-dark']}
 }

 p {
  font-weight: 400;
  font-size: 2rem;
  color: ${(props) => props.theme['subtitle']}
 }
`

export const InfoDelivery = styled.div`
  margin-top: 43px;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background: linear-gradient(to right, #DBAC2C, #8047F8);
  position: relative ;
  display : flex ;
  flex-direction: column;
  gap:3.2rem;
  padding: 4rem 13rem 4rem 4rem;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  
  ::before {
    content: '';
    border-radius: 6px 36px;
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    background: white;
  }

  div {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }
`

export const Info = styled.aside`
  display: flex;
  flex-direction: column;
  
  p {
    color: ${(props) => props.theme['text']};
    font-size: 1.6rem;    
  }

  span {
    font-size: 1.6rem;    
    font-weight: 700;
  }
`

export const MapCircleIcon = styled(MapPin).attrs({
  size: 32,
  weight: "fill"
})`
  background: ${({theme}) => theme['purple']};
  color: ${(props)=> props.theme['white']};
  padding: .8rem;
  border-radius: 999px;
`

export const TimerCircleIcon = styled(Timer).attrs({
  size: 32,
  weight: "fill"
})`
  background: ${({theme}) => theme['yellow']};
  color: ${(props)=> props.theme['white']};
  padding: .8rem;
  border-radius: 999px;
`

export const CurrencyDollarCircleIcon = styled(CurrencyDollar).attrs({
  size: 32,
  weight: "fill"
})`
  background: ${({theme}) => theme['yellow-dark']};
  color: ${(props)=> props.theme['white']};
  padding: .8rem;
  border-radius: 999px;
`