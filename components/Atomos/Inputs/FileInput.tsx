import { ErrorMessage } from 'formik';
import React from 'react';
import { FormInputs } from 'types/Interfaces';

interface FileInputProps {
  inputProps: FormInputs;
  setFieldValue: any;
}

const FileInput = ({ inputProps, setFieldValue }: FileInputProps) => {
  return (
    <div className={inputProps.divClass ? inputProps.divClass : 'formDiv'}>
      <input
        type="file"
        {...inputProps}
        onChange={(event: any) => {
          setFieldValue('file', event.currentTarget.files[0]);
        }}
      />
      <ErrorMessage name={inputProps.name}>
        {(msg) => (
          <span className={inputProps.errorClass ? inputProps.errorClass : 'errorMsg'}>{msg}</span>
        )}
      </ErrorMessage>
    </div>
  );
};

export default FileInput;
