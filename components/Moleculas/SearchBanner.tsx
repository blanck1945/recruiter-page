import LogoImage from '@components/Atomos/LogoImage';
import { EmpleosPageData } from 'data/pages/home/EmpleosPage';
import { SearchBarForm } from 'forms/SearchJobForm';
import React from 'react';
import FormikControl from './FormikControl';
import styles from './SearchBanner.module.scss';

const SearchBanner = () => {
  const { blueText: BlueText, whiteText: WhiteText } = EmpleosPageData;

  return (
    <>
      <div className={styles.search}>
        <div>
          <LogoImage />
          <WhiteText />
        </div>
        <div>
          <BlueText />
        </div>
      </div>
      <div className={styles.searchBar}>
        <FormikControl {...SearchBarForm} />
      </div>
    </>
  );
};

export default SearchBanner;
