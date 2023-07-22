import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { obtenerProductosPorCategoria } from "./filtradoCategorias";
import { obtenerProductos } from "../../helpers/queries";
import CardProducto from "../producto/cardProducto/CardProducto";
import { Row , Col} from "react-bootstrap";

function Categorias() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        obtenerProductos().then((resp) => {
          setProductos(resp);
          console.log(resp)
        });
      }, []);
  
      useEffect(() => {
        if (categoriaSeleccionada === "ofertas del dia") {
          // Filtrar productos para obtener las ofertas del día
          const ofertasDelDia = productos.filter(
            (producto) => producto.precioAnterior && producto.precioAnterior > 0
          );
          setProductosFiltrados(ofertasDelDia);
        } else if (categoriaSeleccionada) {
          // Filtrar productos por categoría seleccionada
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
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={false} className="pt-5">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <span className="fw-bold">Filtrar</span>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="text-dark ps-3"
            >
              <Offcanvas.Header closeButton className="pb-0">
                <Offcanvas.Title
                  className="fs-4"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Categorías
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fs-4">
                  <Nav.Link
                    
                    className="nav-item nav-link"
                    onClick={() => setProductosFiltrados(productos)}
                  >
                    Todos los productos
                  </Nav.Link>
                  <Nav.Link
                   
                    className="nav-item nav-link"
                    onClick={() => setCategoriaSeleccionada("ofertas del dia")}
                  >
                    Ofertas de día
                  </Nav.Link>
                  <Nav.Link
                    
                    className="nav-item nav-link"
                    onClick={() => setCategoriaSeleccionada("entrada")}
                  >
                    Entrada
                  </Nav.Link>
                  <Nav.Link  className="nav-item nav-link" onClick={() => setCategoriaSeleccionada("plato fuerte")}>
                    Plato Fuerte
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => setCategoriaSeleccionada("acompaniamientos")}>
                    Acompañamiento
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => setCategoriaSeleccionada("postre")}>
                    Postre
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => setCategoriaSeleccionada("bebida caliente")}>
                    Bebida Caliente
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => setCategoriaSeleccionada("bebida fria")}>
                    Bebida Fría
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => setCategoriaSeleccionada("bebida con alcohol")}>
                    Bebida con alcohol
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div>
        <h3>Productos:</h3>
        {productosFiltrados.length === 0 ? (
          <p>No hay productos disponibles en esta categoría.</p>
        ) : (
          <Row className="justify-content-start">
            {productosFiltrados.map((producto) => (
              <Col key={producto.id} sm={6} md={4} lg={3} className="mb-3">
                {/* Renderiza el componente CardProducto solo si está configurado correctamente */}
                <CardProducto producto={producto} />
              </Col>
            ))}
          </Row>
        )}

      </div>
    </>
  );
}

export default Categorias;
