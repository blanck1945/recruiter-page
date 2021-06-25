import React from 'react';
import Image from 'next/image';
import styles from './Rocket.module.scss';
import Header from '@components/Atomos/Header';
import { RocketDataInterface } from 'types/Interfaces';

interface RocketProps {
  data: RocketDataInterface;
}

const Rocket = ({ data }: RocketProps) => {
  return (
    <div className={styles.rocket}>
      <div>
        <Header data={data} />
      </div>
      <Image src="/rocket.png" alt="rocket" height={500} width={750} />
    </div>
  );
};

export default Rocket;
