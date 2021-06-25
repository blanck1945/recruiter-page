import Header from '@components/Atomos/Header';
import React from 'react';
import styles from './Certificado.module.scss';
import ServiceCard from '@components/Atomos/ServiceCard';
import { CertificadoData } from 'data/Services';

interface CertiicadoProps {
  data: any;
}

const Certificado = ({ data }: CertiicadoProps) => {
  console.log(CertificadoData);

  return (
    <div className={styles.certificado}>
      <div>
        <Header data={data} />
      </div>
      <div>
        <ServiceCard type="certificad" service={CertificadoData} />
      </div>
    </div>
  );
};

export default Certificado;
