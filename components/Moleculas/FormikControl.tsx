import React, { useContext, useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@components/Atomos/Button';
import { ButtonEnum } from 'types/Enums';
import { GlobalFormContext } from 'context/formContext';
import { FormInputs, FormResponse } from 'types/Interfaces';
import LoaderComp from '@components/Atomos/Loader';
import { getCsrfToken, getSession } from 'next-auth/client';
import TextInputs from '@components/Atomos/Inputs/TextInputs';
import FileInput from '@components/Atomos/Inputs/FileInput';
import SelectInput from '@components/Atomos/Inputs/SelectInput';
import CustomInput from '@components/Atomos/Inputs/CustomInput';

interface FormikControlProps {
  auth: boolean;
  builder: Array<any>;
  onSubmit: (formData: any, token?: any) => Promise<FormResponse>;
  validationSchema: any;
  initialValues: Partial<any>;
  button?: JSX.Element;
  formClass?: string;
  buttonProp?: boolean;
}

const FormikControl = ({
  auth,
  builder,
  onSubmit,
  validationSchema,
  initialValues,
  button,
  formClass,
  buttonProp = true,
}: FormikControlProps) => {
  const { toogleSendingState, toogleSuccessState, state } = useContext(GlobalFormContext);

  const [formDelivery, setFormDelivery] = useState<any>(false);
  const [userSession, setUserSession] = useState<any>('');
  const [authToken, setAuthToken] = useState<any>('');

  useEffect(() => {
    const getToken = async () => {
      const session = await getSession();
      console.log(session);
      setAuthToken(await getSession());
    };
    if (auth) {
      getToken();
    }
  }, [auth]);

  useEffect(() => {
    if (state.success) {
      setFormDelivery(true);
    }
  }, [state]);

  useEffect(() => {
    console.log(authToken);
  }, [authToken]);

  const startFormSend = async (props: any) => {
    toogleSendingState();

    setTimeout(async () => {
      const formResponse = await onSubmit(props, authToken.accessToken);

      if (formResponse.finish) {
        toogleSendingState();
        toogleSuccessState();
      }
    }, 4000);
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
            {state.sending ? <LoaderComp /> : null}
            <div className={formClass ? formClass : 'formikForm'}>
              {builder.map((el, index: number) => {
                if (el.as === 'select') {
                  return <SelectInput key={index} inputProps={el} />;
                }
                if (el.as === 'file') {
                  return <FileInput key={index} inputProps={el} setFieldValue={setFieldValue} />;
                }
                if (el.as === 'custom') {
                  return <CustomInput key={index} inputProps={el} />;
                }
                return <TextInputs key={index} inputProps={el} />;
              })}
            </div>
            {button ? (
              button
            ) : buttonProp ? (
              <Button disabledRef={state.sending} buttonClass={ButtonEnum.navOrage}>
                Enviar
              </Button>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikControl;
