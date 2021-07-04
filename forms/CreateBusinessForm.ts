import { AppApiEndPoints, BusinessFormFields, WorkTypeEnums } from 'types/Enums';
import { FormResponse } from 'types/Interfaces';
import { axiosSender } from 'utils/axios';
import * as yup from 'yup';
import { minIntegerValidation, oneOfValidation, requiredValidation } from './FormMessages';
import { formatResponseMsg } from './uitls';

const setWorkType = (value: string) => {
  switch (value) {
    case 'presencial':
      return WorkTypeEnums.presencial;
    case 'mixto':
      return WorkTypeEnums.mixto;
    default:
      return WorkTypeEnums.distancia;
  }
};

// Opciones para los imputs Select y los Schemas de la API.
const rubrosEmpresaOptions = ['Tecnología', 'Petróleo', 'Consultoría'];
const rangoDeEmpleadosOptions = ['1-10', '11-50', '51-200', '201-500', 'Más de 500'];
const tipoDeEmpresaOptions = ['Startup', 'PyME'];
const modalidadDeTrabajo = ['Home', 'Presencial', 'mixto'];
const paisesEmpresa = ['Argentina', 'Uruguay', 'Paraguay', 'EEUU'];

// Validación en el Front-end con Yup.
export const CreateBusinessValidationSchema = yup.object().shape({
  nombre: yup.string().required(requiredValidation(BusinessFormFields.nombre)).trim().lowercase(),
  cuit: yup
    .string()
    .required(requiredValidation(BusinessFormFields.cuit))
    .trim()
    .min(6, minIntegerValidation(BusinessFormFields.cuit, 6)),
  rubro: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.rubro))
    .oneOf(rubrosEmpresaOptions, oneOfValidation(BusinessFormFields.rubro)),
  rangoEmpleados: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.rango))
    .oneOf(rangoDeEmpleadosOptions, oneOfValidation(BusinessFormFields.rango)),
  mailsDeContacto: yup
    .string()
    .required(requiredValidation(BusinessFormFields.email))
    .trim()
    .email(),
  tipoDeEmpresa: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.tipoDeEmpresa))
    .oneOf(tipoDeEmpresaOptions, oneOfValidation(BusinessFormFields.tipoDeEmpresa)),
  modalidadDeTrabajo: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.modalidad))
    .oneOf(modalidadDeTrabajo, oneOfValidation(BusinessFormFields.modalidad)),
  paises: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.pais))
    .oneOf(paisesEmpresa, oneOfValidation(BusinessFormFields.pais)),
});

export const CreateBusinessForm = {
  initialValues: {
    nombre: '',
    cuit: '',
    rubro: '',
    rangoEmpleados: '',
    mailsDeContacto: '',
    tipoDeEmpresa: '',
    modalidadDeTrabajo: '',
    paises: '',
  },
  builder: [
    {
      placeholder: 'Nombre',
      name: 'nombre',
      className: 'formInputs',
    },
    {
      placeholder: 'CUIT',
      name: 'cuit',
      className: 'formInputs',
    },
    {
      placeholder: 'Rubro',
      name: 'rubro',
      as: 'select',
      options: ['Elija una Opción', ...rubrosEmpresaOptions],
      className: 'formInputsSelect',
    },
    {
      placeholder: 'Rango de Empleados',
      name: 'rangoEmpleados',
      as: 'select',
      options: ['Elija una Opción', ...rangoDeEmpleadosOptions],
      className: 'formInputsSelect',
    },
    {
      placeholder: 'Mail de Contacto',
      name: 'mailsDeContacto',
      className: 'formInputs',
    },
    {
      placeholder: 'Tipo de Empresa',
      name: 'tipoDeEmpresa',
      className: 'formInputsSelect',
      as: 'select',
      options: ['Elija una Opción', ...tipoDeEmpresaOptions],
    },
    {
      placeholder: 'Modalidad de Trabajo',
      name: 'modalidadDeTrabajo',
      className: 'formInputsSelect',
      as: 'select',
      options: ['Elija una Opción', ...modalidadDeTrabajo],
    },
    {
      placeholder: 'País',
      name: 'paises',
      as: 'select',
      options: ['Elija una Opción', ...paisesEmpresa],
      className: 'formInputsSelect',
    },
  ],
  validationSchema: CreateBusinessValidationSchema,
  onSubmit: async (props: any): Promise<FormResponse> => {
    try {
      // Función para cambiar la modalidad de trabajo al Enum necesario en la API
      props.modalidadDeTrabajo = setWorkType(props.modalidadDeTrabajo);

      // El mail de contacto es del tipo array, para testear se arregla el mail antes de mandar.
      props.mailsDeContacto = [props.mailsDeContacto];
      //await axiosSender(AppApiEndPoints.createBusiness, props);
      return formatResponseMsg(201);
    } catch (err) {
      return formatResponseMsg(400);
    }
  },
};
