import React from 'react';
import Link from 'next/link';
import { SocialLinkInterface } from 'types/Interfaces';

interface SocialLinksProps {
  socialLink: SocialLinkInterface;
  style?: string;
}

const SocialLinks = ({ socialLink, style }: SocialLinksProps) => {
  const { link, logo: Logo } = socialLink;

  return (
    <a href={link} target="_blank" className={style === 'white' ? 'socialLinkWhite' : 'socialLink'}>
      <Logo />
    </a>
  );
};

export default SocialLinks;
