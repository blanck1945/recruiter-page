import * as yup from 'yup';

export const SignInValidationSchema = yup.object().shape({
  nombre: yup.string().required().trim().lowercase(),
  apellido: yup.string().required().trim().lowercase(),
  email: yup.string().required().trim().email(),
  pais: yup.string().required().trim().lowercase(),
  linkedin: yup.string().trim().url(),
  dni: yup.number().integer().positive().min(6),
});

export const SignInForm = {
  initialValues: {
    nombre: '',
    apellido: '',
    email: '',
    pais: '',
    linkedin: '',
    dni: '',
  },
  builder: [
    {
      placeholder: 'Nombre',
      name: 'nombre',
      className: 'formInputs',
    },
    {
      placeholder: 'Apellido',
      name: 'apellido',
      className: 'formInputs',
    },
    {
      placeholder: 'Email',
      name: 'email',
      type: 'email',
      className: 'formInputs',
    },
    {
      placeholder: 'País de residencia',
      name: 'pais',
      className: 'formInputs',
    },
    {
      placeholder: 'Perfil de LinkedIn',
      name: 'linkedin',
      className: 'formInputs',
    },
    {
      placeholder: 'DNI/ID',
      name: 'dni',
      className: 'formInputs',
    },
  ],
  validationSchema: SignInValidationSchema,
  onSubmit: (props: any) => {
    console.log(props);
  },
};
