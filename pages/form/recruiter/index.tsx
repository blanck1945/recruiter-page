import React from 'react';
import FormikControl from '../../../components/Moleculas/FormikControl';
import RecruitersLogo from '../../../components/Atomos/RecruitersLogo';
import Image from 'next/image';
import LogoImage from '@components/Atomos/LogoImage';
import { CreateCandidate } from 'forms/CreateCandidateForm';
import { useSession } from 'next-auth/client';
import stylesRecruiter from '../../scss/form/recruiter.module.scss';
import { RecrutierFormData } from 'data/pages/form/RecruiterPage';
import { TiArrowBack } from 'react-icons/ti';
import useWindowSize from 'hooks/useWindowWidth';
import Link from 'next/link';

const index = () => {
  const { width } = useWindowSize();

  // Información de la pagina del formulario Recruiter
  const { header: Header } = RecrutierFormData;

  return (
    <div className={stylesRecruiter.form}>
      <div>
        <LogoImage />
        <RecruitersLogo link />
        <div className={stylesRecruiter.orangeModal}>
          <Header />
        </div>
        <div className={stylesRecruiter.blueGreen}></div>
      </div>
      <div>
        <div>
          {width < 1024 ? (
            <Link href="/">
              <TiArrowBack />
            </Link>
          ) : null}
          <h5>Completá los siguientes datos y nos pondremos en contacto.</h5>
        </div>
        <FormikControl {...CreateCandidate} />
      </div>
    </div>
  );
};

export default index;
