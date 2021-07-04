import React, { useState, createContext, Component } from 'react';

interface FormProviderProps {
  formState?: ContextProps;
  setFormState?: React.SetStateAction<React.Dispatch<any>>;
  sending: any;
  error: any;
  succes: any;
  state?: any;
  toogleSendingState: any;
  toogleSuccessState: any;
}

interface ContextProps {
  sending: boolean;
  error: boolean;
  succes: boolean;
}

const initialState = {
  sending: {
    sendingState: false,
  },
  error: {
    errorState: false,
  },
  success: {},
};

export const GlobalFormContext = React.createContext<Partial<FormProviderProps>>({});

interface formContextProps {
  children: JSX.Element | JSX.Element[];
}

const FormProvider = ({ children }: formContextProps) => {
  const [state, setState] = useState<any>({
    sending: false,
    succes: false,
    error: false,
  });

  const toogleSendingState = () => {
    setState({
      sending: !state.sending,
    });
  };

  const toogleSuccessState = () => {
    setState({
      success: !state.succes,
    });
  };

  return (
    <GlobalFormContext.Provider value={{ state, toogleSendingState, toogleSuccessState }}>
      {children}
    </GlobalFormContext.Provider>
  );
};

export default FormProvider;
