import { Container, Row, Col} from "react-bootstrap";
import Equipo from "./Equipo";



const SobreNosotros = () => {
  return (
    <Container fluid className="bg-about-us">
      <Row className="justify-content-center">
      <Col xs={12} md={12} lg={12} xl={5}>
        <h1 className="name-restaurante">Somos RollingFoods</h1>
        <h2 className="text-about-us">
          El punto de encuentro donde compartir buenos momentos. <br />
          Servimos comida y vinos trabajando en una estrecha relación con
          productores y artesanos locales. <br /> A través de un servicio
          amigable, buscamos generar momentos de felicidad. <br />
          Ahora sumamos novedosas propuestas nocturnas: noches de música,
          excelente coctelería, tapeos y encantadoras cenas.
        </h2>
      </Col>
      <Col xs={12} md={12} lg={12} xl={6}>
      <Equipo></Equipo>
      </Col>
      </Row>

      
    </Container>
  );
};


export default SobreNosotros;