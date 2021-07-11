import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoImageProps {
  link?: boolean;
}

const LogoImage = ({ link }: LogoImageProps) => {
  return (
    <Link href={link ? '/' : ''}>
      <Image className="logo" src="/re-logo.png" alt="re-logo" height={86} width={70} priority />
    </Link>
  );
};

export default LogoImage;
