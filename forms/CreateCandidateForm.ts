import { AppApiEndPoints, ButtonEnum, WorkTimeEnums } from 'types/Enums';
import { axiosSender } from 'utils/axios';
import * as yup from 'yup';
import { createFormData, formatResponseMsg } from './uitls';

const setDisponibilidadLaboral = (value: string) => {
  switch (value) {
    case 'Full-Time':
      return WorkTimeEnums.full;
    case 'Part-Time':
      return WorkTimeEnums.part;
    default:
      return WorkTimeEnums.hour;
  }
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
  auth: true,
  buttonProp: false,
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
    {
      as: 'button',
      className: ButtonEnum.navOrage,
    },
  ],
  validationSchema: CreateCandidateValidationSchema,
  onSubmit: async (props: any, token: string) => {
    try {
      props.disponibilidadLaboral = setDisponibilidadLaboral(props.disponibilidadLaboral);
      let formData = props;
      if (props.file) {
        formData = createFormData(props);
      }
      const response = await axiosSender(AppApiEndPoints.createCandidate, formData, token);
      //console.log(response);
      return formatResponseMsg(201);
    } catch (err) {
      return formatResponseMsg(400);
    }
  },
};
