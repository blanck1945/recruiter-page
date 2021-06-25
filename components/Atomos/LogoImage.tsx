import React from 'react';
import Image from 'next/image';

const LogoImage = () => {
  return (
    <Image className="logo" src="/re-logo.png" alt="re-logo" height={101} width={76} priority />
  );
};

export default LogoImage;
