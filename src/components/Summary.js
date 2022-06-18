const Summary = () => {
  return (
    <>
      <section className="text-white bg-primary mb-0" id="about">
        <div className="container">
          <h2 className="text-uppercase text-center text-white">resumen</h2>
          <hr className="star-light mb-5" />
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Ingeniero de software que siempre busca el crecimiento personal
                y profesional.
                <br />
                Estoy convencido que el mundo necesita mas y mejor preparados
                ingenieros de software, pero también mejores personas.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                9+ años de experiencia en el desarrollo de software en empresas
                de consultoría tanto en México como en España. Desarrollo de
                aplicaciones en industrias bancaria, seguros y ahora en
                industria de viajes.
              </p>
            </div>
          </div>
          <div className="text-center mt-4"></div>
        </div>
      </section>
    </>
  );
};

export default Summary;
