export const HomePageData = {
  text: {
    header: () => {
      return (
        <h2 className="header">
          Escalá tu negocio
          <br /> con nuestra red
        </h2>
      );
    },
    subHeader: () => {
      return (
        <p className="subHeader">
          Brindamos servicios de reclutamiento
          <br /> con un foco muy fuerte en las
          <br /> relaciones humanas de calidad.
        </p>
      );
    },
  },
  buttons: [
    {
      type: 'anchor',
      path: '/home/empresa',
      buttonClass: 'homeWhite',
      content: 'Empresa',
    },
    {
      type: 'anchor',
      path: '/home/recruiter',
      buttonClass: 'homeOrange',
      content: 'Recruiter',
    },
    {
      type: 'anchor',
      path: '/home/empleos',
      buttonClass: 'homeBlue',
      content: ' Empleos',
    },
  ],
};
