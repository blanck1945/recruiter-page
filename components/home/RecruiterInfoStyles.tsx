import styled from 'styled-components';

export const InfoDiv = styled.div`
  width: 100%;
  height: 50rem;
  display: grid;
  position: relative;
  bottom: 25rem;
  grid-template-columns: repeat(2, 1fr);

  & > div {
    background-color: ${({ theme }) => theme.colors.mainWhite};
    border-radius: 50%;
    height: 50rem;
    margin-left: 8rem;
    display: flex;
    flex-direction: column;
    width: 65em;
    align-items: center;

    & > h3 {
      font-weight: 700;
      font-family: ${({ theme }) => theme.fonts.neoSans};
      line-height: 4.3rem;
      font-size: 3.3rem;
      padding-left: 12rem;
      padding-top: 9rem;
      color: ${({ theme }) => theme.colors.mainOrange};
      width: 100%;

      @media screen and (max-width: 1442px) {
        font-size: 3.5rem;
        line-height: 4.5rem;
      }
    }

    & > p {
      position: relative;
      top: 3.5rem;
    }

    & > h4 {
      font-weight: 700;
      width: 100%;
      padding-top: 2rem;
      padding-left: 12rem;
      color: ${({ theme }) => theme.colors.black33};
      font-family: ${({ theme }) => theme.fonts.monserratLight};
      font-size: 1.6rem;
      line-height: 3rem;

      @media screen and (max-width: $laptop1440) {
        font-size: 1.8rem;
        line-height: 3rem;
      }
    }
  }
`;
