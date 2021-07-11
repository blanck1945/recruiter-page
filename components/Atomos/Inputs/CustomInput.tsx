import { ErrorMessage } from 'formik';
import React from 'react';
import { FormInputs } from 'types/Interfaces';

interface CustomInputProps {
  inputProps: FormInputs;
}

const CustomInput = ({ inputProps }: CustomInputProps) => {
  const { custom: Custom } = inputProps;

  return <Custom {...inputProps} />;
};

export default CustomInput;
