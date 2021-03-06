import { ButtonEnum, RowsEnums } from './Enums';
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

export interface SocialLinkInterface {
  link: string;
  name: string;
  logo: IconType;
}

export interface ButtonsInterface {
  link: string;
  name: string;
  path: string;
  onNavigation: boolean;
  content: string;
  type?: string;
  buttonClass: ButtonEnum;
}

export interface FormResponse {
  msg: string;
  code: number;
  data: any;
  state: string;
  finish: boolean;
}

export interface FormInputs {
  comp?: string;
  type?: string;
  for?: string;
  name: string;
  divClass: string;
  errorClass?: string;
  inputProp: any;
  placeholder?: string;
  as?: string;
  labelClass?: string;
  options?: string[];
  className?: string;
  custom?: any;
}
