// Información estatica de las paginas. Se puede volcar en un CMS para acceso y modificación.
export default {
  recruiter: {
    para: () => {
      return (
        <p>
          A­­ccedé a una amplia red de clientes y candidatos. <br />
          Podrás realizar contrataciones rápidas y efectivas.
        </p>
      );
    },
    buttonContent: 'Sumate!',
    rocket: {
      header: () => {
        return (
          <h2 className="header">
            Nuestro método <br /> de contratación <br /> marca la diferencia.
          </h2>
        );
      },
      subHeader: () => {
        return (
          <p className="subHeader">
            Utilizamos una plataforma propia <br /> y única en Latinoamérica, diseñada <br />
            especialmente para agilizar procesos
            <br /> de reclutamiento.
          </p>
        );
      },
    },
  },
  empresa: {
    para: () => {
      return (
        <p>
          Reducí hasta un 70% tus tiempos operativos de <br />
          reclutamiento con contrataciones rápidas y efectivas.
        </p>
      );
    },
    buttonContent: 'Contactanos!',
    rocket: {
      header: () => {
        return (
          <h2 className="header">
            Nuestro método <br /> de contratación <br /> marca la diferencia.
          </h2>
        );
      },
      subHeader: () => {
        return (
          <p className="subHeader">
            Utilizamos una plataforma propia <br /> y única en Latinoamérica, diseñada <br />
            especialmente para agilizar procesos
            <br /> de reclutamiento.
          </p>
        );
      },
    },
    certificado: {
      header: () => {
        return (
          <h2 className="header">
            Nuestros recruiters
            <br /> cuentan con el
            <br /> profesionalismo y<br /> especialización para
            <br /> alcanzar al candidato ideal
            <br /> que se ajuste a cada
            <br /> búsqueda específica.
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
  },
};
