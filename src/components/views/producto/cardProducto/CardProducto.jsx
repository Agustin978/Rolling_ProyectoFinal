import { Card, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./cardProducto.css";
import { Link } from "react-router-dom";
import notImage from "../../../../assets/notImage.png";
import Swal from "sweetalert2";
import AgregaDetalles from "../../Pedidos/AgregaDetalles";
import Placeholder from "react-bootstrap/Placeholder";

const CardProducto = ({ producto, usuarioLogueado }) => {
  const { id, nombreProducto, precioAnterior, precioNuevo, imagen } = {
    ...producto,
  };
  const [showDetalles, setShowDetalles] = useState(false);
  const [cargando, setCargando] = useState(true);
  const handleCloseDetalles = () => setShowDetalles(false);
  const handleShowDetalles = () => setShowDetalles(true);
  const agregaAcarrito = () => {
    if (Object.keys(usuarioLogueado).length === 0) {
      Swal.fire(
        "Error",
        "Debe iniciar secion antes de realizar un pedido.",
        "error"
      );
    } else {
      handleShowDetalles();
    }
  };

  useEffect(() => {
    // Simulación de carga asincrónica con un delay de 1.5 segundos
    const demora = 3500;
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, demora);

    return () => clearTimeout(temporizador); // Limpiamos el temporizador al desmontar el componente
  }, []);
  return (
    <Card className="rounded-4  border-4 h-100 shadow p-3 p-md-2 p-lg-3">
      <Link to={`/detalle/${id}`}>
        {/* <Card.Img  className="rounded-0 imgCard"
            variant="top"
            src={imagen ? imagen : notImage} alt={nombreProducto}
          /> */}
        {cargando || !imagen ? ( // Si está cargando o no hay imagen, muestra el marcador de posición
          <Placeholder as={Card.Img} animation="glow" xs={6} />
        ) : (
          <Card.Img
            className="rounded-0 imgCard"
            variant="top"
            src={imagen}
            alt={nombreProducto}
          />
        )}
      </Link>
      <Card.Body className="text-white px-0 pb-0">
        {cargando || !nombreProducto ? ( // Si está cargando o no hay nombre de producto, muestra el marcador de posición
          <div>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          </div>
        ) : (
          <Card.Title className="pb-1 text-dark fw-bold">
            {producto.nombreProducto}
          </Card.Title>
        )}
      </Card.Body>
      <Card.Footer className="border-0 bg-white px-0">
        <Card.Text className="pb-1 text-dark">
          {cargando || precioAnterior == null ? ( // Si está cargando o no hay precio anterior, muestra el marcador de posición
            <div>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            </div>
          ) : precioAnterior > 0 ? ( // Si el precio anterior es mayor a 0, muestra el precio tachado
            <span className="text-danger pe-2 text-decoration-line-through fs-6 fw-bolder">
              ${producto.precioAnterior}
            </span>
          ) : null}
          {cargando || !precioNuevo ? ( // Si está cargando o no hay precio nuevo, muestra el marcador de posición
            <div>
              <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            </div>
          ) : (
            <span className="fs-4 fw-bolder">${producto.precioNuevo}</span>
          )}
        </Card.Text>
        {cargando || !imagen ? ( // Si está cargando o no hay imagen, muestra el marcador de posición
          <Placeholder.Button variant="dark" xs={6} />
        ) : (
          <Button
            variant="dark"
            className="w-100 rounded-0 py-3 fs-5"
            onClick={agregaAcarrito}
          >
            Agregar al carrito
          </Button>
        )}
        {showDetalles && (
          <AgregaDetalles
            showDetalles={showDetalles}
            handleCloseDetalles={handleCloseDetalles}
            producto={producto}
            usuarioLogueado={usuarioLogueado}
          ></AgregaDetalles>
        )}
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
