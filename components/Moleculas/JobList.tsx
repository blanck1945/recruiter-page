import React, { useContext } from 'react';
import styles from './JobList.module.scss';
import { MdSort } from 'react-icons/md';
import { dummyData } from 'data/dummy/dummy';
import JobCard from '@components/Atomos/JobCard';
import { GlobaljobContext } from 'context/jobContext';

const JobList = () => {
  const { jobs } = useContext(GlobaljobContext);

  console.log(jobs);

  const dummyJobList =
    jobs &&
    jobs.map((el, index: number) => {
      return <JobCard key={index} job={el} />;
    });

  return (
    <div className={styles.jobList}>
      <div>
        <p>Últimas Búsquedas</p>
        <MdSort />
      </div>
      <div>{dummyJobList}</div>
      <div>Paginator</div>
    </div>
  );
};

export default JobList;
