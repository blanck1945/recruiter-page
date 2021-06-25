import Header from '@components/Atomos/Header';
import React from 'react';
import styles from './Certificado.module.scss';
import Image from 'next/image';

interface CertiicadoProps {
  data: any;
}

const Certificado = ({ data }: CertiicadoProps) => {
  return (
    <div className={styles.rocket}>
      <div>
        <Header data={data} />
      </div>
      <Image src="/rocket.png" alt="rocket" height={500} width={750} />
    </div>
  );
};

export default Certificado;
