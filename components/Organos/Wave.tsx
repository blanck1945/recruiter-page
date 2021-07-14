import React from 'react';
import Image from 'next/image';
import styles from './Wave.module.scss';
import { Services } from 'data/Services';
import { RowsEnums } from 'types/Enums';
import { ServicesInterface } from 'types/Interfaces';
import ServiceCard from '@components/Atomos/ServiceCard';
import useWindowSize from 'hooks/useWindowWidth';

interface WaveProps {
  wave?: string;
}

const Wave = ({ wave }: WaveProps) => {
  const { width } = useWindowSize();

  const getServices = (value: RowsEnums) => {
    return Services.map((service: ServicesInterface, index: number) => {
      if (service.row === value) {
        return <ServiceCard service={service} key={index} />;
      }
    });
  };

  return (
    <>
      <div
        className={
          width < 780
            ? styles.servicesMobile
            : wave === 'cut'
            ? styles.servicesCut
            : styles.services
        }
      >
        <div>
          <h2>
            Brindamos servicios de reclutamiento con un foco muy fuerte en las relaciones humanas de
            calidad.
          </h2>
        </div>
        <div className={styles.rightDiv}>
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
        </div>
        <div>
          <h4>boost your business</h4>
        </div>
      </div>
    </>
  );
};

export default Wave;
