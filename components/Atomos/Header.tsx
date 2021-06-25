import React from 'react';
import { RocketDataInterface } from 'types/Interfaces';

interface HeaderProps {
  data: RocketDataInterface;
}

const Header = ({ data }: HeaderProps) => {
  const { header: MainHeader, subHeader: SubHeader } = data;

  return (
    <>
      <MainHeader />
      <SubHeader />
    </>
  );
};

export default Header;
