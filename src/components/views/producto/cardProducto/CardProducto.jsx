import { Card, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./cardProducto.css";
import { Link } from "react-router-dom";
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
    const demora = 800;
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, demora);

    return () => clearTimeout(temporizador);
  }, []);
  
  return (
    <Card className="rounded-4  border-0 h-100 shadow p-3 p-md-2 p-lg-3">
      <Link to={`/detalle/${id}`}>
        {cargando || !imagen ? ( 
          <Placeholder as={Card.Img} bg="secondary" className="rounded-0 imgCard opacity-25" xs={12}/>
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
        {cargando || !nombreProducto ? ( 
          
          <Placeholder as={Card.Title}  animation="glow">
          <Placeholder xs={12} bg="secondary" />
        </Placeholder>
          
        ) : (
          <Card.Title className="pb-1 text-dark fw-bold">
            {producto.nombreProducto}
          </Card.Title>
        )}
      </Card.Body>
      <Card.Footer className="border-0 bg-white px-0">
        <Card.Text className="pb-1 text-dark">

          {cargando || precioAnterior == null ? ( 
              <Placeholder animation="glow">
              <Placeholder xs={3} className="me-2"/> 
              <Placeholder xs={3} /> 
              </Placeholder>
          ) : precioAnterior > 0 ? ( 
            <span className="text-danger pe-2 text-decoration-line-through fs-6 fw-bolder">
              ${producto.precioAnterior}
            </span>
          ) : null}
          {!cargando && producto.precioNuevo && (
            <span className="fs-4 fw-bolder">${producto.precioNuevo}</span>
          )}
        </Card.Text>
        {cargando || !imagen ? ( 
          <Placeholder.Button variant="dark" xs={12}/>
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
