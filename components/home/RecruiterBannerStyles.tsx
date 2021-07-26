import styled from 'styled-components';

export const RecruiterBannerDiv = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 80rem;
  padding-top: 4rem;

  div:nth-child(2) {
    position: relative;
    right: 11rem;
  }
`;

export const BannerLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerRightDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
