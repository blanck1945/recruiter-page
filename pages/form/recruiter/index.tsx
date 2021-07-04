import React from 'react';
import FormikControl from '../../../components/Moleculas/FormikControl';
import RecruitersLogo from '../../../components/Atomos/RecruitersLogo';
import Image from 'next/image';
import styles from '../../scss/form/empresa.module.scss';
import LogoImage from '@components/Atomos/LogoImage';
import { CreateCandidate } from 'forms/CreateCandidateForm';
import { useUser } from '@auth0/nextjs-auth0';
import { FormPageData } from 'data/Pages';

const index = () => {
  const { user, error, isLoading } = useUser();

  // Información de la pagina del formulario Recruiter
  const {
    recruiter: { header: Header },
  } = FormPageData;

  return (
    <div className={styles.form}>
      <div>
        <LogoImage />
        <RecruitersLogo />
        <Image src="/formRecruiter.png" alt="form-recruiter" height={450} width={400} priority />
      </div>
      <div>
        <div>
          <Header />
          <h5>Completá los siguientes datos y nos pondremos en contacto.</h5>
        </div>
        <FormikControl {...CreateCandidate} />
      </div>
    </div>
  );
};

export default index;
