import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: auto;

  display: flex;
  justify-content: space-between;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`

export const OrderDataWrapper = styled.div`
  width: 649px;
  display: flex;
  flex-direction: column;
`

export const OrderProductsWrapper = styled.div`
  width: 40%;
`

export const Card = styled.div`
  background: ${(props) => props.theme['card']};
  padding: 4rem;
  border-radius: 6px;
  margin-bottom: 1.2rem;
`

export const CardTitle = styled.div`
  display: flex; 
  gap: .8rem;
  font-family: 'Roboto', sans-serif;
  
  h4 {
    color: ${(props)=> props.theme['subtitle']};
    font-size: 1.6rem;
    font-weight: 400;
  }

  span{
    color: ${(props)=> props.theme['text']};
    font-size: 1.4rem;
  }
`

export const MapPinLineIcon = styled(MapPinLine).attrs({
  size: 22
})`
  color: ${(props)=> props.theme['yellow-dark']}
`
  
export const CurrencyDollarIcon = styled(CurrencyDollar).attrs({
  size: 22
})`
  color: ${(props)=> props.theme['purple']}
`

export const AddressWrapper = styled.div`
  padding-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap:1.6rem;
`

export const LineFormWrapper = styled.div`
  display: flex;
  gap: 1.6rem
`

export const MoneySupplyWrapper = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.2rem;
  flex: 1;
`

interface RadioBoxProps{
    isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  height: 5.1rem;
  width: 17.9rem;
  gap: 1.2rem;
  cursor: pointer;
  border: 1px solid transparent;

  align-items: center;
  padding-left: 1.5rem;

  background: ${({theme, isActive}) => isActive 
  ? theme['purple-light']
  : theme['button']
  };

  border-color: ${({theme, isActive}) => isActive 
  ? theme['purple']
  : ''
  };

  border-radius: 6px;
  /* box-shadow: none; */

  span {
    text-transform: uppercase;
    font-size: 1.2rem;
    cursor: pointer;
  }
`

export const CreditCardIcon = styled(CreditCard).attrs({
  size: 16
})`
  color: ${(props)=> props.theme['purple']}
`
  
export const BankIcon = styled(Bank).attrs({
  size: 16
})`
  color: ${(props)=> props.theme['purple']}
`

export const MoneyIcon = styled(Money).attrs({
  size: 16
})`
  color: ${(props)=> props.theme['purple']}
`

export const ItensWrapper = styled.div`
  background: ${(props) => props.theme['card']};
  padding: 4rem;
  border-radius: 6px 44px;
  margin-bottom: 1.2rem;

  div {
    div {
      display: flex;

      img {
        max-width: 64px;
        max-height: 64px;
      }
    }
  }
`

export const Price = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
`

export const SummaryOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem 0 2rem;
  gap: .8rem;

  span {
    font-weight: 400;
    font-size: 1.6rem;
  }

  div {
    gap: .8rem;
  }
`
export const RemoveButton = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  color: ${(props) => props.theme['text']};
  background: ${(props) => props.theme['button']};
  padding: .8rem;
  border-radius: 6px;
  text-transform: uppercase;
  align-items: center;
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }
`

export const TrashIcon = styled(Trash).attrs({
  size: 16
})`
  color: ${(props)=> props.theme['purple']}
`

export const Hr = styled.div`
  border-top: 1px solid ${(props) => props.theme['button']}; 
  margin: 24px 0;
`

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  li {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    color: ${(props) => props.theme['text']}; 
    margin-bottom: 1.2rem;

    span {
      color: ${(props) => props.theme['subtitle']}; 
      font-weight: 700;
      font-size: 2rem;
    }
  }
`

interface SubmitButtonProps {
  disabled: boolean;
}

export const SubmitButton = styled.input<SubmitButtonProps>`
  width: 100%;
  border: none;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${(props) => props.theme['white']}; 
  background: ${(props) => props.disabled ? props.theme['button'] : props.theme['yellow']}; 
  padding: 1.2rem;
  border-radius: 6px;
  cursor: pointer;

  ${(props) => 
    !props.disabled && css`
     :active {
        transform: scale(.99);
      }

      :hover {
        filter: brightness(1.1);
      }
  `}
`