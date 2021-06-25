import React from 'react';
import styles from './RecruitersLogo.module.scss';

interface RecruitersLogoProps {
  style?: string;
}

const RecruitersLogo = ({ style }: RecruitersLogoProps) => {
  return (
    <div className={style === 'white' ? styles.recruitersWhite : styles.recruiters}>
      <h2>recruiters</h2>
      <h3>freelance</h3>
    </div>
  );
};

export default RecruitersLogo;
