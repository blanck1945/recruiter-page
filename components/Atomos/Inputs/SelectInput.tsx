import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { FormInputs } from 'types/Interfaces';

interface SelectInputProps {
  inputProps: FormInputs;
}

const SelectInput = ({ inputProps }: SelectInputProps) => {
  return (
    <div className={inputProps.divClass ? inputProps.divClass : 'formDiv'}>
      <Field {...inputProps}>
        {inputProps.options &&
          inputProps.options.map((opt: string) => {
            return <option value={opt}>{opt}</option>;
          })}
      </Field>
      <ErrorMessage name={inputProps.name}>
        {(msg) => (
          <span className={inputProps.errorClass ? inputProps.errorClass : 'errorMsg'}>{msg}</span>
        )}
      </ErrorMessage>
    </div>
  );
};

export default SelectInput;
