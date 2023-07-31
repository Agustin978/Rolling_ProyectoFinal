import { Container, Row, Col, Card } from "react-bootstrap";
import imagenAna from "../../assets/sobreNosotros/anaRocha.jpg";
import imagenLean from "../../assets/sobreNosotros/leandroNavarro.jpg";
import imagenAgus from "../../assets/sobreNosotros/agusLobo.jpeg";
import imagenMartin from "../../assets/sobreNosotros/martinSerrano.jpg";
import imagenLeo from "../../assets/sobreNosotros/leoQuilpildor.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./carruselInicio/carrusel.css"

const Equipo = () => {

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="py-5">
      <Slider {...settings}>
        <div className="d-flex justify-content-center">
        <Card className="cardEquipo rounded-5">
            <Card.Img
              src={imagenAna}
              className="imgEquipo rounded-5"
              alt="Integrante 1"
            />
            <Card.Body className="">
              <Card.Title className="">Ana<br /> Rocha</Card.Title>
              <Card.Text className="">-Ing. Sistemas<br />(Estudiante)</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex justify-content-center">
        <Card className="cardEquipo rounded-5">
            <Card.Img
              src={imagenLean}
              className="imgEquipo rounded-5"
              alt="Integrante 1"
            />
            <Card.Body className="">
              <Card.Title className="">Leandro Navarro</Card.Title>
              <Card.Text className="">-QA Ssr.<br />-Ing. Biom.<br />-Musico</Card.Text>
            </Card.Body>
          </Card> 
        </div>
        <div className="d-flex justify-content-center">
        <Card className="cardEquipo rounded-5">
            <Card.Img
              src={imagenAgus}
              className="imgEquipo rounded-5"
              alt="Integrante 1"
            />
            <Card.Body className="">
              <Card.Title className="">Agustin Lobo</Card.Title>
              <Card.Text className="">-Dev Jr.<br />-Ing. Prog.<br />(Estudiante)</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex justify-content-center">
        <Card className="rounded-5 cardEquipo">
            <Card.Img
              src={imagenMartin}
              className="imgEquipo rounded-5"
              alt="Integrante 1"
            />
            <Card.Body className="rounded-5">
              <Card.Title className="">Martin Serrano</Card.Title>
              <Card.Text className="">-Ing. Sistemas (Estudiante)</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex justify-content-center">
        <Card className="cardEquipo rounded-5">
            <Card.Img
              src={imagenLeo}
              className="imgEquipo rounded-5"
              alt="Integrante 1"
            />
            <Card.Body className="">
              <Card.Title className="">Leo Quilpildor</Card.Title>
              <Card.Text className="">-Dev Trainee<br />-Gamer<br />-Futbolero</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </Container>
  );
};

export default Equipo;