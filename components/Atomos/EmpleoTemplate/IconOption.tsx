import React from 'react';
import { IconType } from 'react-icons';
import styles from './IconOptions.module.scss';

interface IconOptionProps {
  icon: IconType;
  data: string;
}

const IconOption = ({ icon, data }: IconOptionProps) => {
  const Icon = icon;

  return (
    <div className={styles.container}>
      <Icon />
      <p>{data} </p>
    </div>
  );
};

export default IconOption;
