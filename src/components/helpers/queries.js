const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;

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

export const registrarUsuario = async (nuevoUsuario) =>
{
    try
    {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const existeNombreUsuario = listaUsuarios.find((itemUsuario) => itemUsuario.nombreUsuario === nuevoUsuario.nombreUsuario);
        const existeEmailUsuario = listaUsuarios.find((itemUsuario) => itemUsuario.email === nuevoUsuario.email);
        if(!existeEmailUsuario && !existeNombreUsuario)
        {
            if(nuevoUsuario.password === nuevoUsuario.password_r)
            {
                delete nuevoUsuario.password_r;
                nuevoUsuario.type = 'user';
                APICreaUsuario(nuevoUsuario);
                return 200;
            }else
            {
                return 'La confirmacion de la contraseña no coincide con la contraseña ingresada inicialmente.';
            }
        }else
        {
            if(existeEmailUsuario && !existeNombreUsuario)
            {
                return 'El email ingresado ya se encuentra registrado.';
            }else if(!existeEmailUsuario && existeNombreUsuario)
            {
                return'El nombre de usuario ingresado ya se encuentra registrado.';
            }else if(existeEmailUsuario && existeNombreUsuario)
            {
                return 'El nombre de usuario y el mail ingresados ya se encuentran registrados.';
            }
        }
    }catch(error)
    {
        console.log('A ocurrido un error. Info: '+error);
        return null;
    }
}

const APICreaUsuario = async (nuevoUsuario) => 
{
    try
    {
        const respuesta = await fetch(URL_usuario, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        });
        return respuesta;
    }catch(error)
    {
        console.log('A ocurrido un error en metodo APICreaUsuario. Info de error: '+error);
    }
}
export const crearProducto = async (producto) => {
    try {
      const respuesta = await fetch(URL_PRODUCTO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

export  const  obtenerProductos = async ()=>{
    try {
        const respuesta=await fetch(URL_PRODUCTO);
        const listaProducto = await respuesta.json();
        return listaProducto;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export  const  obtenerProductosEditar = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`);
        const productoEditar = await respuesta.json();
        return productoEditar;
    } catch (error) {
        console.log(error);
        
    }
}

export const editarProducto = async(producto ,id)=>{
    try{
        const respuesta = await fetch(URL_PRODUCTO+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch (error){
        console.log(error);
    }
}

export const eliminarProductoSeccionStorage =async(id)=>{
    try {
        //para borrar debemos crear una peticion con un id para borrar 
        const respuesta=await fetch(`${URL_PRODUCTO}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
       
    } catch (error) {
        console.log(error);
        return null;
    }
}