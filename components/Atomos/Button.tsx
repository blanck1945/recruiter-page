import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import { AppRouter } from 'types/Enums';

interface ButtonProps {
  buttonClass: string;
  children: string;
  type?: string;
  path?: string;
}

const Button = ({ buttonClass, children, type, path }: ButtonProps) => {
  if (type === 'auth') {
    return (
      <a href={path} className={styles[buttonClass]}>
        {children}
      </a>
    );
  }

  if (type === 'anchor') {
    return (
      <Link href={path ? path : AppRouter.pathHome}>
        <a className={styles[buttonClass]}>{children}</a>
      </Link>
    );
  }

  return (
    <button type="submit" className={styles[buttonClass]}>
      {children}
    </button>
  );
};

export default Button;
