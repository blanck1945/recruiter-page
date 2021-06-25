import React from 'react';
import { ServicesInterface } from 'types/Interfaces';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  type?: string;
  service: ServicesInterface;
}

const ServiceCard = ({ type, service }: ServiceCardProps) => {
  const { header, desc, logo: Logo } = service;

  return (
    <div className={type ? styles.certificadCard : styles.card}>
      <Logo />
      <h3>{header}</h3>
      <p>{desc} </p>
    </div>
  );
};

export default ServiceCard;
