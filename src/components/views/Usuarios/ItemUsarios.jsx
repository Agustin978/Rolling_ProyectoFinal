import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import { editarUsuario } from "../../helpers/queries";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';





const ItemUsarios = ({ usuario, setUsaurio }) => {
    const [show, setShow] = useState(false);
    const navegacion = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  function formularioTxt() {
    if (usuario.type == "admin") {
      return "user";
    } else {
      return "admin";
    }
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (usuarioEditado) => {

    usuarioEditado.nombreUsuario=`${usuario.nombreUsuario}`
    usuarioEditado.email=`${usuario.email}`
    usuarioEditado.password=`${usuario.password}`

    

    editarUsuario(usuarioEditado, usuario.id).then((result) => {
      if (result.status === 200 && result) {
        Swal.fire(
          "Usuario Editada !",
          `El usuario ${usuario.id}  es ${usuarioEditado.type}`,
          "success"
        );
        window.location.href = window.location.href;
      } else {
        Swal.fire("ERROR !", `Intente nueva mente`, "error");
      }
    });
  };

  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>
        {usuario.type}
      </td>
      <td>
        <div>
          {" "}
          
          <Button variant="ms-auto btnAgregar btn btn-warning" onClick={handleShow}>
          Editar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Tipo de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={handleSubmit(onSubmit)}>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
               <Form.Select
                    aria-label="Default select example"
                    {...register("type", {
                        required: "la categoria es obligatoria",
                      })}
                    
                  >
                    <option value={usuario.type}>{usuario.type}</option>
                    <option value={formularioTxt()}>{formularioTxt()}</option>
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
        </div>
        <div>
          {" "}
          <Button variant="danger" className="ms-auto btnAgregar">
            Borrar
          </Button>{" "}
        </div>
      </td>
      
    </tr>
  );
};

export default ItemUsarios;
