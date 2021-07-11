import React from 'react';
import { IconType } from 'react-icons';
import styles from './EmpleoBanner.module.scss';
import { FaSuitcase } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import IconOption from '@components/Atomos/EmpleoTemplate/IconOption';

interface EmpleoBannerProps {
  job: any;
}

interface IconDataInterface {
  icon: IconType;
  data: string;
}

const EmpleoBanner = ({ job }: EmpleoBannerProps) => {
  const data = job ? job[0] : null;
  const iconArr: IconDataInterface[] = [
    {
      icon: () => <FaSuitcase />,
      data: data ? data.empresa : 'Sin Empresa',
    },
    {
      icon: () => <IoLocation />,
      data: data ? data.location : 'Sin Locacion',
    },
  ];

  const iconComp = iconArr.map((el: IconDataInterface, index: number) => {
    return <IconOption key={index} icon={el.icon} data={el.data} />;
  });

  return (
    <div className={styles.container}>
      <div>
        <h2>{data ? data.puesto : 'Sin Puesto'} </h2>
      </div>
      <div>
        <div>
          <span>{data ? data.tipo : 'Sin tipo'}</span>
          <p>Hace 5 h</p>
        </div>
        <div>{iconComp}</div>
      </div>
    </div>
  );
};

export default EmpleoBanner;
