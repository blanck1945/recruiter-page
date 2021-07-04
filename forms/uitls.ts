import { AppApiEndPoints } from 'types/Enums';
import { FormResponse } from 'types/Interfaces';
import { axiosSender } from 'utils/axios';

export const createFormData = (props: any) => {
  var formData = new FormData();

  formData.append('cv', props.file);
  formData.append('nombre', props.nombre);
  formData.append('dni', props.dni);
  formData.append('fechaDeNacimiento', props.fechaDeNacimiento);
  formData.append('email', props.email);
  formData.append('linkedin', props.linkedin);
  formData.append('ocupacionActual', props.ocupacionActual);
  formData.append('linkRepositorioPersonal', props.linkRepositorioPersonal);
  formData.append('disponibilidadLaboral', props.disponibilidadLaboral);

  return formData;
};

export const formatResponseMsg = (code: number, data?: any): FormResponse => {
  if (code <= 400) {
    return {
      msg: 'El Formulario tuvo una falla',
      code,
      data,
      state: 'FAILURE',
      finish: true,
    };
  }
  if (code <= 200 && code > 300) {
    return {
      msg: 'El formulario se envio con exito',
      code,
      data,
      state: 'SUCCESS',
      finish: true,
    };
  }

  return {
    msg: 'Generic',
    code,
    data,
    state: 'UNDEFINED',
    finish: true,
  };
};
