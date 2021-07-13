import React from 'react';
import styles from './DescriptionPara.module.scss';

interface DescriptionParaProps {
  header: string;
  desc: string;
}

const DescriptionPara = ({ header, desc }: DescriptionParaProps) => {
  return (
    <div className={styles.container}>
      <h3>{header}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default DescriptionPara;
