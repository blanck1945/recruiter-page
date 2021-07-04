import * as yup from 'yup';

export const LoginValidationSchema = yup.object().shape({
  nombre: yup.string().required().trim().lowercase(),
});

export const LoginForm = {
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
  validationSchema: '',
  onSubmit: (props: any) => {
    console.log(props);
  },
};
