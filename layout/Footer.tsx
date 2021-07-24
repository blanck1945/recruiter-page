import React from 'react';
import styles from './Footer.module.scss';
import RecruitersLogo from '@components/Atomos/RecruitersLogo';
import social from '../data/socialLinks';
import { SocialLinkInterface } from 'types/Interfaces';
import SocialLinks from '@components/Atomos/SocialLinks';
import { RiSendPlaneFill } from 'react-icons/ri';
import FormikControl from '@components/Moleculas/FormikControl';
import { NewsletterForm } from 'forms/NewsletterForm';
import useWindowSize from 'hooks/useWindowWidth';

const Footer = () => {
  const windowWidth = useWindowSize();

  const socialLinks = social.map((socialLink: SocialLinkInterface) => {
    return <SocialLinks style="white" socialLink={socialLink} />;
  });

  return (
    <footer className={styles.footer}>
      <RecruitersLogo style="white" />
      {windowWidth.width > 880 ? <div>{socialLinks}</div> : null}
      <div>
        <FormikControl {...NewsletterForm} />
      </div>
      {windowWidth.width < 880 ? <div>{socialLinks}</div> : null}
    </footer>
  );
};

export default Footer;
