import React from 'react';
import { ButtonTypes } from 'types/ButtonTypes';
import styles from './Button.module.scss';

interface ButtonProps {
  buttonClass: string;
  children: string;
}

const Button = ({ buttonClass, children }: ButtonProps) => {
  return <button className={styles[buttonClass]}>{children}</button>;
};

export default Button;
