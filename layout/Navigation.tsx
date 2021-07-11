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
import { signIn, signOut } from 'next-auth/client';
import useWindowSize from 'hooks/useWindowWidth';
import { GiHamburgerMenu } from 'react-icons/gi';

interface NavigationProps {
  value: LayoutValueEnum;
}

const Navigation = ({ value }: NavigationProps) => {
  const windowWidth = useWindowSize();

  const socialLinks = social.map((socialLink: SocialLinkInterface) => {
    return <SocialLinks socialLink={socialLink} />;
  });

  const buttonsLinks = router.buttons.map((btn: ButtonsInterface, index: number) => {
    if (btn.name === 'login') {
      return (
        <Button click={signIn} {...btn}>
          {btn.content}
        </Button>
      );
    }

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
          {windowWidth.width > 880 ? <div>{socialLinks}</div> : null}
          <RecruitersLogo />
          {windowWidth.width > 880 ? <div>{buttonsLinks}</div> : <GiHamburgerMenu />}
        </nav>
      );
    default:
      return <> </>;
  }
};

export default Navigation;
