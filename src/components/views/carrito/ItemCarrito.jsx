import { TrashFill } from 'react-bootstrap-icons';
import Swal from "sweetalert2";

const ItemCarrito = ({pedido, eliminarPedido}) => {
  const borrarItemCarrito = () =>{
    Swal.fire({
      title: '¿Estás seguro(a) de que quieres eliminar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPedido(pedido);
        Swal.fire(
          'Eliminado!',
          'El producto fue eliminado!',
          'success'
        )
      }
    })
  }

  return (
    <tr>
      <td className="col-1">
        <img
          src={pedido.imagen ? pedido.imagen : notImage} alt={pedido.nombreProducto}
          className="w-100 img-fluid"
        />
      </td>
      <td className="col-3 text-truncate pt-4">{pedido.nombreProducto}</td>
      <td className="col-2 text-truncate pt-4">$ {pedido.precioUnidad}</td>
      <td className="col-2 text-truncate pt-4">{pedido.cantidad}</td>
      <td className="col-3 text-truncate pt-4">$ {Number(pedido.precioUnidad) * Number(pedido.cantidad)}</td>
      <td className="col-1 text-truncate pt-4">
        <button className="btn btn-outline-danger" onClick={borrarItemCarrito}>
          <TrashFill />
        </button>
      </td>
    </tr>
  );
};

export default ItemCarrito; 