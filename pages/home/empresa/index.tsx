import { useAuth0 } from '@auth0/auth0-react';
import Certificado from '@components/Moleculas/Certificado';
import Banner from '@components/Organos/Banner';
import Rocket from '@components/Organos/Rocket';
import Wave from '@components/Organos/Wave';
import { EmpresaPageData } from 'data/pages/home/EmpresaPage';
import Layout from 'layout/Layout';
import React from 'react';
import { LayoutValueEnum } from 'types/Enums';

const HomePage = () => {
  // Información estatica de las paginas
  const { buttonContent, para, rocket, certificado } = EmpresaPageData;

  return (
    <Layout value={LayoutValueEnum.empresa}>
      <Banner buttonContent={buttonContent} para={para} image={LayoutValueEnum.empresa} />
      <Wave />
      <Rocket data={rocket} />
      <Certificado data={certificado} />
    </Layout>
  );
};

export default HomePage;
