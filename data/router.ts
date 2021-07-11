import { AppRouter, ButtonEnum } from 'types/Enums';

export default {
  buttons: [
    {
      link: 'Log in',
      name: 'login',
      path: AppRouter.pathLogin,
      onNavigation: true,
      type: 'next-auth',
      content: 'Iniciar Sesión',
      buttonClass: ButtonEnum.navWhite,
    },
    {
      link: 'Sign in',
      name: 'signin',
      path: AppRouter.pathSignUp,
      onNavigation: true,
      type: 'anchor',
      content: 'Registrarse',
      buttonClass: ButtonEnum.navOrage,
    },
  ],
};
