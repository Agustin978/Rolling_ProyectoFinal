import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import { editarUsuario, obtenerUsuarios, eliminarUsuariosAdministrador } from "../../helpers/queries";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';





const ItemUsarios = ({ usuario, setUsuario, contadorUsuarios }) => {
    const [show, setShow] = useState(false);
    const navegacion = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  const borrarUsuario = (usu)=>{
    console.log(usuario.nombreUsuario);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: `¿esta seguro de eliminar el Usuario: ${usuario.nombreUsuario}?`,
      text: "no se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        
       //aqui realizo la peticion delete
       eliminarUsuariosAdministrador(usu._id).then((result)=>{
        if(result.status === 200){
          swalWithBootstrapButtons.fire(
            'Usuario borrado del Sistema!',
            `Usuario ${usu.nombreUsuario}  borrado correctamente.`, 
           'success'
         );
         //se actualiza el state para recargar los productos
         obtenerUsuarios().then((result)=>setUsuario(result))

        }
        else{
          swalWithBootstrapButtons.fire(
            'ERROR !',
               `Intente nueva mente`, 
           'error'
         )
        }
       })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          `No se eliminó el producto: ${usuario.nombreUsuario} :)`,
          'error'
        )
      }
    })
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

    

    editarUsuario(usuarioEditado, usuario._id).then((result) => {
      if (result.status === 200 && result) {
        Swal.fire(
          "Usuario Editada !",
          `El usuario ${usuario._id}  es ${usuarioEditado.type}`,
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
      <td>{contadorUsuarios}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>
        {usuario.type}
      </td>
      <td>
        <div>
          <Button className="ms-auto btnAgregar btn btn-warning mx-2 my-1" onClick={handleShow}>
            Editar
          </Button>
          <Button variant="danger" className="ms-auto btnAgregar " onClick={()=> borrarUsuario(usuario)}>
            Borrar
          </Button>
        </div>
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
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario</option>
                        <option value="bloqueado">Bloqueado</option>
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
      </td>
      
    </tr>
  );
};

export default ItemUsarios;
