// Información estatica de las paginas. Se puede volcar en un CMS para acceso y modificación.
export default {
  certificado: {
    header: () => {
      return (
        <h2 className="header">
          Nuestros recruiters cuentan
          <br /> con el profesionalismo y<br /> especialización para alcanzar al
          <br /> candidato ideal que se a<br />
          juste a cada búsqueda específica.
        </h2>
      );
    },
    subHeader: () => {
      return (
        <p className="subHeader">
          Una vez aceptada la propuesta continuaremos
          <br /> brindandote soporte en exámenes o preocupacionales
          <br /> hasta finalizar el proceso completo.
        </p>
      );
    },
  },
};

export const FormPageData = {
  empresa: {
    header: () => {
      return (
        <h2>
          Estás a un paso
          <br /> de agilizar tus procesos
        </h2>
      );
    },
  },
  recruiter: {
    header: () => {
      return (
        <h2>
          Estás a un paso de
          <br /> convertirte en Recruiter
        </h2>
      );
    },
  },
};
