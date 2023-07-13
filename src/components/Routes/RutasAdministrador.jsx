import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Usuarios/Administrador";

const RutasAdministrador = () => {
    return (
        <>
            <Routes>
                <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
            </Routes>
        </>
    );
};

export default RutasAdministrador;