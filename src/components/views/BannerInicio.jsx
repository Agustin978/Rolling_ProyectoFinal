import { Col, Container, Row } from "react-bootstrap";
// import imgBanner from "../../assets/pizza.png";
import imgBanner from "../../assets/pizza.jpg";

import "./BannerInicio.css";

const BannerInicio = () => {
    return (
        <section className="colorBase position-relative">
            <img src={imgBanner} className="imgBanner opacity-50 position-absolute" alt="comida" />
            <Container className="d-flex justify-content-end position-relative">
                <Col sm={9} md={10} lg={8} className="colTitle pt-4 pt-sm-2 pt-md-5 pt-lg-5 text-center">
                    <p className="text-white mainTitle position-relative pt-4 pt-md-5 fw-md-bold fs-1">
                        Una experiencia gastronómica que deleitará tus sentidos
                    </p>
                </Col>
                <input
                    type="text"
                    placeholder="Buscar"
                    className="form-control position-absolute bottom-0 mb-4 mb-sm-5 start-50 translate-middle-x mt-3 customInput"
                />
            </Container>
        </section>
    );
};

export default BannerInicio;
