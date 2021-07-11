import HeaderOption from '@components/Atomos/EmpleoTemplate/HeaderOption';
import React, { useEffect, useState } from 'react';
import styles from './EmpleoHeader.module.scss';

interface EmpleHeaderProps {
  job: any;
}

const EmpleoHeader = ({ job }: EmpleHeaderProps) => {
  const data = job[0];
  console.log(data);
  const newArr = [
    {
      option: 'Experiencia:',
      data: data ? data.experiencia : 'Sin Experiencia',
    },
    {
      option: 'Ubicación:',
      data: data ? data.ubicacion : 'Sin Ubicación',
    },
    {
      option: 'Fecha de Inicio:',
      data: data ? data.fechaInicio : 'Sin Fecha de Inicio',
    },
    {
      option: 'Industria::',
      data: data ? data.industria : 'Sin Industria',
    },
  ];

  const headerOptions =
    newArr &&
    newArr.map((el: any, index: number) => {
      return <HeaderOption key={index} option={el.option} data={el.data} />;
    });

  return (
    <div className={styles.container}>
      <h4>{data ? data.empresa : 'Sin Empresa'} </h4>
      <div>{headerOptions}</div>
    </div>
  );
};

export default EmpleoHeader;
