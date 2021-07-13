import React, { useState, createContext, Component } from 'react';

interface JobsProviderProps {
  jobs: any[];
  job: any;
  resultJobs: any;
  dispatchOneJob: any;
  clearSearchJobs: any;
  searchJobs: any;
}

const initialState = {
  jobs: [],
  job: {},
};

export const GlobaljobContext = React.createContext<Partial<JobsProviderProps>>({});

interface jobsContextProps {
  children: JSX.Element | JSX.Element[];
}

const JobsProvider = ({ children }: jobsContextProps) => {
  const [state, setState] = useState<any>({
    jobs: [
      {
        id: 1,
        empresa: 'Fintech',
        puesto: 'Frontend Developer',
        recruiter: '',
        locacion: 'Buenos Aires, Argentina',
        modalidadDeTrabajo: 'Freelance',
        experiencia: '3+Años',
        ubicacion: 'Remoto',
        fechaInicio: 'x,2001',
        industria: 'Bancaria',
        salario: 'a convenir',
        fechafinalizacion: '20 jul, 2021',
        descripcion:
          '(N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
        tareas:
          'Creating Simple And Elegant Flows To Give Our Clients And Users An Easy-To-Use Platform. Solving Challenging Design Problems And Coming Up With Solutions That Make Our Platform More User Friendly And Consistent. Partnering With The Engineering Team To Deliver A Stellar End-User Experience. Making Tweaks To The App Design And Creating Re-Useable Stylesheets For The App. Building Design Processes And Standards Like Style-Guides Within The Organisation. Working Directly With The Founders To Drive Majority Of The Platform Design, User Experience And Company Branding Decisions.',
        requisitos:
          'Minimum of 2 years of UI/UX Design experience. Comfortable in getting your hands hands dirty and making changes in the codebase. Experience with creating mockups in visual editors. Experience with working in ReactJs+Css codebase very desireable. Someone who is a good communicator and can present their ideas well. Team player, should be able to work with different teans. Proven track record for delivering large design projects from inception. A portfolio featuring examples of your design work 9. Bonus: experience working in a startup',
      },
      {
        id: 2,
        empresa: 'Fintech',
        puesto: 'Backend Developer',
        descripcion: '',
        recruiter: '',
        locacion: 'Remoto, Worldwide',
        modalidadDeTrabajo: 'Full Time',
      },
      {
        id: 3,
        empresa: 'Fintech',
        puesto: 'UX/UI Designer',
        descripcion: '',
        recruiter: '',
        locacion: 'Buenos Aires, Argentina',
        modalidadDeTrabajo: 'Part-time',
      },
    ],
    job: {},
    resultJobs: [],
  });

  const dispatchOneJob = (jobId: number) => {
    setState({
      ...state,
      job: jobs.filter((el: any, index: number) => {
        if (el.id === jobId) {
          return el;
        }
      }),
    });
  };

  const searchJobs = (value: string) => {
    setState({
      ...state,
      resultJobs: jobs.filter((el: any, index: number) => {
        const normalizeValue = el.puesto.toLowerCase();
        if (normalizeValue.includes(value)) {
          console.log(el);
          return el;
        }
      }),
    });
  };

  const clearSearchJobs = () => {
    setState({
      ...state,
      resultJobs: [],
    });
  };

  const { job, jobs, resultJobs } = state;

  return (
    <GlobaljobContext.Provider
      value={{ job, jobs, resultJobs, dispatchOneJob, searchJobs, clearSearchJobs }}
    >
      {children}
    </GlobaljobContext.Provider>
  );
};

export default JobsProvider;
