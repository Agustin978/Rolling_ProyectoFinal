import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-4 pb-4 footer">
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
                <h5 className="text-center">Seguinos en nuestras redes!</h5>
                <div className="text-center">
                  <a href=""> <Facebook></Facebook></a>
                  <a href=""> <Instagram></Instagram></a>
                  <a href=""> <Twitter></Twitter></a>
                </div>
              </aside>
              <aside className="col-12 col-md-4 text-center">
                <div className="text-center tex-md-start fs-4">
                  <a href="" className="d-block fw-semibold text-decoration-none link-light">Acerca de nosotros</a>
                  <a href="" className="d-block fw-semibold text-decoration-none link-light">Contactos</a>
                </div>

              </aside>
            </article>

          </section>
        </footer>
    );
};

export default Footer;