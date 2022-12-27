import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import styled from 'styled-components'
import backgroundIntro from '../../../../assets/coffe-intro-background.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 94px 160px;
  gap: 5.6rem;
  background-image: url('${backgroundIntro}');

  h1 {
    max-width: 58.8rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 62.4px;
    color: ${(props) => props.theme['title']};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    max-width: 58.8rem;
    margin-top: 1.6rem;
    font-size: 2rem;
    color: ${({theme}) => theme['subtitle']};
  }
`

export const WrapperInfo = styled.ul`
  max-width: 58.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 4rem;
  margin-top: 6.6rem;
`

export const Info = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.6rem;
`

export const CartIcon = styled(ShoppingCart).attrs({
  weight: "fill",
  size: 32,
})`
  color: ${(props) => props.theme['white']};
  background: ${(props) => props.theme['yellow-dark']};
  padding: .8rem;
  border-radius: 9999px;
`

export const PackageIcon = styled(Package).attrs({
  weight: "fill",
  size: 32,
})`
  color: ${(props) => props.theme['white']};
  background: ${(props) => props.theme['text']};
  padding: .8rem;
  border-radius: 9999px;
`

export const TimerIcon = styled(Timer).attrs({
  weight: "fill",
  size: 32,
})`
  color: ${(props) => props.theme['white']};
  background: ${(props) => props.theme['yellow']};
  padding: .8rem;
  border-radius: 9999px;
`

export const CoffeIcon = styled(Coffee).attrs({
  weight: "fill",
  size: 32,
})`
  color: ${(props) => props.theme['white']};
  background: ${(props) => props.theme['purple']};
  padding: .8rem;
  border-radius: 9999px;
`