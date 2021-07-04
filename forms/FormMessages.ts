export const requiredValidation = (value: string) => {
  return 'El campo ' + value + ' es requerido';
};

export const oneOfValidation = (value?: string) => {
  return 'Elija una opción del campo ' + value;
};

export const minIntegerValidation = (value: string, num: number) => {
  return 'El ' + value + ' require como minimo ' + num + ' caracteres';
};
