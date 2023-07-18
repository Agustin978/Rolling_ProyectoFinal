import { Card, Col, Button } from "react-bootstrap";
import "./cardProducto.css"; 
import { Link } from "react-router-dom";
import notImage from "../../../../assets/notImage.png"

const CardProducto = ({producto}) => {
  const {id, nombreProducto, precioAnterior, precioNuevo, imagen} = {...producto};
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
          <Card.Footer className="border-0 bg-white px-0">
          <Card.Text className="pb-1 text-dark">
            {precioAnterior > 0 && (
              <span className="text-danger pe-2 text-decoration-line-through fs-6 fw-bolder">
                ${producto.precioAnterior}
              </span>
            )}
            <span className="fs-4 fw-bolder">${producto.precioNuevo}</span>
          </Card.Text>
          <Button variant="dark" className="w-100 rounded-0 py-3 fs-md-6 fs-lg-5">Agregar al carrito</Button>
          </Card.Footer>
         
        </Card>
      </Col>


    );
};

export default CardProducto;