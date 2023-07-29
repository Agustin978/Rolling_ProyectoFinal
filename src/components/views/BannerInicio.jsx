import React, { useState, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import imgBanner from '../../assets/arreglado1_auto_x2.jpg';
import './BannerInicio.css';

const BannerInicio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProductos(data);
          setFilteredProductos(data);
        }
      });
  }, []);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (Array.isArray(productos)) {
      const filteredProductos = productos.filter((producto) =>
        producto.nombreProducto.toLowerCase().includes(searchTerm)
      );
      setFilteredProductos(filteredProductos);
    }
  };

  return (
    <section className="colorBase position-relative">
      <img src={imgBanner} className="imgBannerInicio position-absolute" alt="comida" />
      <Container className="d-flex justify-content-lg-end justify-content-sm-center position-relative">
        <Col sm={9} md={10} lg={8} className="colTitleInicio pt-4 pt-sm-2 pt-md-2 pt-lg-5 text-center">
          <p className="text-white mainTitleInicio position-relative pt-4 pt-md-5 fw-md-bold fs-sm-3 fs-md-1">
            ´´Una experiencia gastronómica que deleitará tus sentidos, déjate llevar y probemos juntos la mejor versión de nosotros.´´
          </p>
        </Col>
        <input
          type="text"
          placeholder="Buscar"
          className="form-control form-control-lg position-absolute bottom-0 mb-4 mb-sm-5 start-50 translate-middle-x mt-3 customInputInicio"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Container>

    </section>
  );
};

export default BannerInicio;
