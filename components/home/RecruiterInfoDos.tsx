import { LinkButton } from '@components/Atomos/BannerTextStyles';
import { EmpleosPageData } from 'data/pages/home/EmpleosPage';
import Link from 'next/link';
import React from 'react';
import { InfoDiv } from './RecruiterInfoStyles';

const RecruiterInfoDos = () => {
  const {
    nuestroMetodo: { ofertas, orangeText: OrangeText, whiteText: WhiteText },
  } = EmpleosPageData;
  return (
    <InfoDiv>
      <div>
        <h3>
          Brindamos una especialización
          <br /> en recruiting IT para que puedas
          <br /> alcanzar al candidato ideal que se
          <br /> ajuste a cada búsqueda específica.
        </h3>
        <Link href={'/form/recruiter'}>
          <LinkButton>Sumate!</LinkButton>
        </Link>
      </div>
    </InfoDiv>
  );
};

export default RecruiterInfoDos;
