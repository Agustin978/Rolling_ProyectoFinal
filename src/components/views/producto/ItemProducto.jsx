import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { eliminarProductoSeccionStorage, obtenerProductos } from '../../helpers/queries';
import notImage from "../../../assets/notImage.png"
const ItemProducto = ({producto,setProductos}) => {

  const borrarProducto = (producto)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: `¿esta seguro de eliminar el producto: ${producto.nombreProducto}?`,
      text: "no se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        
       //aqui realizo la peticion delete
       eliminarProductoSeccionStorage(producto.id).then((result)=>{
        if(result.status === 200){
          swalWithBootstrapButtons.fire(
            'Producto borrado del menu!',
            `Producto ${producto.nombreProducto}  borrado correctamente.`, 
           'success'
         );
         //se actualiza el state para recargar los productos
         obtenerProductos().then((result)=>setProductos(result))

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
          `No se eliminó el producto: ${producto.nombreProducto} :)`,
          'error'
        )
      }
    })
  }


    return (
      <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precioNuevo}</td>
      <td>
        <img
           src={producto.imagen ? producto.imagen : notImage} alt={producto.nombreProducto}
          className="imgAdministrador"
        />
      </td>
      <td>
        {producto.categoria}
      </td>
      <td>
        <Link className="ms-auto btnAgregar btn btn-warning mx-2" to={`/administrador/editar/${producto.id}`}>
          Editar
        </Link>
        <Button variant="danger" className="ms-auto btnAgregar" onClick={()=>borrarProducto(producto)}>
          Borrar
        </Button>
      </td>
    </tr>
    );
};

export default ItemProducto;