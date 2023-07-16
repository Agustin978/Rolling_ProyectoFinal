import { Route, Routes } from "react-router-dom";
import Administrador from "../views/producto/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
         <Route
        exact
        path="/crear"
        element={<CrearProducto></CrearProducto>}
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={<EditarProducto></EditarProducto>}
      ></Route>
      <Route
        exact
        path="/usuarios"
        
      ></Route>
      <Route
        exact
        path="/pedidos"
      ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
