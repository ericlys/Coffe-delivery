import styled from "styled-components";

export const Container = styled.div`
  max-width: 116rem;
  margin: auto;
  padding: 0 2rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3.2rem;
    color: ${(props) => props.theme['subtitle']};
    margin-bottom: 3.4rem;
  }
`

export const Main = styled.main`
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  flex-wrap: wrap;
`