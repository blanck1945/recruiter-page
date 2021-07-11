import JobList from '@components/Moleculas/JobList';
import NuestraRed from '@components/Moleculas/NuestraRed';
import NuestroMedoto from '@components/Moleculas/NuestroMedoto';
import SearchBanner from '@components/Moleculas/SearchBanner';
import Layout from 'layout/Layout';
import React from 'react';
import { LayoutValueEnum } from 'types/Enums';

const index = () => {
  return (
    <Layout value={LayoutValueEnum.recruiter}>
      <SearchBanner />
      <JobList />
      <NuestroMedoto />
      <NuestraRed />
    </Layout>
  );
};

export default index;
