import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <footer className="text-center footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">locación</h4>
              <p>CIUDAD DE MEXICO, MÉXICO</p>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase">redes sociales</h4>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light text-center btn-social rounded-circle"
                    role="button"
                    href="https://www.facebook.com/RolasNajera"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light text-center btn-social rounded-circle"
                    role="button"
                    href="https://www.linkedin.com/in/rolasnajera"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light text-center btn-social rounded-circle"
                    role="button"
                    href="https://twitter.com/RolasNajera"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light text-center btn-social rounded-circle"
                    role="button"
                    href="http://instagram.com/rolasnajera"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <p className="lead mb-0">
                <span>
                  Si tienes la capacidad de soñarlo, tienes la capacidad de
                  lograrlo.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
