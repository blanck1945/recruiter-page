import React, { useContext } from 'react';
import styles from './JobList.module.scss';
import { MdSort } from 'react-icons/md';
import { dummyData } from 'data/dummy/dummy';
import JobCard from '@components/Atomos/JobCard';
import { GlobaljobContext } from 'context/jobContext';

const JobList = () => {
  const { jobs, resultJobs } = useContext(GlobaljobContext);

  const dummyJobList =
    resultJobs.length === 0 && jobs
      ? jobs.map((el, index: number) => {
          return <JobCard key={index} job={el} />;
        })
      : resultJobs.map((el: any, index: number) => {
          return <JobCard key={index} job={el} />;
        });
  return (
    <div className={styles.jobList}>
      <div>
        <p>Últimas Búsquedas</p>
        <MdSort />
      </div>
      <div>{dummyJobList}</div>
    </div>
  );
};

export default JobList;
