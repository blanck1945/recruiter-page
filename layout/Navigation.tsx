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
import { signIn, signOut, useSession } from 'next-auth/client';
import useWindowSize from 'hooks/useWindowWidth';
import { GiHamburgerMenu } from 'react-icons/gi';

interface NavigationProps {
  value: LayoutValueEnum;
}

const Navigation = ({ value }: NavigationProps) => {
  const windowWidth = useWindowSize();
  const session = useSession();
  const username = session[0] && session[0].user?.name;
  console.log(session);
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
            <Link href={'/form/recruiter'}>Convertite en Recruiter</Link>
          </div>
          <RecruitersLogo link />
          {windowWidth.width > 1024 ? (
            <div className={styles.socialLinks}>{socialLinks}</div>
          ) : null}
        </nav>
      );
    case LayoutValueEnum.recruiter:
      return (
        <nav className={styles.recruiterNavigation}>
          {windowWidth.width > 880 ? <div>{socialLinks}</div> : null}
          <Link href="/">
            <RecruitersLogo link />
          </Link>
          {windowWidth.width > 880 ? (
            session[0] && session[0].user?.name ? (
              <div className={styles.logBox}>
                <Link href={`/home/profile/${username}`}>
                  <p>{username} </p>
                </Link>
                {'/'}
                <p onClick={() => signOut()}>Cerrar Sesión</p>
              </div>
            ) : (
              <div className={styles.linkBox}>{buttonsLinks}</div>
            )
          ) : (
            <GiHamburgerMenu />
          )}
        </nav>
      );
    default:
      return <> </>;
  }
};

export default Navigation;
