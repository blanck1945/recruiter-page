import React from 'react';
import { ServicesInterface } from 'types/Interfaces';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  service: ServicesInterface;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { header, desc, logo: Logo } = service;

  return (
    <div className={styles.card}>
      <Logo />
      <h3>{header}</h3>
      <p>{desc} </p>
    </div>
  );
};

export default ServiceCard;
