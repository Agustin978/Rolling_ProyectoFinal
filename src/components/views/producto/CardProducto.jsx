import { Card, Col, Row, Button } from "react-bootstrap";
import "./CardProducto.css"; 
import { Link } from "react-router-dom";
import notImage from "../../../assets/notImage.png"
import Swal from "sweetalert2";
import AgregaDetalles from "../Pedidos/AgregaDetalles";
import { useState } from "react";

const CardProducto = ({producto, usuarioLogueado}) => {
  const {id, nombreProducto, precioViejo, precioNuevo, imagen} = {...producto};
  const [showDetalles, setShowDetalles] = useState(false);
  const handleCloseDetalles = () => setShowDetalles(false);
  const handleShowDetalles = () => setShowDetalles(true);
  const agregaAcarrito = () => 
  {
    if(Object.keys(usuarioLogueado).length===0)
    {
      Swal.fire('Error', 'Debe iniciar secion antes de realizar un pedido.', 'error');
    }else
    {
      handleShowDetalles();
    }
  }
    return (
        <Col sm={6} md={4} lg={3} className="mb-3">
        <Card className="rounded-0 border-0 h-100 shadow p-3 p-md-2 p-lg-3">
          <Link to={`/detalle/${id}`}>
          <Card.Img  className="rounded-0 imgCard"
            variant="top"
            src={imagen ? imagen : notImage} alt={nombreProducto}
          />
         
          </Link>
          <Card.Body className="text-white px-0 pb-0">
            <Card.Title className="pb-1 text-dark fw-bold">{producto.nombreProducto}</Card.Title>
          </Card.Body>
          <Card.Footer className="border-0 bg-white">
          <Card.Text className="pb-1 text-dark">
            {precioViejo > 0 && (
              <span className="text-danger pe-2 text-decoration-line-through fs-6 fw-bolder">
                ${producto.precioViejo}
              </span>
            )}
            <span className="fs-4 fw-bolder">${producto.precioNuevo}</span>
          </Card.Text>
          <Button variant="dark" className="w-100 rounded-0 py-3 fs-5" onClick={agregaAcarrito}>Agregar al carrito</Button>
          {
            showDetalles && <AgregaDetalles showDetalles={showDetalles} handleCloseDetalles={handleCloseDetalles} producto={producto} usuarioLogueado={usuarioLogueado}></AgregaDetalles>
          }
          </Card.Footer>
        </Card>
      </Col>
      
    );
};

export default CardProducto;