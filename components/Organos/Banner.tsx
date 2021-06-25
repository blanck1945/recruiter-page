import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.scss';
import Button from '@components/Atomos/Button';
import { ButtonTypes } from 'types/ButtonTypes';
import { LayoutValueEnum } from 'types/Enums';
import useWindowSize from 'hooks/useWindowWidth';
import { setHeight, setWidth } from 'utils/windowSize';

interface BannerProps {
  image: LayoutValueEnum;
  para: any;
  buttonContent: string;
}

const Banner = ({ image, para: Para, buttonContent }: BannerProps) => {
  const { width } = useWindowSize();

  const getImage = (image: LayoutValueEnum) => {
    switch (image) {
      case LayoutValueEnum.empresa:
        return '/mujer_computadora.png';
      case LayoutValueEnum.recruiter:
        return '/mujer_recruiter.png';
      default:
        return '/re-logo.png';
    }
  };

  return (
    <div className={styles.banner}>
      <div>
        <Image
          className={styles.bannerImg}
          src="/re-logo.png"
          alt="re-logo"
          height={101}
          width={76}
          priority
        />
        <div className={styles.bannerHeader}>
          <h2>Escalá tu negocio</h2>
          <h2>con nuestra red</h2>
        </div>
        <Para />
        <Button buttonClass="sumate">{buttonContent}</Button>
      </div>
      <div>
        <Image
          src={getImage(image)}
          alt="imagen-banner"
          height={setHeight(width)}
          width={setWidth(width)}
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
