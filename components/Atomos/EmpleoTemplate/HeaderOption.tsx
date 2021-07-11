import React from 'react';
import styles from './HeaderOption.module.scss';

interface HeaderOptionProps {
  option: string;
  data: string;
}

const HeaderOption = ({ option, data }: HeaderOptionProps) => {
  return (
    <div className={styles.container}>
      <p>
        <span>{option}</span>
        {data}
      </p>
    </div>
  );
};

export default HeaderOption;
