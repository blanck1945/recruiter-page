import React from 'react';
import Image from 'next/image';
import styles from './Rocket.module.scss';
import Header from '@components/Atomos/Header';
import { RocketDataInterface } from 'types/Interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface RocketProps {
  data: RocketDataInterface;
}

const Rocket = ({ data }: RocketProps) => {
  return (
    <div className={styles.rocket}>
      <div>
        <Header data={data} />
      </div>
      <LazyLoadImage src="/darths.png" alt="rocket" height="850px" width="850px" />
    </div>
  );
};

export default Rocket;
