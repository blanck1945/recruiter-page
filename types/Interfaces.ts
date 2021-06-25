import { RowsEnums } from './Enums';
import { IconType } from 'react-icons';

export interface ServicesInterface {
  logo: IconType;
  header: string;
  desc: string;
  row: RowsEnums;
  index?: number;
}

export interface RocketDataInterface {
  header: () => JSX.Element;
  subHeader: () => JSX.Element;
}
