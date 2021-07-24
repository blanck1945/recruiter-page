import styled from 'styled-components';
import { breakpoints, displayBreakpoints } from '../../utils/breakpoints';

export const SideBarDiv = styled.div`
  ${displayBreakpoints('display', 'none', 760)}
  background-color: ${({ theme }) => theme.colors.mainWhite};
  width: 100%;
  height: 100%;
`;

export const SideBarHeader = styled.div`
  height: 10%;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  margin-left: 4rem;

  svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.gray94};
    cursor: pointer;
  }
`;

export const SideBarPhoto = styled.div`
  height: 20%;
`;

export const PhotoUpDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    border-radius: 4.8rem;
    width: 6rem;
    box-shadow: 0px 3px 6px #00000029;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Product Sans';
    color: ${({ theme }) => theme.colors.nameBlue};
  }
`;

export const PhotoDownDiv = styled.div`
  height: 90%;
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray70};
    font-family: 'Product Sans';
    font-size: 1.6rem;
  }
`;

export const NewSearchButton = styled.span`
  background-color: ${({ theme }) => theme.colors.lightBlue90};
  color: ${({ theme }) => theme.colors.mainWhite};
  border-radius: 3rem;
  width: 70%;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.9rem;
  cursor: pointer;
  font-size: 1.6rem;
  svg {
    font-size: 3rem;
    margin-right: 0.9rem;
  }
`;

export const SideBarActions = styled.div`
  margin-top: 6.2rem;
`;

export const ActionOptions = styled.div`
  display: grid;
  grid-template-columns: 25% 60% 15%;
  margin-left: 5rem;
  align-items: center;
  cursor: pointer;
  height: 9.5rem;
`;
