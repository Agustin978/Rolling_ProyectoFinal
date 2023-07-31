import { TrashFill } from 'react-bootstrap-icons';
import notImage from './../../../assets/notImage.png';
import Swal from "sweetalert2";

const ItemCarritoConfirmado = ({pedidoConfirmado, cancelarPedido}) => {
    const borrarItemPedidoConfirmado = () =>{
        Swal.fire({
          title: '¿Estás seguro(a) de que quiere cancelar este pedido?',
          text: 'La eliminacion del mismo conllevara a un bloqueo de su cuenta, hasta el pago de una multa ddel 10% el pedido realizado. Para realizar la reactivacion de su cuenta debe ponerse en contacto al siguiente mail: admin@admin.com',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#aaa',
          confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
          if (result.isConfirmed) {
            //eliminarPedido(pedido);
            cancelarPedido(pedidoConfirmado);
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
                    src={pedidoConfirmado.imagen ? pedidoConfirmado.imagen : notImage} alt={pedidoConfirmado.nombreProducto}
                    className="w-100 img-fluid"
                />
            </td>
            <td className="col-3 text-truncate pt-4">{pedidoConfirmado.nombreProducto}</td>
            <td className="col-2 text-truncate pt-4">$ {pedidoConfirmado.precioUnidad}</td>
            <td className="col-2 text-truncate pt-4">{pedidoConfirmado.cantidad}</td>
            <td className="col-3 text-truncate pt-4">$ {Number(pedidoConfirmado.precioUnidad) * Number(pedidoConfirmado.cantidad)}</td>
            <td className="col-1 text-truncate pt-4">
            <button className="btn btn-outline-danger" onClick={borrarItemPedidoConfirmado}>
                <TrashFill />
            </button>
            </td>
        </tr>
    );
};

export default ItemCarritoConfirmado;