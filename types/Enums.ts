export enum RowsEnums {
  one = 'one',
  two = 'two',
  three = 'three',
}

export enum BusinessFormFields {
  nombre = 'Nombre',
  cuit = 'Cuit',
  rubro = 'Rubro',
  rango = 'Rango',
  tipoDeEmpresa = 'Tipo de Empresa',
  email = 'Email',
  modalidad = 'Modalidad',
  pais = 'Pais',
}

export enum WorkTypeEnums {
  distancia = 'A_DISTANCIA',
  mixto = 'MIXTO',
  presencial = 'PRESENCIAL',
}

export enum WorkTimeEnums {
  full = 'FULL_TIME',
  part = 'PART_TIME',
  hour = 'POR_HORA',
}

export enum LayoutValueEnum {
  empresa = 'empresa',
  recruiter = 'recruiter',
  empleo = 'empleo',
}

export enum ButtonEnum {
  navWhite = 'nav-white',
  navOrage = 'nav-orange',
  sumate = 'sumate',
}

export enum AppApiEndPoints {
  createBusiness = 'https://api.recruiters-freelance.scala.ly/api/v1/business',
  createCandidate = 'https://api.recruiters-freelance.scala.ly/api/v1/candidates',
  createRecruiter = '',
}

export enum AppRouter {
  pathSignUp = '/api/auth/signup',
  pathLogin = '/api/auth/login',
  pathLogout = '/api/auth/logout',
  pathMe = '/api/auth/me',
  pathEmpresa = '/home/empresa',
  pathRecruiter = '/home/recruiter',
  pathSignInForm = '/form/empresa',
  pathLoginForm = '/form/recruiter',
  dashboard = '/dasboard/*',
  pathHome = '/',
}
