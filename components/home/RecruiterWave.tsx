import ServiceCard from '@components/Atomos/ServiceCard';
import { Services } from 'data/Services';
import useWindowSize from 'hooks/useWindowWidth';
import React from 'react';
import { RowsEnums } from 'types/Enums';
import { ServicesInterface } from 'types/Interfaces';
import {
  RecruiterWaveDiv,
  ServicesDiv,
  WaveImage,
  WaveText,
  BoostDiv,
} from './RecruiterWaveStyles';
import Image from 'next/image';

const RecruiterWave = () => {
  const { width } = useWindowSize();

  const getServices = (value: RowsEnums) => {
    return Services.map((service: ServicesInterface, index: number) => {
      if (service.row === value) {
        return <ServiceCard service={service} key={index} />;
      }
    });
  };

  return (
    <RecruiterWaveDiv>
      <WaveText>
        Brindamos servicios de reclutamiento con un foco muy fuerte en las relaciones humanas de
        calidad.
      </WaveText>
      <WaveImage src="/home/recruiter/Path 1134.png" alt="wave" height={1500} width={800} />
      <ServicesDiv>
        <div>{getServices(RowsEnums.one)}</div>
        {width < 780 ? (
          <div>
            <div>{getServices(RowsEnums.two)}</div>
            <div>{getServices(RowsEnums.three)}</div>
          </div>
        ) : (
          <>
            <div>{getServices(RowsEnums.two)}</div>
            <div>{getServices(RowsEnums.three)}</div>
          </>
        )}
      </ServicesDiv>
      <BoostDiv>
        <Image src="/home/recruiter/Group 29.png" alt="stamp" width={200} height={200} />
        <h4>
          BOOST YOUR <span>BUSINESS</span>
        </h4>
      </BoostDiv>
    </RecruiterWaveDiv>
  );
};

export default RecruiterWave;
