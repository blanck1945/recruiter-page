import React, { useContext } from 'react';
import styles from './Navigation.module.scss';
import social from '../data/socialLinks';
import Link from 'next/link';
import RecruitersLogo from '@components/Atomos/RecruitersLogo';
import { AppRouter, ButtonEnum, LayoutValueEnum } from 'types/Enums';
import Button from '@components/Atomos/Button';
import SocialLinks from '@components/Atomos/SocialLinks';
import { ButtonsInterface, SocialLinkInterface } from 'types/Interfaces';
import router from 'data/router';
import { UserContext } from '@auth0/nextjs-auth0';

interface NavigationProps {
  value: LayoutValueEnum;
}

const Navigation = ({ value }: NavigationProps) => {
  const socialLinks = social.map((socialLink: SocialLinkInterface) => {
    return <SocialLinks socialLink={socialLink} />;
  });

  const buttonsLinks = router.buttons.map((btn: ButtonsInterface, index: number) => {
    return <Button {...btn}>{btn.content}</Button>;
  });

  switch (value) {
    case LayoutValueEnum.empresa:
      return (
        <nav className={styles.navigation}>
          <div className={styles.navigationConvert}>
            <Link href={AppRouter.pathRecruiter}>Convertite en Recruiter</Link>
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
          <div>{buttonsLinks}</div>
        </nav>
      );
    default:
      return <> </>;
  }
};

export default Navigation;
