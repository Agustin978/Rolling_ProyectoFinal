import React from "react";
import { TrashFill } from 'react-bootstrap-icons';

const ItemCarrito = () => {
  return (
    <tr>
      <td className="col-1">
        <img
          src="https://www.eltucumano.com/fotos/cache/notas/2023/02/28/818x460_230228193026_74237.jpg"
          alt=""
          className="w-100 img-fluid"
        />
      </td>
      <td className="col-3 text-truncate pt-4">Sandwich de Milanesa</td>
      <td className="col-2 text-truncate pt-4">$ 1300</td>
      <td className="col-2 text-truncate pt-4">2</td>
      <td className="col-3 text-truncate pt-4">$ 2600</td>
      <td className="col-1 text-truncate pt-4">
        <button className="btn btn-outline-danger">
          <TrashFill />
        </button>
      </td>
    </tr>
  );
};

export default ItemCarrito;
