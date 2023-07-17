import { Card, Col, Row, Button } from "react-bootstrap";
import "./CardProducto.css"; 

const CardProducto = ({productos}) => {
    return (
      
        <Row className=" justify-content-start">
          {productos.map((producto) => (
        <Col sm={6} md={4} lg={3} key={producto.id} className="mb-3">
        <Card className="rounded-0 border-0 h-100 shadow p-3 p-md-2 p-lg-3">
          <Card.Img className="rounded-0 imgCard"
            variant="top"
            src={producto.imagen} alt={producto.nombreProducto}
          />
          <Card.Body className="text-white px-0 pb-0">
            <Card.Title className="pb-3 text-dark">{producto.nombreProducto}</Card.Title>
            <Card.Text className="pb-3 text-dark"><span className="text-danger pe-2 text-decoration-line-through fs-6 fw-bolder">${producto.precioViejo}</span> <span className="fs-4 fw-bolder">${producto.precioNuevo}</span></Card.Text>
            {/* <div className="d-flex">
            <Button variant="dark" className="w-50 rounded-0 py-2 me-2">Ver</Button>
            <Button variant="dark" className="w-50 rounded-0 py-2">Agregar</Button>
  
            </div> */}
            <Button variant="dark" className="w-100 rounded-0 py-3">Agregar al carrito</Button>
          </Card.Body>
        </Card>
      </Col>
      ))}
      </Row>

    );
};

export default CardProducto;