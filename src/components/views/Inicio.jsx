import { obtenerProductos } from "../helpers/queries";
import BannerInicio from "./BannerInicio";
import CardProducto from "./producto/CardProducto";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const Inicio = ({usuarioLogueado}) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos().then((resp) => {
          setProductos(resp);
      });
  }, []);
  return (
    <section>
      <BannerInicio></BannerInicio>
      <Container>
        <Row className="mt-3">
          {
            productos.map((producto)=>  <CardProducto key={producto.id} producto={producto} usuarioLogueado={usuarioLogueado}></CardProducto>)
          }
        </Row>
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
