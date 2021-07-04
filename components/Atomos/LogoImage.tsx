import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LogoImage = () => {
  return (
    <Link href="/">
      <Image className="logo" src="/re-logo.png" alt="re-logo" height={86} width={70} priority />
    </Link>
  );
};

export default LogoImage;
