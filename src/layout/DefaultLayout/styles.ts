import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['background']};
  border-radius: 8px; 

  display: flex;
  flex-direction: column;
`
