import styled from 'styled-components';

export const CentralScreenDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.whitef1};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
