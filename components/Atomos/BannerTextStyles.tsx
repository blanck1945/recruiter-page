import styled from 'styled-components';
import { breakpoints } from 'utils/breakpoints';

export const BannerTextDiv = styled.div`
  ${breakpoints('margin-left', 'rem', [{ 1920: 23.5 }, { 1440: 18 }, { 1028: 14.2 }, { 750: 0 }])}
  ${breakpoints('margin-top', 'rem', [{ 1920: 8 }, { 750: 2 }])}
  margin-left: 23.5rem;

  @media screen and (max-width: 1028px) {
    height: 65vh;
  }

  @media (max-width: 750px) {
    width: 100wh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & > p:first-of-type {
    ${breakpoints('height', 'rem', [
      { 1920: 9 },
      { 1680: 10 },
      { 1440: 6 },
      { 1028: 5 },
      { 750: 5 },
    ])}
    ${breakpoints('font-size', 'rem', [{ 1920: 2.4 }, { 1440: 1.8 }, { 1028: 1.2 }])}
    ${breakpoints('line-height', 'rem', [{ 1920: 3 }, { 1440: 2.4 }, { 1028: 2 }])}

    font-family: ${({ theme }) => theme.fonts.monserratLight};
    color: ${({ theme }) => theme.colors.black33};

    @media screen and (max-width: $mobile) {
      text-align: center;
    }
  }
`;

export const TextUpDiv = styled.div`
  margin-top: 2.2rem;
  margin-left: 10.2rem;
  margin-bottom: 1rem;

  h2 {
    ${breakpoints('font-size', 'rem', [{ 1920: 8 }, { 1440: 5 }, { 1028: 4 }])}
    ${breakpoints('line-height', 'rem', [{ 1920: 8 }, { 1440: 6 }, { 1028: 5 }])}
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.neoSans};
    color: ${({ theme }) => theme.colors.mainOrange};

    @media screen and (max-width: 750px) {
      text-align: center;
    }
  }
`;

export const LinkButton = styled.p`
  ${breakpoints('width', 'rem', [{ 1920: 18 }, { 1028: 14 }])}
  ${breakpoints('height', 'rem', [{ 1920: 4.5 }, { 1028: 3.8 }])}
  ${breakpoints('font-size', 'rem', [{ 1920: 1.8 }, { 1028: 1.5 }])}
  font-family: ${({ theme }) => theme.fonts.monserratLight};
  border-radius: 4rem;
  background-color: ${({ theme }) => theme.colors.mainOrange};
  color: ${({ theme }) => theme.colors.mainWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem 1.8rem;

  @media (min-width: 1028px) {
    font-weight: lighter;
  }
`;
