import { AppApiEndPoints, BusinessFormFields, ButtonEnum, WorkTypeEnums } from 'types/Enums';
import { BusinessFormRango, BusinessFormRubro } from 'types/forms/enums';
import { FormResponse } from 'types/Interfaces';
import { axiosSender } from 'utils/axios';
import * as yup from 'yup';
import {
  minIntegerValidation,
  notOneOfValidation,
  oneOfValidation,
  requiredValidation,
} from './FormMessages';
import { formatResponseMsg } from './uitls';

export interface CreateBusinessFormInterface {
  nombre: string;
  cuit: string;
  rubro: BusinessFormRubro;
  rangoEmpleados: BusinessFormRango;
  mailsDeContacto: string;
  tipoDeEmpresa: 'Elija una Opción';
  modalidadDeTrabajo: 'Elija una Opción';
  paises: 'Elija una Opción';
}

const setWorkType = (value: string) => {
  switch (value) {
    case 'Presencial':
      return WorkTypeEnums.presencial;
    case 'Mixto':
      return WorkTypeEnums.mixto;
    default:
      return WorkTypeEnums.distancia;
  }
};

// Opciones para los imputs Select y los Schemas de la API.
const rubrosEmpresaOptions = [
  BusinessFormRubro.tecnologia,
  BusinessFormRubro.petroleo,
  BusinessFormRubro.consultoria,
];
const rangoDeEmpleadosOptions = [
  BusinessFormRango.n1n10,
  BusinessFormRango.n11n50,
  BusinessFormRango.n51n200,
  BusinessFormRango.n201n500,
  BusinessFormRango.mas500,
];
const tipoDeEmpresaOptions = ['Startup', 'PyME'];
const modalidadDeTrabajo = ['Home', 'Presencial', 'Mixto'];
const paisesEmpresa = ['Argentina', 'Uruguay', 'Paraguay', 'EEUU'];

// Valores no asignables a las opciones del formulario
const noValidaOptions = ['Elija una Opción'];

// Validación en el Front-end con Yup.
export const CreateBusinessValidationSchema = yup.object().shape({
  nombreReference: yup.string().required().trim().lowercase(),
  nombre: yup.string().required(requiredValidation(BusinessFormFields.nombre)).trim().lowercase(),
  cuit: yup
    .string()
    .required(requiredValidation(BusinessFormFields.cuit))
    .trim()
    .min(6, minIntegerValidation(BusinessFormFields.cuit, 6)),
  rubro: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.rubro))
    .not(noValidaOptions, notOneOfValidation())
    .oneOf(rubrosEmpresaOptions, oneOfValidation(BusinessFormFields.rubro)),
  rangoEmpleados: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.rango))
    .not(noValidaOptions, notOneOfValidation())
    .oneOf(rangoDeEmpleadosOptions, oneOfValidation(BusinessFormFields.rango)),
  mailsDeContacto: yup.string().required(requiredValidation(BusinessFormFields.email)).email(),
  tipoDeEmpresa: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.tipoDeEmpresa))
    .not(noValidaOptions, notOneOfValidation())
    .oneOf(tipoDeEmpresaOptions, oneOfValidation(BusinessFormFields.tipoDeEmpresa)),
  modalidadDeTrabajo: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.modalidad))
    .not(noValidaOptions, notOneOfValidation())
    .oneOf(modalidadDeTrabajo, oneOfValidation(BusinessFormFields.modalidad)),
  paises: yup
    .mixed()
    .required(requiredValidation(BusinessFormFields.pais))
    .not(noValidaOptions, notOneOfValidation())
    .oneOf(paisesEmpresa, oneOfValidation(BusinessFormFields.pais)),
});

export const CreateBusinessForm = {
  auth: false,
  buttonProp: false,
  initialValues: {
    nombreReference: '',
    nombre: '',
    cuit: '',
    rubro: 'Elija una Opción',
    rangoEmpleados: 'Elija una Opción',
    mailsDeContacto: '',
    tipoDeEmpresa: 'Elija una Opción',
    modalidadDeTrabajo: 'Elija una Opción',
    paises: 'Elija una Opción',
  },
  builder: [
    {
      placeholder: 'Nombre del Referente',
      name: 'nombreReferente',
      className: 'formInputs',
    },
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
    {
      as: 'button',
      className: ButtonEnum.navOrage,
    },
  ],
  validationSchema: CreateBusinessValidationSchema,
  onSubmit: async (props: any): Promise<FormResponse> => {
    try {
      let dataToSend = {
        ...props,
      };
      // Función para cambiar la modalidad de trabajo al Enum necesario en la API
      dataToSend.modalidadDeTrabajo = setWorkType(props.modalidadDeTrabajo);

      // El mail de contacto es del tipo array, para testear se arregla el mail antes de mandar.
      dataToSend.mailsDeContacto = [props.mailsDeContacto];
      //await axiosSender(AppApiEndPoints.createBusiness, props);
      return formatResponseMsg(201);
    } catch (err) {
      return formatResponseMsg(400);
    }
  },
};
