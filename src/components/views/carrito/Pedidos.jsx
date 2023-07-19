import { Button, Table } from 'react-bootstrap';
import React from "react";
import ItemCarrito from './ItemCarrito';

const Pedidos = () => {

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
            <ItemCarrito></ItemCarrito>
            <ItemCarrito></ItemCarrito>
            <ItemCarrito></ItemCarrito>
          </tbody>
        </Table>
        <div className="d-flex justify-content-end">
          <h2 className="ms-auto">Monto Total: $0,00</h2>
        </div>
        <div className="d-flex justify-content-center pt-5">
          <Button className="btn btn-danger fs-2" >Confirmar Pedido</Button>
        </div>
      </div>
    </section>
  );
};

export default Pedidos;
