import React, { useState, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import imgBanner from '../../assets/arreglado1_auto_x2.jpg';
import './BannerInicio.css';

const BannerInicio = () => {

  return (
    <section className="colorBase position-relative">
      <img src={imgBanner} className="imgBannerInicio position-absolute" alt="comida" />
      <Container className="d-flex justify-content-lg-end justify-content-sm-center position-relative">
        <Col sm={9} md={10} lg={8} className="colTitleInicio pt-4 pt-sm-2 pt-md-2 pt-lg-5 text-center">
          <p className="text-white mainTitleInicio position-relative pt-4 pt-md-5 fw-md-bold fs-sm-3 fs-md-1">
            ´´Una experiencia gastronómica que deleitará tus sentidos, déjate llevar y probemos juntos la mejor versión de nosotros.´´
          </p>
        </Col>
      </Container>

    </section>
  );
};

export default BannerInicio;
