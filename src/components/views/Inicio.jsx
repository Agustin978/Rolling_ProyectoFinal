import { obtenerProductos } from "../helpers/queries";
import BannerInicio from "./BannerInicio";
import CarruselInicio from "./carruselInicio/Carrusel";
import CarruselImagenes from "./carruselInicio/CarruselImagenes";
import Categorias from "./categorias/Categorias"
import { Container} from "react-bootstrap";

const Inicio = ({usuarioLogueado}) => {

  return (
    <section>
      <BannerInicio></BannerInicio>
      <Container>
        <Categorias usuarioLogueado={usuarioLogueado}></Categorias>
        <CarruselInicio></CarruselInicio>
        <CarruselImagenes></CarruselImagenes>

        <section className="mb-0">
          <iframe
            style={{ width: "100%", height: "360px" }}
            src="https://maps.google.com/maps?q=Mu%C3%B1ecas%20643,%20San%20Miguel%20de%20Tucum%C3%A1n,%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </section>
      </Container>
    </section>
  );
};

export default Inicio;
