import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import reloj from "../../../assets/reloj.png"
import bolsa from "../../../assets/bolsa.png"
import plato from "../../../assets/plato.png"
import "./carrusel.css"
import { Card, Container } from 'react-bootstrap';


const CarruselInicio = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
<Container className="my-5">
      <Slider {...settings}>

        <div className="d-flex justify-content-center cardIconos">
          <>
            <Card className="cardIconos border-0">
              <Card.Img variant="top" src={reloj}  className="imgIconos px-5 img-fluid d-block mx-auto"/>
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-0">ENTREGA RÁPIDA</Card.Title>
                <Card.Text className="text-center">
                ¡Recibe tus pedidos en tiempo récord!
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        </div>

        <div className="d-flex justify-content-center cardIconos">
          <>
            <Card className="cardIconos border-0">
              <Card.Img variant="top" src={bolsa}  className="imgIconos px-5 img-fluid d-block mx-auto"/>
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-0">COMPRA PROTEGIDA</Card.Title>
                <Card.Text className="text-center">
                Tu seguridad es nuestra prioridad.
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        </div>

        <div className="d-flex justify-content-center">
          <>
            <Card className="cardIconos border-0">
              <Card.Img variant="top" src={plato}  className="imgIconos px-5 img-fluid d-block mx-auto "/>
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-0">VARIEDAD DE COMIDAS</Card.Title>
                <Card.Text className="text-center">
                Descubre un mundo de sabores en un solo lugar.
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        </div>

      </Slider>
    </Container>
    );
};

export default CarruselInicio;