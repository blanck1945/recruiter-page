import Meta from '@components/utils/Meta';
import React from 'react';
import { LayoutValueEnum } from 'types/Enums';
import Footer from './Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  value: LayoutValueEnum;
}

const Layout = ({ children, value }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Navigation value={value} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
