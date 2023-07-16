import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import maps from './maps';
import imgBanner from '../../assets/arreglado1_auto_x2.jpg';
import './BannerInicio.css';

const BannerInicio = () => {
  return (
    <section className="colorBase position-relative">
      <img src={imgBanner} className="imgBanner position-absolute" alt="comida" />
      <Container className="d-flex justify-content-end position-relative">
        <Col sm={9} md={10} lg={8} className="colTitle pt-4 pt-sm-2 pt-md-5 pt-lg-5 text-center">
          <p className="text-white mainTitle position-relative pt-4 pt-md-5 fw-md-bold fs-1">
            "Una experiencia gastronómica que deleitará tus sentidos, déjate llevar y probemos juntos la mejor versión de nosotros."
          </p>
        </Col>
        <input
          type="text"
          placeholder="Buscar"
          className="form-control form-control-lg position-absolute bottom-0 mb-4 mb-sm-5 start-50 translate-middle-x mt-3 customInput"
        />
      </Container>
    </section>
  );
};

export default BannerInicio;