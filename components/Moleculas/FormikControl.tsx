import React, { useContext, useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@components/Atomos/Button';
import { ButtonEnum } from 'types/Enums';
import { FaArrowCircleDown } from 'react-icons/fa';
import { GlobalFormContext } from 'context/formContext';
import { FormResponse } from 'types/Interfaces';

interface FormikControlProps {
  builder: Array<any>;
  onSubmit: (formData: any) => Promise<FormResponse>;
  validationSchema: any;
  initialValues: Partial<any>;
  button?: JSX.Element;
}

const FormikControl = ({
  builder,
  onSubmit,
  validationSchema,
  initialValues,
  button,
}: FormikControlProps) => {
  const { toogleSendingState, toogleSuccessState, state } = useContext(GlobalFormContext);

  const [formDelivery, setFormDelivery] = useState<any>(false);

  useEffect(() => {
    if (state.success) {
      setFormDelivery(true);
    }
  }, [state]);

  const changeState = () => {
    toogleSendingState();
  };

  const startFormSend = async (props: any) => {
    toogleSendingState();

    const formResponse = await onSubmit(props);

    if (formResponse.finish) {
      toogleSendingState();
      toogleSuccessState();
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(props) => startFormSend(props)}
      validationSchema={validationSchema}
    >
      {({ setFieldValue }) => {
        return (
          <Form>
            {formDelivery ? <h1>Formulario enviado</h1> : null}
            <div className="formikForm">
              {builder.map((el: any) => {
                if (el.as === 'select') {
                  return (
                    <div className="formDiv">
                      <Field {...el}>
                        {el.options.map((opt: string) => {
                          return <option value={opt}>{opt}</option>;
                        })}
                      </Field>
                      <ErrorMessage name={el.name}>
                        {(msg) => <span className="errorMsg">{msg}</span>}
                      </ErrorMessage>
                    </div>
                  );
                }
                if (el.as === 'file') {
                  return (
                    <div className="formDiv">
                      <input
                        type="file"
                        {...el}
                        onChange={(event: any) => {
                          setFieldValue('file', event.currentTarget.files[0]);
                        }}
                      />
                      <ErrorMessage name={el.name}>
                        {(msg) => <span className="errorMsg">{msg}</span>}
                      </ErrorMessage>
                    </div>
                  );
                }
                return (
                  <div className="formDiv">
                    <Field {...el} />
                    <ErrorMessage name={el.name}>
                      {(msg) => <span className="errorMsg">{msg}</span>}
                    </ErrorMessage>
                  </div>
                );
              })}
            </div>
            {button ? button : <Button buttonClass={ButtonEnum.navOrage}>Enviar</Button>}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikControl;
