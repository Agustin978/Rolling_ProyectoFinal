import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { obtenerProductosPorCategoria } from "./filtradoCategorias";
import CardProducto from "../producto/cardProducto/CardProducto";

function OffcanvasExample() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [todosLosProductos, setTodosLosProductos] = useState([]);
  
    useEffect(() => {
      const obtenerProductos = async () => {
        try {
          const todosLosProductos = await obtenerProductosPorCategoria({});
          setTodosLosProductos(todosLosProductos);
          setProductosFiltrados(todosLosProductos);
          console.log(todosLosProductos); // Agregar esta línea para mostrar todos los productos al inicio.
        } catch (error) {
          console.error("Error al obtener todos los productos:", error);
        }
      };
      obtenerProductos();
    }, []);
  
    useEffect(() => {
      if (categoriaSeleccionada !== null) {
        const obtenerProductosPorCategoriaSeleccionada = async () => {
          try {
            const productosFiltrados = await obtenerProductosPorCategoria(categoriaSeleccionada);
            setProductosFiltrados(productosFiltrados);
          } catch (error) {
            console.error("Error al obtener productos por categoría:", error);
            setProductosFiltrados([]); // En caso de error, establecer productos filtrados como una lista vacía.
          }
        };
        obtenerProductosPorCategoriaSeleccionada();
      } else {
        setProductosFiltrados(todosLosProductos); // Mostrar todos los productos cuando no hay categoría seleccionada.
      }
    }, [categoriaSeleccionada, todosLosProductos]);
  
    const manejarCambioCategoria = (categoria) => {
      setCategoriaSeleccionada(categoria);
    };
  

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="pt-5">
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
                    onClick={() => manejarCambioCategoria(null)}
                  >
                    Todos los productos
                  </Nav.Link>
                  <Nav.Link
                   
                    className="nav-item nav-link"
                    onClick={() => manejarCambioCategoria("ofertaDia")}
                  >
                    Ofertas de día
                  </Nav.Link>
                  <Nav.Link
                    
                    className="nav-item nav-link"
                    onClick={() => manejarCambioCategoria("entrada")}
                  >
                    Entrada
                  </Nav.Link>
                  <Nav.Link  className="nav-item nav-link" onClick={() => manejarCambioCategoria("platoFuerte")}>
                    Plato Fuerte
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => manejarCambioCategoria("acompaniamiento")}>
                    Acompañamiento
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => manejarCambioCategoria("postre")}>
                    Postre
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => manejarCambioCategoria("bebidaCaliente")}>
                    Bebida Caliente
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => manejarCambioCategoria("bebidaFria")}>
                    Bebida Fría
                  </Nav.Link>
                  <Nav.Link href="#" className="nav-item nav-link" onClick={() => manejarCambioCategoria("bebidaConAlcohol")}>
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
        <ul>
          {productosFiltrados.map((producto) => (
            <li key={producto.id}>
              {/* Renderiza el componente CardProducto solo si está configurado correctamente */}
              <CardProducto producto={producto} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default OffcanvasExample;
