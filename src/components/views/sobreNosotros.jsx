import { Container, Row, Col, Card } from "react-bootstrap";
import imagenAna from "../../assets/sobreNosotros/anaRocha.jpg";
import imagenLean from "../../assets/sobreNosotros/leandroNavarro.jpg";
import imagenAgus from "../../assets/sobreNosotros/agusLobo.jpeg";
import imagenMartin from "../../assets/sobreNosotros/martinSerrano.jpg";
import imagenLeo from "../../assets/sobreNosotros/leoQuilpildor.jpeg";



const SobreNosotros = () => {
  return (
    <Container fluid className="bg-about-us">
      <div>
        <h1 className="name-restaurante">Somos RollingFoods</h1>
        <h2 className="text-about-us">
          El punto de encuentro donde compartir buenos momentos. <br />
          Servimos comida y vinos trabajando en una estrecha relación con
          productores y artesanos locales. <br /> A través de un servicio
          amigable, buscamos generar momentos de felicidad. <br />
          Ahora sumamos novedosas propuestas nocturnas: noches de música,
          excelente coctelería, tapeos y encantadoras cenas.
        </h2>
      </div>
      
      <Row className="my-4 justify-content-center">
        <Col xs={12} sm={6} md={4} lg={2} className="mb-3">
          <div className="card">
            <img
              src={imagenAna}
              className="card-img-top"
              alt="Integrante 1"
            />
            <div className="card-body">
              <h5 className="card-title">Ana<br /> Rocha</h5>
              <p className="card-text">-Ing. Sistemas<br />(Estudiante)</p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-3">
          <div className="card">
            <img
              src={imagenLean}
              className="card-img-top"
              alt="Integrante 1"
            />
            <div className="card-body">
              <h5 className="card-title">Leandro Navarro</h5>
              <p className="card-text">-QA Ssr.<br />-Ing. Biom.<br />-Musico</p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-3">
          <div className="card">
            <img
              src={imagenAgus}
              className="card-img-top"
              alt="Integrante 1"
            />
            <div className="card-body">
              <h5 className="card-title">Agustin Lobo</h5>
              <p className="card-text">-Dev Jr.<br />-Ing. Prog.<br />(Estudiante)</p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-3">
          <div className="card">
            <img
              src={imagenMartin}
              className="card-img-top"
              alt="Integrante 1"
            />
            <div className="card-body">
              <h5 className="card-title">Martin Serrano</h5>
              <p className="card-text">-Ing. Sistemas (Estudiante)</p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} className="mb-3">
          <div className="card">
            <img
              src={imagenLeo}
              className="card-img-top"
              alt="Integrante 1"
            />
            <div className="card-body">
              <h5 className="card-title">Leo Quilpildor</h5>
              <p className="card-text">-Dev Trainee<br />-Gamer<br />-Futbolero</p>
            </div>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};


export default SobreNosotros;