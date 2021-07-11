import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { FormInputs } from 'types/Interfaces';

interface TextInputsProps {
  inputProps: FormInputs;
}

const TextInputs = ({ inputProps }: TextInputsProps) => {
  if (inputProps.comp) {
    const InputProp = inputProps.inputProp;
    return (
      <>
        <div className={inputProps.divClass ? inputProps.divClass : 'formDiv'}>
          <Field {...inputProps} />
          <InputProp />
        </div>
        <ErrorMessage name={inputProps.name}>
          {(msg) => (
            <span className={inputProps.errorClass ? inputProps.errorClass : 'errorMsg'}>
              {msg}
            </span>
          )}
        </ErrorMessage>
      </>
    );
  }
  return (
    <div className={inputProps.divClass ? inputProps.divClass : 'formDiv'}>
      <Field {...inputProps} />
      <ErrorMessage name={inputProps.name}>
        {(msg) => (
          <span className={inputProps.errorClass ? inputProps.errorClass : 'errorMsg'}>{msg}</span>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextInputs;
