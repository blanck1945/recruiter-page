import DescriptionPara from '@components/Atomos/EmpleoTemplate/DescriptionPara';
import React from 'react';
import { EmpleoTemplateParagraph } from 'types/Enums';
import styles from './EmpleoBody.module.scss';

interface EmpleoBannerProps {
  descripcion: string;
  tareas: string;
  requerimientos: string;
}

const EmpleoBody = ({ descripcion, tareas, requerimientos }: EmpleoBannerProps) => {
  const techs = ['Figma', 'Ilustrator', 'HTML', 'JavaScrtipt'];

  return (
    <div className={styles.container}>
      <div>
        <DescriptionPara header={EmpleoTemplateParagraph.descripcion} desc={descripcion} />
      </div>
      <div>
        <DescriptionPara header={EmpleoTemplateParagraph.responsabilidades} desc={tareas} />
      </div>
      <div>
        <DescriptionPara header={EmpleoTemplateParagraph.requisitos} desc={requerimientos} />
      </div>
    </div>
  );
};

export default EmpleoBody;
