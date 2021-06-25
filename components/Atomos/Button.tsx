import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

interface ButtonProps {
  buttonClass: string;
  children: string;
  type?: string;
  path?: string;
}

const Button = ({ buttonClass, children, type, path }: ButtonProps) => {
  if (type === 'anchor') {
    return (
      <Link href={path ? path : '/'}>
        <a className={styles[buttonClass]}>{children}</a>
      </Link>
    );
  }

  return <button className={styles[buttonClass]}>{children}</button>;
};

export default Button;
