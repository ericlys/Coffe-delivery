import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import styled from 'styled-components'

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