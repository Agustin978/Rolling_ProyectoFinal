import { Col, Row, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./detalle.css";
import { obtenerProductosEditar } from "../../helpers/queries";
import notImage from "./../../../assets/notImage.png";
import Swal from "sweetalert2";
import AgregaDetalles from "../Pedidos/AgregaDetalles";
import { Placeholder } from "react-bootstrap";

const Detalle = ({
  usuarioLogueado,
  showDetalles,
  handleCloseDetalles,
  handleShowDetalles,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();
  const [producto, setProductos] = useState({});

  useEffect(() => {
    obtenerProductosEditar(id).then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
      } else {
        // Manejar el caso en que no se encuentren productos con el ID dado
        // Puedes redirigir a la página de error aquí o mostrar un mensaje adecuado
      }
    })
    .catch((error) => {
      // Manejar errores en la llamada a obtenerProductosEditar
      console.error("Error al obtener los productos:", error);
      // Puedes redirigir a la página de error o mostrar un mensaje adecuado
    });

  }, []);

  const agregaAcarrito = () => {
    if (Object.keys(usuarioLogueado).length === 0) {
      Swal.fire(
        "Error",
        "Debe iniciar secion antes de realizar un pedido.",
        "error"
      );
    } else {
      handleShowDetalles();
    }
  };

  return (
    <Container className="mainSection">
      <Row className="mt-3 mb-4">
        <Col
          md={5}
          lg={6}
          className="p-0 d-flex justify-content-center px-4 px-md-0 h-100"
        >
          {producto.imagen ? (
            <img
              src={producto.imagen}
              className="p-md-3 colorBorde rounded-4 imgDetail"
              alt={producto.nombreProducto}
            />
          ) : (
            <Placeholder as="div" animation="glow">
              <Placeholder.Image />
            </Placeholder>
          )}
        </Col>
        <Col md={7} lg={6} className="px-4 h-100">
          {producto.nombreProducto ? (
            <h3 className="pt-4 pb-2 py-xl-4 fw-bold">
              {producto.nombreProducto}
            </h3>
          ) : (
            <Placeholder as="div" animation="glow">
              <Placeholder.Line length="medium" />
            </Placeholder>
          )}
          {producto.descripcion ? (
            <p className="pb-xl-4">{producto.descripcion}</p>
          ) : (
            <Placeholder as="div" animation="glow">
              <Placeholder.Line length="large" />
              <Placeholder.Line length="large" />
              <Placeholder.Line length="large" />
            </Placeholder>
          )}
          <div className="d-flex">
            {producto.precioNuevo ? (
              <p className="pe-5 fw-bold fs-5">
                Precio: ${producto.precioNuevo}
              </p>
            ) : (
              <Placeholder as="div" animation="glow">
                <Placeholder.Line length="medium" />
              </Placeholder>
            )}
            {producto.precioAnterior ? (
              <p className="fw-bold text-decoration-line-through text-danger fs-6">
                Antes: ${producto.precioAnterior}
              </p>
            ) : null}
          </div>
          <Button
            variant="dark"
            className="w-100 rounded-0 py-3 mt-xl-3"
            onClick={agregaAcarrito}
          >
            Agregar al carrito
          </Button>
          {showDetalles && (
            <AgregaDetalles
              showDetalles={showDetalles}
              handleCloseDetalles={handleCloseDetalles}
              producto={producto}
              usuarioLogueado={usuarioLogueado}
            ></AgregaDetalles>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Detalle;
