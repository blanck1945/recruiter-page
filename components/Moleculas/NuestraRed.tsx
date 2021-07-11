import Button from '@components/Atomos/Button';
import { EmpleosPageData } from 'data/pages/home/EmpleosPage';
import React from 'react';
import styles from './NuestraRed.module.scss';
import Image from 'next/image';

const NuestraRed = () => {
  const {
    nuestraRed: { whiteText: WhiteText },
  } = EmpleosPageData;

  return (
    <div className={styles.nuestraRed}>
      <div>
        <Image src="/home/empleos/working.jpg" alt="working" height={500} width={750} />
      </div>
      <div>
        <WhiteText />
        <Button type="customAnchor" buttonClass={styles.blueButton}>
          Registrate!
        </Button>
      </div>
    </div>
  );
};

export default NuestraRed;
