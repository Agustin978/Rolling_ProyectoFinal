import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-4 pb-3">
          <section className="container">
            <article className="row">
              <aside className="col-12 col-md-4 text-center">
                <a href="" className="text-decoration-none link-light">
                  <div>
                    <img src="/src/assets/logo-nav.png" alt="logo-footer" className="img-fluid" />
                  </div>
                </a>
              </aside>
              <aside className="col-12 col-md-4">
                <h5 className="text-center">¡Seguinos en nuestras redes!</h5>
                <div className="text-center">
                  <a href="" className="text-decoration-none iconFooter"> <Facebook className="fs-1 p-1 "></Facebook></a>
                  <a href="" className="text-decoration-none iconFooter"> <Instagram className="fs-1 p-1"></Instagram></a>
                  <a href="" className="text-decoration-none iconFooter"> <Twitter className="fs-1 p-1"></Twitter></a>
                </div>
              </aside>
              <aside className="col-12 col-md-4 text-center">
                <div className="text-center tex-md-start fs-4">
                  <a href="" className="d-block fw-semibold text-decoration-none textoFooter">Sobre nosotros</a>
                  <a href="" className="d-block fw-semibold text-decoration-none textoFooter">Contáctanos</a>
                </div>

              </aside>
            </article>

          </section>
        </footer>
    );
};

export default Footer;