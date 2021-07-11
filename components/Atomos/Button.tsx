import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import { AppRouter } from 'types/Enums';

interface ButtonProps {
  buttonClass: string;
  children: string;
  type?: string;
  path?: string;
  disabledRef?: boolean;
  click?: any;
}

const Button = ({ buttonClass, children, type, path, disabledRef, click }: ButtonProps) => {
  if (type === 'auth') {
    return (
      <a href={path} className={styles[buttonClass]}>
        {children}
      </a>
    );
  }

  if (type === 'customAnchor') {
    return (
      <Link href={path ? path : AppRouter.pathHome}>
        <a className={buttonClass}>{children}</a>
      </Link>
    );
  }

  if (type === 'anchor') {
    return (
      <Link href={path ? path : AppRouter.pathHome}>
        <a className={styles[buttonClass]}>{children}</a>
      </Link>
    );
  }

  if (type === 'next-auth') {
    return (
      <button
        onClick={() => click('auth0')}
        disabled={disabledRef}
        type="submit"
        className={styles[buttonClass]}
      >
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabledRef} type="submit" className={styles[buttonClass]}>
      {children}
    </button>
  );
};

export default Button;
