import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import imagenFooter from "../../assets/logo-nav.png"

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-4 pb-3">
          <section className="container">
            <article className="row">
              <aside className="col-12 col-md-4 text-center">
                <Link to="/" className="text-decoration-none link-light">
                  <div>
                    <img src={imagenFooter} alt="logo-footer" className="img-fluid" />
                  </div>
                </Link>
              </aside>
              <aside className="col-12 col-md-4">
                <h5 className="text-center">¡Seguinos en nuestras redes!</h5>
                <div className="text-center">
                  <Link to="*" className="text-decoration-none iconFooter"> <Facebook className="fs-1 p-1 "></Facebook> </Link>
                  <Link to="*" className="text-decoration-none iconFooter"> <Instagram className="fs-1 p-1 "></Instagram> </Link>
                  <Link to="*" className="text-decoration-none iconFooter"> <Twitter className="fs-1 p-1 "></Twitter> </Link>
                </div>
              </aside>
              <aside className="col-12 col-md-4 text-center">
                <div className="text-center tex-md-start fs-4">
                  <Link to="/SobreNosotros" className="d-block fw-semibold text-decoration-none textoFooter">Sobre nosotros</Link>
                  <Link to="*" className="d-block fw-semibold text-decoration-none textoFooter">Contáctanos</Link>
                </div>

              </aside>
            </article>

          </section>
        </footer>
    );
};

export default Footer;