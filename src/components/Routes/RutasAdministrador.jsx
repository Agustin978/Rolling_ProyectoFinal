import { Route, Routes } from "react-router-dom";
import Administrador from "../views/producto/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import AdministradorUsuario from "../views/Usuarios/AdministradorUsuario";
import AdministradorPedidos from "../views/pedidos/AdministradorPedidos";


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
        element={<AdministradorUsuario></AdministradorUsuario>}
        
      ></Route>
      
      <Route
        exact
        path="/pedidos"
        element={<AdministradorPedidos></AdministradorPedidos>}
      ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
