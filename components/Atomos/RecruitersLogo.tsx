import Link from 'next/link';
import React from 'react';
import styles from './RecruitersLogo.module.scss';

interface RecruitersLogoProps {
  style?: string;
  link?: boolean;
}

const RecruitersLogo = ({ style, link }: RecruitersLogoProps) => {
  if (link) {
    return (
      <Link href="/">
        <div className={style === 'white' ? styles.recruitersWhite : styles.recruiters}>
          <h2>recruiters</h2>
          <h3>freelance</h3>
        </div>
      </Link>
    );
  }

  return (
    <div className={style === 'white' ? styles.recruitersWhite : styles.recruiters}>
      <h2>recruiters</h2>
      <h3>freelance</h3>
    </div>
  );
};

export default RecruitersLogo;
