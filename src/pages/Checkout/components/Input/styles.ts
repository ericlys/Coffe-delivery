import styled, { css } from "styled-components";

interface ContainerProps {
  width?: number
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  height: 4.2rem;
  background: ${({theme}) => theme['input']};
  border: 1px solid ${({theme}) => theme['button']};;
  border-radius: 4px;

  display: flex;
    
  input {
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    border-radius: 4px;

    color: ${({theme}) => theme['text']};
    font-weight: 400;
    font-size: 1.4rem;
    padding: 1.2rem;

    ::placeholder { 
      color: ${({theme}) => theme['label']};
    }

  }
  
  span {
    font-style: italic;
    margin: auto 1.2rem;
    font-size: 1.2rem;
    color: ${({theme}) => theme['label']};
  }

  ${(props) => 
    props.width && css`
      max-width: ${props.width}rem;
  `}
`;