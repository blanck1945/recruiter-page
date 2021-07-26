import styled from 'styled-components';
import Image from 'next/image';

export const RecruiterWaveDiv = styled.div`
  display: grid;
  grid-template-columns: 65% 50%;
  align-items: center;

  & > div:first-of-type {
    left: -23rem;
    width: 155rem;
    height: 160rem;
    margin-right: 0;
  }
`;

export const WaveText = styled.h2`
  font-size: 4.2rem;
  letter-spacing: 0.1rem;
  line-height: 5.2rem;
  width: 76.6rem;
  font-weight: 700;
  top: 150rem;
  height: 31.7rem;
  padding-left: 14rem;
  z-index: 5;

  @media screen and (max-width: $laptop1440) {
    font-size: 3.5rem;
    line-height: 4.5rem;
  }

  @media screen and (max-width: $ipad) {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  position: absolute;
  color: ${({ theme }) => theme.colors.mainWhite};
  font-family: ${({ theme }) => theme.fonts.neoSans};
`;

export const ServicesDiv = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  right: 23rem;
  flex-direction: column;
  margin-top: 24rem;

  @media screen and (max-width: $laptop1440) {
    margin-top: 6rem;
    margin-left: 1rem;
  }

  & > div:first-of-type {
    display: grid;
    grid-template-columns: 64.5% 40%;
    align-items: center;
    width: 65%;
    margin-top: 4rem;

    @media screen and (max-width: $laptop1440) {
      grid-template-columns: 65% 40%;
    }
  }

  & > div:nth-child(2) {
    width: 65%;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      @media screen and (max-width: $ipad) {
        margin-left: 14rem;
      }
    }
  }

  & > div:nth-child(3) {
    width: 65%;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & > div {
      @media screen and (max-width: $laptop1440) {
      }

      @media screen and (max-width: $ipad) {
        margin-left: 28rem;
      }
    }
  }
`;

export const BoostDiv = styled.div`
  position: absolute;
  top: 190rem;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 26rem;

  & > h4 {
    color: ${({ theme }) => theme.colors.mainWhite};
    font-family: ${({ theme }) => theme.fonts.neoSans};
    font-size: 7rem;
    padding-left: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3rem;

    @media screen and (max-width: $desktop1680) {
      position: relative;
      right: 15rem;
      bottom: 5rem;
    }

    @media screen and (max-width: $laptop1440) {
      right: 24rem;
    }

    @media screen and (max-width: $ipad) {
      font-size: 5rem;
      right: 48rem;
    }
    & > span {
      margin-left: 1.3rem;
      color: ${({ theme }) => theme.colors.mainOrange};
    }
  }
`;

export const WaveImage = styled(Image)``;
