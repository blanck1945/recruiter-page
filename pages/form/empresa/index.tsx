import React, { useEffect } from 'react';
import Image from 'next/image';
import FormikControl from '../../../components/Moleculas/FormikControl';
import RecruitersLogo from '../../../components/Atomos/RecruitersLogo';
import styles from '../../scss/form/empresa.module.scss';
import LogoImage from '@components/Atomos/LogoImage';
import { CreateBusinessForm } from '../../../forms/CreateBusinessForm';
import { FormPageData } from 'data/Pages';
import { getSession } from 'next-auth/client';
import { TiArrowBack } from 'react-icons/ti';
import useWindowSize from 'hooks/useWindowWidth';
import Link from 'next/link';

interface indexProps {
  session: any;
}

const index = ({ session }: indexProps) => {
  const { width } = useWindowSize();

  // Información de la pagina del formulario Recruiter
  const {
    empresa: { header: Header },
  } = FormPageData;

  return (
    <div className={styles.form}>
      <div className={styles.mainDiv}>
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
          {width < 1024 ? (
            <Link href="/">
              <TiArrowBack />
            </Link>
          ) : null}
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
