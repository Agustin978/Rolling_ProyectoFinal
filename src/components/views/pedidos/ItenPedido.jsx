import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import { editarPedidos } from "../../helpers/queries";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ItenProducto = (pedido) => {
  const [show, setShow] = useState(false);
  const [showDatos, setShowDatos] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseDatos = () => setShowDatos(false);
  const handleShowDatos = () => setShowDatos(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (pedidoEditado) => {

    pedido.pedido.estado = pedidoEditado.estado;

    editarPedidos(pedido.pedido, pedido.pedido._id).then((result) => {
      if (result.status === 200 && result) {
        Swal.fire(
          "El estado del pedido fue modificado exitosamente!",
          `:)`,
          "success"
        );
        window.location.href = window.location.href;
      } else {
        Swal.fire("ERROR !", `Intente nueva mente`, "error");
      }
    })
  };

  return (
    <tr>
      <td>{pedido.contadorPedido}</td>
      <td>{pedido.pedido.fechaPedido}</td>
      <td>{pedido.pedido.nombreUsuario}</td>
      <td>{pedido.pedido.detallePedido}</td>
      <td>{pedido.pedido.estado}</td>
      <td>
        <div>
          {" "}
          <Button
            variant="ms-auto btnAgregar btn btn-warning"
            onClick={handleShow}
          >
            Editar
          </Button>
          <Button variant="primary" onClick={handleShowDatos}>
            ver datos
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modificar Tipo de usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Select
                    aria-label="Default select example"
                    {...register("estado", {
                      required: "el estado es obligatorio",
                    })}
                  >
                    <option value="Entregado">Entregado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Cancelado">Cancelado</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose} type="submit">
                  Guardar
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            show={showDatos}
            onHide={handleCloseDatos}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Pedidos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div><span className="fw-bold"> Nombre de Usuario: </span> 
              {  pedido.pedido.nombreUsuario}</div>
              <div><span className="fw-bold"> Email: </span> 
              {  pedido.pedido.email}</div>
              <div><span className="fw-bold"> Fecha del Pedido: </span> 
              {  pedido.pedido.fechaPedido}</div>
              <div><span className="fw-bold"> Nombre del Producto: </span> 
              {  pedido.pedido.nombreProducto}</div>
              <div><span className="fw-bold"> Precio: </span> 
              {  pedido.pedido.precioUnidad}</div>
              <div><span className="fw-bold"> imagen: </span> 
              <img src={  pedido.pedido.imagen} alt="" className="imgAdministrador"/></div>
              <div><span className="fw-bold"> Detalle de Pedido: </span> 
              {  pedido.pedido.detallePedido}</div>
              <div><span className="fw-bold"> Cantidad: </span> 
              {  pedido.pedido.cantidad}</div>
              <div><span className="fw-bold"> Direccion: </span> 
              {  pedido.pedido.direccion}</div>
              <div><span className="fw-bold"> estado: </span> 
              {  pedido.pedido.estado }</div> 
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDatos}>
                cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </td>
    </tr>
  );
};

export default ItenProducto;
