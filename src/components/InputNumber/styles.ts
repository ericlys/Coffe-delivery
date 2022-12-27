import { Minus, Plus } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${(props) => props.theme['button']};
  border-radius: .6rem;
  padding: .85rem .8rem;
  align-items: center;
  gap: .4rem;

  input::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0; 
  }

  input {
    border-style: hidden;
    background: transparent;
    width: 2rem;

    font-size: 1.6rem;
    text-align: center;
  }

  input::focus {
  outline: none;
}
`

export const PlusIcon = styled(Plus).attrs({
  size: 14,
  weight: 'bold'
})`
  color: ${(props) => props.theme['purple']};
  cursor: pointer;
`

export const MinusIcon = styled(Minus).attrs({
  size: 14,
  weight: 'bold'
})`
  color: ${(props) => props.theme['purple']};
  cursor: pointer;
`
