import foto_personal from "../assets/img/foto_personal.jpeg";

const Header = () => {
  return (
    <>
      <header className="text-center text-white bg-primary masthead">
        <div className="container">
          <img
            className="img-fluid d-block mx-auto mb-5"
            src={foto_personal}
            alt="Rolas Nájera"
          />
          <h1>Rolas Najera</h1>
          <hr className="star-light" />
          <h2 className="font-weight-light mb-0">
            Ingeniero de software Sr, Facilitador, Minimalista
          </h2>
        </div>
      </header>
    </>
  );
};

export default Header;
