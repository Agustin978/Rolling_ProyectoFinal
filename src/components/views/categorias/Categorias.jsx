import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { obtenerProductosPorCategoria } from "./filtradoCategorias";
import { obtenerProductos } from "../../helpers/queries";
import CardProducto from "../producto/cardProducto/CardProducto";
import { Row, Col } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import "./categorias.css";
import Paginacion from "../paginacion/paginacion";
import { Funnel } from "react-bootstrap-icons";

function Categorias({usuarioLogueado}) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [productos, setProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 8;

    const [cargando, setCargando] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
  
  
    useEffect(() => {
      obtenerProductos().then((resp) => {
        setProductos(resp);
        setCargando(false);
      });
      const paginaGuardada = localStorage.getItem("paginaActual");
      if (paginaGuardada) {
        setPaginaActual(parseInt(paginaGuardada, 10));
      }
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

    const handleSearchChange = (e) => {
      const searchTerm = e.target.value.toLowerCase();
      setSearchTerm(searchTerm);

      if (Array.isArray(productos)) {
        const filteredProductos = productos.filter((producto) =>
          producto.nombreProducto.toLowerCase().includes(searchTerm)
        );
        setProductosFiltrados(filteredProductos);
      }
    };
  
    const handleCategoriaSeleccionada = (categoria) => {
      setCategoriaSeleccionada(categoria);
      setPaginaActual(1);
      localStorage.setItem("paginaActual", 1);
    };
  
    const manejarCambioPagina = (numeroPagina) => {
      setPaginaActual(numeroPagina);
      localStorage.setItem("paginaActual", numeroPagina);
    };
  
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productosFiltrados && productosFiltrados.slice(
      indicePrimerProducto,
      indiceUltimoProducto
    );

  return (
    <>
    <input
        type="text"
        placeholder="Buscar productos"
        className="form-control border-3 border-dark form-control-lg mt-3"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {[false].map((expand) => (
        <Navbar key={expand} expand={false} className="pt-5">
          <Container fluid>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="ms-auto"
            >
              <span className="fw-bold fs-5">Filtrar <Funnel/></span>
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
                  <img src={logo} alt="logo" className="logo mb-4" />
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
                    onClick={() =>
                      handleCategoriaSeleccionada("ofertas del dia")
                    }
                  >
                    Ofertas de día!
                  </Nav.Link>
                  <Nav.Link
                    className="nav-item nav-link"
                    onClick={() => handleCategoriaSeleccionada("entrada")}
                  >
                    Entrada
                  </Nav.Link>
                  <Nav.Link
                    className="nav-item nav-link"
                    onClick={() => handleCategoriaSeleccionada("plato fuerte")}
                  >
                    Plato Fuerte
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link"
                    onClick={() =>
                      handleCategoriaSeleccionada("acompaniamientos")
                    }
                  >
                    Acompañamiento
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link"
                    onClick={() => handleCategoriaSeleccionada("postre")}
                  >
                    Postre
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link"
                    onClick={() =>
                      handleCategoriaSeleccionada("bebida caliente")
                    }
                  >
                    Bebida Caliente
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link"
                    onClick={() => handleCategoriaSeleccionada("bebida fria")}
                  >
                    Bebida Fría
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link"
                    onClick={() =>
                      handleCategoriaSeleccionada("bebida con alcohol")
                    }
                  >
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
        {cargando && productosFiltrados.length === 0 ? (
          <Row className="justify-content-start">
          {productosActuales.map((producto) => (
            <Col key={producto._id} sm={6} md={4} lg={3} className="mb-3">
              <CardProducto key={producto._id} producto={producto} usuarioLogueado={usuarioLogueado} />
            </Col>
          ))}
        </Row>

        ) : productosFiltrados.length === 0 ? (
            <p className="display-6 text-danger py-5 text-center">
            No hay productos disponibles en esta categoría ☹️
          </p>
        ) :(
          <Row className="justify-content-start">
            {productosActuales.map((producto) => (
              <Col key={producto._id} sm={6} md={4} lg={3} className="mb-3">
                <CardProducto key={producto._id} producto={producto} usuarioLogueado={usuarioLogueado} />
              </Col>
            ))}
          </Row>
        )}
        {productosFiltrados.length > 0 && productos.length > 0 && (
          <Paginacion
            paginaActual={paginaActual}
            totalPaginas={Math.ceil(
              productosFiltrados.length / productosPorPagina
            )}
            cambiarPagina={manejarCambioPagina}
          />
        )}
      </div>
    </>
  );
}

export default Categorias;