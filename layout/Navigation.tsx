import React from 'react';
import styles from './Navigation.module.scss';
import links from '../data/router';
import social from '../data/socialLinks';
import Link from 'next/link';
import RecruitersLogo from '@components/Atomos/RecruitersLogo';
import { ButtonEnum, LayoutValueEnum } from 'types/Enums';
import Button from '@components/Atomos/Button';

interface NavigationProps {
  value: LayoutValueEnum;
}

const Navigation = ({ value }: NavigationProps) => {
  const navLinks = links.map((link, index: number) => {
    return <Link href={link.path}>{link.name}</Link>;
  });

  const socialLinks = social.map(({ logo: Logo, link }, index: number) => {
    return (
      <Link href={link}>
        <Logo />
      </Link>
    );
  });

  switch (value) {
    case LayoutValueEnum.empresa:
      return (
        <nav className={styles.navigation}>
          <div className={styles.navigationConvert}>
            <span>Convertite en Recruiter</span>
          </div>
          <RecruitersLogo />
          <div>{socialLinks}</div>
        </nav>
      );
    case LayoutValueEnum.recruiter:
      return (
        <nav className={styles.recruiterNavigation}>
          <div>{socialLinks}</div>
          <RecruitersLogo />
          <div>
            <Button buttonClass={ButtonEnum.navWhite}>Iniciar sesión</Button>
            <Button buttonClass={ButtonEnum.navOrage}>Registrarse</Button>
          </div>
        </nav>
      );
    default:
      return <> </>;
  }
};

export default Navigation;
