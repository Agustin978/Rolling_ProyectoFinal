const URL_usuario = import.meta.env.VITE_API_USUARIO;

//Funcion para realizar el logueo en la pagina
export const login = async (usuario) =>
{
    try
    {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if(usuarioBuscado)
        {
            if(usuarioBuscado.password === usuario.password)
            {
                return usuarioBuscado;
                /*return {
                    status: respuesta.status,
                    mensaje: respuesta.mensaje,
                    usuario: respuesta.nombreUsuario,
                    uid: respuesta.uid,
                    type: 
                }*/
            }else
            {
                //Si las contraseñas no coinciden 
                return 0;
            }
        }else
        {
            //Si no se encuentra ningun usuario con ese mail almacenado
            return 0;
        }
    }catch(error)
    {
        console.log('A ocurrido un error: '+error);
        return null;
    }
}