import { EmpleosPageData } from 'data/pages/home/EmpleosPage';
import React from 'react';
import styles from './NuestroMetodo.module.scss';

const NuestroMedoto = () => {
  const {
    nuestroMetodo: { ofertas, orangeText: OrangeText, whiteText: WhiteText },
  } = EmpleosPageData;

  return (
    <div className={styles.method}>
      <div>
        <OrangeText />
      </div>
      <div>
        <WhiteText />
      </div>
      <div>
        <div>{ofertas}</div>
      </div>
    </div>
  );
};

export default NuestroMedoto;
