import { Navigate } from "react-router-dom";

const RutasProtegidasCarrito = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('user')) || null;
    if(!usuarioLogueado)
    {
        return <Navigate to={'/'}></Navigate>
    }else{               
        return children;
    }
};

export default RutasProtegidasCarrito;