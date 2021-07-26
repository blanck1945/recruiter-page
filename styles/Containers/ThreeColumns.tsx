import styled from 'styled-components';

export const ThreeColumnsDiv = styled.div`
  display: grid;
  grid-template-columns: 10.9rem 60% 25%;
  width: 100%;
  height: 100vh;

  @media (max-width: 1440px) {
    grid-template-columns: 25% 75%;
  }
`;
