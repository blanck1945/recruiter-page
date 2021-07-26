import { EmpleosPageData } from 'data/pages/home/EmpleosPage';
import React from 'react';
import { InfoDiv } from './RecruiterInfoStyles';

const RecruiterInfo = () => {
  const {
    nuestroMetodo: { ofertas, orangeText: OrangeText, whiteText: WhiteText },
  } = EmpleosPageData;
  return (
    <InfoDiv>
      <div>
        <OrangeText />
        <h4>
          Utilizamos una plataforma propia <br /> y única en Latinoamérica, diseñada <br />{' '}
          especialmente para agilizar procesos
          <br /> de reclutamiento.
        </h4>
      </div>
    </InfoDiv>
  );
};

export default RecruiterInfo;
