import React from 'react';
import styles from './Footer.module.scss';
import RecruitersLogo from '@components/Atomos/RecruitersLogo';
import social from '../data/socialLinks';
import { SocialLinkInterface } from 'types/Interfaces';
import SocialLinks from '@components/Atomos/SocialLinks';
import { RiSendPlaneFill } from 'react-icons/ri';

const Footer = () => {
  const socialLinks = social.map((socialLink: SocialLinkInterface) => {
    return <SocialLinks style="white" socialLink={socialLink} />;
  });

  return (
    <footer className={styles.footer}>
      <RecruitersLogo style="white" />
      <div>{socialLinks}</div>
      <div>
        <input type="text" placeholder="Suscribite al Newsletter" />
        <RiSendPlaneFill />
      </div>
    </footer>
  );
};

export default Footer;
