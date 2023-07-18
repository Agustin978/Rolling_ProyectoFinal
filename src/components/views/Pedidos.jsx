import React from 'react';
import { Table } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';

const Pedidos = () => {
    return (
        <section className='container vh-100'>
            <div className='text-center'>
                <h1 className='text-center fw-bold display-3'>Tu carrito</h1>
                <a href="" className='text-decoration-none text-danger fw-bolder '>Seguir comprando</a>
                <hr />
            </div>
            <div>
                <h2>Productos</h2>
                <Table>
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
                        <tr>
                            <td className="col-1 text-truncate"><img src="https://www.eltucumano.com/fotos/cache/notas/2023/02/28/818x460_230228193026_74237.jpg" alt="" className='w-auto img-fluid' /></td>
                            <td className="col-3 text-truncate pt-4">Sandwich de Milanesa</td>
                            <td className="col-2 text-truncate pt-4">$ 1300</td>
                            <td className="col-2 text-truncate pt-4">2</td>
                            <td className="col-3 text-truncate pt-4">$ 2600</td>
                            <td className="col-2 text-truncate pt-4"><button className='btn btn btn-outline-danger'><TrashFill></TrashFill></button></td>
                        </tr>
                        <tr>
                            <td className="col-1 text-truncate"><img src="https://www.eltucumano.com/fotos/cache/notas/2023/02/28/818x460_230228193026_74237.jpg" alt="" className='w-auto img-fluid' /></td>
                            <td className="col-3 text-truncate pt-4">Sandwich de Milanesa</td>
                            <td className="col-2 text-truncate pt-4">$ 1300</td>
                            <td className="col-2 text-truncate pt-4">2</td>
                            <td className="col-3 text-truncate pt-4">$ 2600</td>
                            <td className="col-2 text-truncate pt-4"><button className='btn btn btn-outline-danger'><TrashFill></TrashFill></button></td>
                        </tr>
                    </tbody>
                </Table>
                <div class="d-flex justify-content-end">
                    <h2 class="ms-auto">Monto Total: $0,00</h2>
                </div>
                <div class="d-flex justify-content-center">
                    <button className="btn btn-danger fs-2">Confirmar Pedido</button>
                </div>
                
            </div>
        </section>
    );
};

export default Pedidos;