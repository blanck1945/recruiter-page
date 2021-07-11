import Banner from '@components/Organos/Banner';
import Rocket from '@components/Organos/Rocket';
import Wave from '@components/Organos/Wave';
import { RecruiterPageData } from 'data/pages/home/RecruiterPage';
import Layout from 'layout/Layout';
import React from 'react';
import { LayoutValueEnum } from 'types/Enums';
import PageData from '../../../data/Pages';

const index = () => {
  // Información estatica de las paginas
  const { buttonContent, para, rocket } = RecruiterPageData;

  return (
    <Layout value={LayoutValueEnum.recruiter}>
      <Banner buttonContent={buttonContent} para={para} image={LayoutValueEnum.recruiter} />
      <Wave wave="cut" />
      <Rocket data={rocket} />
    </Layout>
  );
};

export default index;
