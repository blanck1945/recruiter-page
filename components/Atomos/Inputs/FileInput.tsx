import { ErrorMessage } from 'formik';
import React, { useRef } from 'react';
import { FormInputs } from 'types/Interfaces';

interface FileInputProps {
  inputProps: FormInputs;
  setFieldValue: any;
}

const FileInput = ({ inputProps, setFieldValue }: FileInputProps) => {
  const refInput = useRef(null);

  const clickInput = () => {
    const newValue: any = refInput;
    if (refInput) {
      newValue?.current?.click();
    }
  };

  return (
    <div className={inputProps.divClass ? inputProps.divClass : 'formDiv'}>
      <span
        style={{
          backgroundColor: 'white',
          paddingTop: '18px',
          color: 'gray',
        }}
        className="formInputs"
        onClick={() => clickInput()}
      >
        CV
      </span>
      <input
        ref={refInput}
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
