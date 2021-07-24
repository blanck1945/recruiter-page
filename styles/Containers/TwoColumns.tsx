import styled from 'styled-components';

export const TwoColumnsDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100%;
  height: 100vh;

  @media (max-width: 1440px) {
    grid-template-columns: 25% 75%;
  }
`;
