import React from 'react';

interface DescriptionParaProps {
  header: string;
  desc: string;
}

const DescriptionPara = ({ header, desc }: DescriptionParaProps) => {
  return (
    <div>
      <h3>{header}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default DescriptionPara;
