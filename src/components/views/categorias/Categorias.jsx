import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { obtenerProductosPorCategoria } from "./filtradoCategorias";
import { obtenerProductos } from "../../helpers/queries";
import CardProducto from "../producto/cardProducto/CardProducto";
import { Row , Col} from "react-bootstrap";
import logo from "../../../assets/logo.png"
import "./categorias.css"
import Paginacion from "../paginacion/paginacion";

function Categorias() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      obtenerProductos().then((resp) => {
        setProductos(resp);
      });
    }, []);

    useEffect(() => {
      if (categoriaSeleccionada === "ofertas del dia") {
        const ofertasDelDia = productos.filter(
          (producto) => producto.precioAnterior && producto.precioAnterior > 0
        );
        setProductosFiltrados(ofertasDelDia);
      } else if (categoriaSeleccionada) {
        obtenerProductosPorCategoria(categoriaSeleccionada)
          .then((productosFiltrados) => {
            setProductosFiltrados(productosFiltrados);
          })
          .catch((error) => {
            console.error("Error al obtener productos por categoría:", error);
            setProductosFiltrados([]);
          });
      } else {
        setProductosFiltrados(productos);
      }
    }, [categoriaSeleccionada, productos]);

    const handleCategoriaSeleccionada = (categoria) => {
      setCategoriaSeleccionada(categoria);
    };
  
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={false} className="pt-5">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="ms-auto">
              <span className="fw-bold fs-4">Categorías</span>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="text-dark ps-3 border border-4 border-dark rounded-start-4"
            >
              <Offcanvas.Header closeButton className="pb-0">
                <Offcanvas.Title
                  className="fs-4"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                    <img src={logo} alt="logo" className="logo mb-4"/>
                  Categorías
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fs-4">
                  <Nav.Link
                    
                    className="nav-item nav-link"
                    onClick={() => handleCategoriaSeleccionada(null)}
                  >
                    Todos los productos
                  </Nav.Link>
                  <Nav.Link
                   
                    className="nav-item nav-link text-danger fw-bolder"
                    onClick={() => handleCategoriaSeleccionada("ofertas del dia")}
                  >
                    Ofertas de día!
                  </Nav.Link>
                  <Nav.Link
                    
                    className="nav-item nav-link"
                    onClick={() => handleCategoriaSeleccionada("entrada")}
                  >
                    Entrada
                  </Nav.Link>
                  <Nav.Link  className="nav-item nav-link" onClick={() => handleCategoriaSeleccionada("plato fuerte")}>
                    Plato Fuerte
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => handleCategoriaSeleccionada("acompaniamientos")}>
                    Acompañamiento
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => handleCategoriaSeleccionada("postre")}>
                    Postre
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => handleCategoriaSeleccionada("bebida caliente")}>
                    Bebida Caliente
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => handleCategoriaSeleccionada("bebida fria")}>
                    Bebida Fría
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => handleCategoriaSeleccionada("bebida con alcohol")}>
                    Bebida con alcohol
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div>
        <h2>Productos:</h2>
        {productosFiltrados.length === 0 ? (
          <p className="display-6 text-danger py-5 text-center">No hay productos disponibles en esta categoría ☹️</p>
        ) : (
          <Row className="justify-content-start">
            {productosFiltrados.map((producto) => (
              <Col key={producto.id} sm={6} md={4} lg={3} className="mb-3">
                <CardProducto producto={producto} />
              </Col>
            ))}
          </Row>
        )}
      </div>
      <Paginacion></Paginacion>
    </>
  );
}

export default Categorias;
