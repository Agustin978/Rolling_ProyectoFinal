import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('user')) || null;
    if(!usuarioLogueado)
    {
        return <Navigate to={'/'}></Navigate>
    }else if(usuarioLogueado.type != 'admin')
    {
        return <Navigate to={'/'}></Navigate>
    }else
    {
        return children;
    }
};

export default RutasProtegidas;