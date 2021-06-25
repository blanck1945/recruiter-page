import React from 'react';
import FormikControl from '../../../components/Moleculas/FormikControl';
import RecruitersLogo from '../../../components/Atomos/RecruitersLogo';
import Image from 'next/image';
import styles from '../../scss/form/empresa.module.scss';
import LogoImage from '@components/Atomos/LogoImage';

const index = () => {
  return (
    <div className={styles.form}>
      <div>
        <LogoImage />
        <RecruitersLogo />
      </div>
      <div>
        <div>
          <h2>
            Estás a un paso de
            <br /> convertirte en Recruiter
          </h2>
          <h5>Completá los siguientes datos y nos pondremos en contacto.</h5>
        </div>
      </div>
    </div>
  );
};

export default index;
