import { GlobaljobContext } from 'context/jobContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './JobCard.module.scss';

interface JobCardProps {
  job: any;
}

const JobCard = ({ job }: JobCardProps) => {
  const { dispatchOneJob } = useContext(GlobaljobContext);

  return (
    <Link href={'/jobs/' + job.puesto}>
      <div className={styles.jobCard} onClick={() => dispatchOneJob(job.id)}>
        <div>
          {job.puesto}
          <div>
            <div>
              <p>icon</p>
              {job.empresa}
            </div>
            <div>
              <p>icon</p>
              {job.locacion}
            </div>
          </div>
        </div>
        <div>
          <span>{job.modalidadDeTrabajo}</span>
          <p>Hace 5 h</p>
        </div>
        <div>
          <p>icon</p>
          <button>Aplicar</button>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
