import Certificado from '@components/Moleculas/Certificado';
import Banner from '@components/Organos/Banner';
import Rocket from '@components/Organos/Rocket';
import Wave from '@components/Organos/Wave';
import Layout from 'layout/Layout';
import React from 'react';
import { LayoutValueEnum } from 'types/Enums';
import PageData from '../../../data/Pages';

const HomePage = () => {
  // Información estatica de las paginas
  const { buttonContent, para, rocket, certificado } = PageData.empresa;
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
