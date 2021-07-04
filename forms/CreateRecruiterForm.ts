import { AppApiEndPoints } from 'types/Enums';
import { axiosSender } from 'utils/axios';
import * as yup from 'yup';
import { createFormData } from './uitls';

const setDisponibilidadLaboral = () => {
  "FULL_TIME', 'PART_TIME', 'POR_HORA";
};

const disponibilidadLaboralOptions = ['Full-Time', 'Part-Time', 'Por Hora'];

export const CreateCandidateValidationSchema = yup.object().shape({
  nombre: yup.string().required().trim().lowercase(),
  dni: yup.number().integer().positive().min(5, 'Dni require como minimo 5 numeros'),
  cv: yup.mixed(),
  fechaDeNacimiento: yup.string().required(),
  email: yup.string().required().trim().email(),
  linkedin: yup.string().trim().url(),
  ocupacionActual: yup.string().required().trim().lowercase(),
  linkRepositorioPersonal: yup.string().url(),
  disponibilidadLaboral: yup.mixed().oneOf(disponibilidadLaboralOptions),
});

export const CreateCandidate = {
  initialValues: {
    nombre: '',
    dni: '',
    cv: '',
    fechaDeNacimiento: '',
    email: '',
    linkedin: '',
    ocupacionActual: '',
    linkRepositorioPersonal: '',
    disponibilidadLaboral: '',
  },
  builder: [
    {
      placeholder: 'Nombre',
      name: 'nombre',
      className: 'formInputs',
    },
    {
      placeholder: 'DNI',
      name: 'dni',
      className: 'formInputs',
    },
    {
      placeholder: 'CV',
      name: 'cv',
      as: 'file',
      className: 'formInputs',
    },
    {
      placeholder: 'Fecha de Nacimiento',
      name: 'fechaDeNacimiento',
      className: 'formInputs',
    },
    {
      placeholder: 'Email',
      type: 'email',
      name: 'email',
      className: 'formInputs',
    },
    {
      placeholder: 'Perfil de LinkedIn',
      name: 'linkedin',
      className: 'formInputs',
    },
    {
      placeholder: 'Ocupación Actual',
      name: 'ocupacionActual',
      className: 'formInputs',
    },
    {
      placeholder: 'Disponibilidad Laboral',
      name: 'disponibilidadLaboral',
      as: 'select',
      options: ['Elija una Opción', ...disponibilidadLaboralOptions],
      className: 'formInputsSelect',
    },
  ],
  validationSchema: CreateCandidateValidationSchema,
  onSubmit: async (props: any) => {
    try {
      let formData = props;
      if (props.file) {
        const formData = createFormData(props);
      }

      await axiosSender(AppApiEndPoints.createCandidate, formData);
    } catch (err) {
      console.log(err);
    }
  },
};
