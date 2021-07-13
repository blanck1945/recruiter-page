import React, { useEffect } from 'react';
import Image from 'next/image';
import FormikControl from '../../../components/Moleculas/FormikControl';
import RecruitersLogo from '../../../components/Atomos/RecruitersLogo';
import styles from '../../scss/form/empresa.module.scss';
import LogoImage from '@components/Atomos/LogoImage';
import { CreateBusinessForm } from '../../../forms/CreateBusinessForm';
import { FormPageData } from 'data/Pages';
import { getCsrfToken, getSession } from 'next-auth/client';

interface indexProps {
  session: any;
}

const index = ({ session }: indexProps) => {
  useEffect(() => {
    const getData = async () => {
      const newSEssion = await getSession();
    };
    getData();
  }, []);

  // Información de la pagina del formulario Recruiter
  const {
    empresa: { header: Header },
  } = FormPageData;

  return (
    <div className={styles.form}>
      <div>
        <LogoImage />
        <RecruitersLogo link />
        <Image
          src="/form/empresa/recruiter.png"
          alt="form-recruiter"
          height={450}
          width={400}
          priority
        />
      </div>
      <div>
        <div>
          <Header />
          <h5>Completá los siguientes datos y nos pondremos en contacto.</h5>
        </div>
        <FormikControl {...CreateBusinessForm} />
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
