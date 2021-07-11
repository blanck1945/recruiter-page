import EmpleoBanner from '@components/Moleculas/EmpleoTemplate/EmpleoBanner';
import EmpleoBody from '@components/Moleculas/EmpleoTemplate/EmpleoBody';
import EmpleoHeader from '@components/Moleculas/EmpleoTemplate/EmpleoHeader';
import { GlobaljobContext } from 'context/jobContext';
import Layout from 'layout/Layout';
import React, { useContext } from 'react';
import { LayoutValueEnum } from 'types/Enums';

const index = () => {
  const { job } = useContext(GlobaljobContext);
  console.log(job);
  return (
    <Layout value={LayoutValueEnum.recruiter}>
      <EmpleoBanner job={job} />
      <EmpleoHeader job={job} />
      <EmpleoBody
        descripcion={job[0] ? job[0].description : 'no Desc'}
        tareas={job[0] ? job[0].tareas : 'Sin tareas'}
        requerimientos={job[0] ? job[0].requerimientos : 'Sin requerimientos'}
      />
    </Layout>
  );
};

export default index;
