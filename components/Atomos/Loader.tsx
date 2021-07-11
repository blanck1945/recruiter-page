import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.scss';

const LoaderComp = () => {
  return (
    <div className={styles.loader}>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default LoaderComp;
