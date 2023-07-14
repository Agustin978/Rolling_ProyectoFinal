import { Card, Col , Button} from "react-bootstrap";

const CardProducto = () => {
    return (
        <Col md={4} lg={3} className="mb-3">
      <Card className="rounded-0">
        <Card.Img className="rounded-0"
          variant="top"
          src="https://i.pinimg.com/564x/05/33/02/053302a9710640c0d1c1a93b6801ead8.jpg" alt="ñoquis"
        />
        <Card.Body className="text-white featured-color">
          <Card.Title className="pb-3 text-dark">Ñoquis</Card.Title>
          <Card.Text className="pb-3 text-dark">Precio: $0,00</Card.Text>
          <Button variant="dark">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default CardProducto;