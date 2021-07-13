import { GlobaljobContext } from 'context/jobContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './JobCard.module.scss';
import { FaSuitcase } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { GiShare } from 'react-icons/gi';
import useWindowSize from 'hooks/useWindowWidth';

interface JobCardProps {
  job: any;
}

const JobCard = ({ job }: JobCardProps) => {
  const { width } = useWindowSize();
  const { dispatchOneJob } = useContext(GlobaljobContext);

  const setBackColor = (work: string) => {
    switch (work) {
      case 'Freelance':
        return '#EEC60A';
      case 'Part-time':
        return '#3BACA8';
      default:
        return '#ED653A';
    }
  };

  return (
    <Link href={'/jobs/' + job.puesto}>
      <div className={styles.jobCard} onClick={() => dispatchOneJob(job.id)}>
        <div>
          <h4>{job.puesto}</h4>
          <div className={styles.jobLeftData}>
            <div>
              <FaSuitcase />
              {job.empresa}
            </div>
            <div>
              <IoLocation />
              {job.locacion}
            </div>
          </div>
        </div>
        <>
          <div className={styles.jobCenterDiv}>
            <span style={{ backgroundColor: setBackColor(job.modalidadDeTrabajo) }}>
              {job.modalidadDeTrabajo}
            </span>
            <p>Hace 5 h</p>
          </div>
          <div className={styles.jobRightDiv}>
            <GiShare />
            <span>Aplicar</span>
          </div>
        </>
      </div>
    </Link>
  );
};

export default JobCard;
