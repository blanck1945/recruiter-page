import React from 'react';
import Link from 'next/link';
import { TextUpDiv, LinkButton, BannerTextDiv } from './BannerTextStyles';
import LogoImage from './LogoImage';

interface BannerTextProps {
  para: () => JSX.Element;
  buttonContent: string;
  link: string;
}

const BannerText = ({ para: Para, buttonContent, link }: BannerTextProps) => {
  return (
    <BannerTextDiv>
      <LogoImage link />
      <TextUpDiv>
        <h2>Escalá tu negocio</h2>
        <h2>con nuestra red</h2>
      </TextUpDiv>
      <Para />
      <Link href={link}>
        <LinkButton>{buttonContent}</LinkButton>
      </Link>
    </BannerTextDiv>
  );
};

export default BannerText;
