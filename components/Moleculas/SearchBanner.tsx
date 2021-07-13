import Button from '@components/Atomos/Button';
import LogoImage from '@components/Atomos/LogoImage';
import { GlobaljobContext } from 'context/jobContext';
import { EmpleosPageData } from 'data/pages/home/EmpleosPage';
import { SearchBarForm } from 'forms/SearchJobForm';
import React, { useContext, useEffect, useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import FormikControl from './FormikControl';
import styles from './SearchBanner.module.scss';

const SearchBanner = () => {
  const { blueText: BlueText, whiteText: WhiteText } = EmpleosPageData;
  const [searchValue, setSearchValue] = useState<string>('');
  const JobContext = useContext(GlobaljobContext);

  const searchForJob = () => {
    JobContext.searchJobs(searchValue);
  };

  const handleInput = (e: any) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === '') {
      JobContext.clearSearchJobs();
    }
  }, [searchValue]);

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
        <div className="searchBar">
          <div>
            <GiMagnifyingGlass onClick={(e) => handleInput(e)} />
            <input
              className="footer-searchBar"
              type="text"
              value={searchValue}
              onChange={(e: any) => setSearchValue(e.target.value)}
            />
            <button onClick={() => searchForJob()}>buscar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBanner;

//       <Button buttonClass="search">Buscar</Button>
// <FormikControl {...SearchBarForm} />
