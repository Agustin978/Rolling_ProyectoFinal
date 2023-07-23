import { Button, Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import ItemCarrito from './ItemCarrito';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AgregaDireccion from './AgregaDireccion';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [totalPaga, setTotalPaga] = useState(0);
  const [showDireccion, setShowDireccion] = useState(false);
  const handleShowDireccion = () => setShowDireccion(true);
  const handleCloseDireccion = () => setShowDireccion(false);
  const navigate = useNavigate();
  const actualizaTotal = (precio) =>
  {
    setTotalPaga(totalPaga + precio);
  }

  useEffect(() =>
  {
    const listaPedidos = JSON.parse(localStorage.getItem('carritoCompras')) || [];
    setPedidos(listaPedidos);
    let total = 0;
    listaPedidos.forEach((pedido) => {
      total += Number(pedido.precioUnidad) * Number(pedido.cantidad);
    });
    setTotalPaga(total);
  },[]);

  const eliminarPedido = (pedidoElimina) =>
  {
    const actualizaLista = pedidos.filter((pedido) => pedido.idPedido !== pedidoElimina.idPedido);
    setPedidos(actualizaLista);
    actualizaTotal(-(Number(pedidoElimina.precioUnidad) * Number(pedidoElimina.cantidad)));
    localStorage.setItem('carritoCompras', JSON.stringify(actualizaLista));
  }

  const confirmarPedido = () =>{
    if(pedidos.length === 0)
    {
      Swal.fire('Error', 'Aun no se ingreso ningun plato. Agregue platos del menu a su pedido :)', 'error');
      navigate('/');
    }else
    {
      handleShowDireccion();
    }
  }    
    /*
    pedidos.forEach((pedido)=>confirmaPedidos(pedido).then(respuesta=>
      {
        if(respuesta === 400)
        { 
          Swal.fire('Error',`A ocurrido un error al enviar el pedido ${pedido.nombreProducto}`,'error');
        }
      }));
    Swal.fire({
      icon: 'success',
      title: 'Su pedido fue realizado!',
      showConfirmButton: true,
      confirmButtonColor: "#42D84B",
    })*/

  return (
    <section className="container vh-100">
      <div className="text-center">
        <h1 className="text-center fw-bold display-3 pt-5">Tu Carrito</h1>
        <a href="/" className="text-decoration-none text-danger fw-bolder ">
          Seguir comprando
        </a>
        <hr />
      </div>
      <div>
        <h2>Productos</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>IMAGEN</th>
              <th>NOMBRE</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>SUBTOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {/* Mostrar mensaje cuando no hay pedidos */}
           {pedidos.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  <div className="alert alert-warning" role="alert">
                    No has agregado ningún pedido aún.
                  </div>
                </td>
              </tr>
            )}
            {/* Renderizar los items del carrito si hay pedidos */}
            {pedidos.map((pedido) => (
              <ItemCarrito key={pedido.idPedido || Math.random()} pedido={pedido} eliminarPedido={eliminarPedido}/>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-end">
          <h2 className="ms-auto">Monto Total: ${totalPaga}</h2>
        </div>
        <div className="d-flex justify-content-center pt-5">
          <Button className="btn btn-danger fs-2" onClick={confirmarPedido}>Confirmar Pedido</Button>
          {
            //Aqui se muestra el modal para agregar direccion
            showDireccion && <AgregaDireccion pedidos={pedidos} showDireccion={showDireccion} handleCloseDireccion={handleCloseDireccion}></AgregaDireccion>
          }
        </div>
      </div>
    </section>
  );
};

export default Pedidos;
